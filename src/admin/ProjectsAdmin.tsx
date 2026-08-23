import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Trash2, Pencil, Save, XCircle } from 'lucide-react';
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { db, isFirebaseConfigured } from '../lib/firebase';
import type { ProjectRecord } from '../data/siteContent';
import { defaultProjects } from '../data/siteContent';

type ProjectFormState = Omit<ProjectRecord, 'id'> & { id?: string };

const emptyForm: ProjectFormState = {
  title: '',
  category: 'Design & Build',
  desc: '',
  image: '',
  client: '',
  location: '',
  year: '',
  highlights: [''],
  color: 'from-primary to-blue-700',
};

const ProjectsAdmin: React.FC = () => {
  const [projects, setProjects] = useState<ProjectRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<ProjectFormState>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!isFirebaseConfigured || !db) {
      setProjects(defaultProjects);
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(collection(db, 'projects'), (snapshot) => {
      const items = snapshot.docs.map((docItem) => ({
        id: docItem.id,
        ...(docItem.data() as Omit<ProjectRecord, 'id'>),
      })) as ProjectRecord[];
      setProjects(items.length ? items : defaultProjects);
      setLoading(false);
    }, () => {
      setProjects(defaultProjects);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const categories = useMemo(() => Array.from(new Set(projects.map((project) => project.category))), [projects]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!db) {
      toast.error('Firebase is not configured yet.');
      return;
    }

    const cleaned = {
      ...form,
      highlights: form.highlights.filter(Boolean),
      image: form.image || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&auto=format&fit=crop&q=75',
    };

    try {
      if (editingId) {
        await updateDoc(doc(db, 'projects', editingId), cleaned);
        toast.success('Project updated');
      } else {
        await addDoc(collection(db, 'projects'), cleaned);
        toast.success('Project added');
      }
      setForm(emptyForm);
      setEditingId(null);
      setShowForm(false);
    } catch (error) {
      console.error(error);
      toast.error('Unable to save project right now.');
    }
  };

  const handleEdit = (project: ProjectRecord) => {
    setForm({ ...project, highlights: project.highlights.length ? project.highlights : [''] });
    setEditingId(project.id);
    setShowForm(true);
  };

  const handleDelete = async (projectId: string) => {
    if (!db) return;
    try {
      await deleteDoc(doc(db, 'projects', projectId));
      toast.success('Project removed');
    } catch (error) {
      console.error(error);
      toast.error('Unable to delete project.');
    }
  };

  const updateHighlight = (index: number, value: string) => {
    const next = [...(form.highlights || [''])];
    next[index] = value;
    setForm((current) => ({ ...current, highlights: next }));
  };

  const addHighlightField = () => setForm((current) => ({ ...current, highlights: [...(current.highlights || []), ''] }));

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between mb-8 gap-3">
          <div className="flex items-center gap-3">
            <Link to="/admin" className="text-gray-500 hover:text-primary transition-colors"><ArrowLeft size={20} /></Link>
            <div>
              <h1 className="text-2xl font-bold text-primary">Projects</h1>
              <p className="text-sm text-gray-500">Manage the projects shown on the website.</p>
            </div>
          </div>
          <button
            onClick={() => {
              setShowForm(true);
              setForm(emptyForm);
              setEditingId(null);
            }}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-secondary transition-colors"
          >
            <Plus size={16} /> Add Project
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 mb-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-primary">{editingId ? 'Edit Project' : 'New Project'}</h2>
              <button type="button" onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                <XCircle size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} className="border border-gray-200 rounded-lg px-3 py-2" placeholder="Project title" />
              <input required value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} className="border border-gray-200 rounded-lg px-3 py-2" placeholder="Category" />
              <input value={form.client} onChange={(event) => setForm({ ...form, client: event.target.value })} className="border border-gray-200 rounded-lg px-3 py-2" placeholder="Client" />
              <input value={form.location} onChange={(event) => setForm({ ...form, location: event.target.value })} className="border border-gray-200 rounded-lg px-3 py-2" placeholder="Location" />
              <input value={form.year} onChange={(event) => setForm({ ...form, year: event.target.value })} className="border border-gray-200 rounded-lg px-3 py-2" placeholder="Year" />
              <input value={form.image} onChange={(event) => setForm({ ...form, image: event.target.value })} className="border border-gray-200 rounded-lg px-3 py-2" placeholder="Image URL" />
            </div>
            <textarea required value={form.desc} onChange={(event) => setForm({ ...form, desc: event.target.value })} rows={4} className="w-full border border-gray-200 rounded-lg px-3 py-2" placeholder="Project description" />
            <div>
              <label className="text-sm font-medium text-gray-600">Highlights</label>
              <div className="space-y-2 mt-2">
                {(form.highlights || ['']).map((highlight, index) => (
                  <input key={`${highlight}-${index}`} value={highlight} onChange={(event) => updateHighlight(index, event.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2" placeholder={`Highlight ${index + 1}`} />
                ))}
              </div>
              <button type="button" onClick={addHighlightField} className="mt-2 text-sm text-primary hover:text-secondary">+ Add another highlight</button>
            </div>
            <div className="flex justify-end gap-3">
              <button type="button" onClick={resetForm} className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600">Cancel</button>
              <button type="submit" className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold">
                <Save size={16} /> {editingId ? 'Save Changes' : 'Create Project'}
              </button>
            </div>
          </form>
        )}

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-primary">Current Projects</h2>
              <p className="text-sm text-gray-500">{projects.length} items available</p>
            </div>
            <div className="text-sm text-gray-500">Categories: {categories.join(', ') || 'None'}</div>
          </div>

          {loading ? (
            <div className="p-8 text-center text-gray-400">Loading projects…</div>
          ) : projects.length === 0 ? (
            <div className="p-8 text-center text-gray-400">No projects yet. Add one to start.</div>
          ) : (
            <div className="divide-y divide-gray-100">
              {projects.map((project) => (
                <div key={project.id} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex gap-4 items-start">
                    <img src={project.image} alt={project.title} className="w-24 h-16 object-cover rounded-lg" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-500">{project.category} • {project.client}</p>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{project.desc}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(project)} className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">
                      <Pencil size={16} /> Edit
                    </button>
                    <button onClick={() => handleDelete(project.id)} className="flex items-center gap-1 px-3 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50">
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsAdmin;
