import axios from 'axios';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';
import type { ProjectRecord } from '../data/siteContent';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const apiTimeout = Number(import.meta.env.VITE_API_TIMEOUT ?? 30000);

const apiClient = axios.create({
  baseURL: apiBaseUrl,
  timeout: apiTimeout,
});

export const isApiConfigured = Boolean(apiBaseUrl);

const normalizeProject = (data: any): ProjectRecord => ({
  id: data.id ?? data._id ?? String(data.id ?? data._id ?? ''),
  title: data.title ?? '',
  category: data.category ?? 'Design & Build',
  desc: data.desc ?? '',
  image: data.image ?? '',
  client: data.client ?? '',
  location: data.location ?? '',
  year: data.year ?? '',
  highlights: Array.isArray(data.highlights) ? data.highlights : [],
  color: data.color ?? 'from-primary to-blue-700',
});

export const fetchProjects = async (): Promise<ProjectRecord[]> => {
  if (isApiConfigured) {
    try {
      const response = await apiClient.get('/projects');
      if (Array.isArray(response.data)) {
        return response.data.map(normalizeProject);
      }
      throw new Error('Unexpected projects response from API');
    } catch (error) {
      console.warn('Project API read failed, falling back to Firebase:', error);
    }
  }

  if (isFirebaseConfigured && db) {
    const snapshot = await getDocs(collection(db, 'projects'));
    return snapshot.docs.map((docItem) => normalizeProject({ id: docItem.id, ...docItem.data() }));
  }

  return [];
};

export const fetchProjectById = async (projectId: string): Promise<ProjectRecord | null> => {
  if (isApiConfigured) {
    try {
      const response = await apiClient.get(`/projects/${projectId}`);
      return normalizeProject(response.data);
    } catch (error) {
      console.warn('Project detail API read failed, falling back to Firebase:', error);
    }
  }

  if (isFirebaseConfigured && db) {
    const docRef = doc(db, 'projects', projectId);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) return null;
    return normalizeProject({ id: snapshot.id, ...snapshot.data() });
  }

  return null;
};

export const createProject = async (project: Omit<ProjectRecord, 'id'>): Promise<ProjectRecord> => {
  if (isApiConfigured) {
    const response = await apiClient.post('/admin/projects', project);
    return normalizeProject(response.data ?? project);
  }

  if (isFirebaseConfigured && db) {
    const docRef = await addDoc(collection(db, 'projects'), project);
    return { id: docRef.id, ...project };
  }

  throw new Error('No backend available for project creation');
};

export const updateProject = async (projectId: string, project: Omit<ProjectRecord, 'id'>): Promise<ProjectRecord> => {
  if (isApiConfigured) {
    const response = await apiClient.put(`/admin/projects/${projectId}`, project);
    return normalizeProject(response.data ?? { id: projectId, ...project });
  }

  if (isFirebaseConfigured && db) {
    const docRef = doc(db, 'projects', projectId);
    await updateDoc(docRef, project);
    return { id: projectId, ...project };
  }

  throw new Error('No backend available for project update');
};

export const deleteProject = async (projectId: string): Promise<void> => {
  if (isApiConfigured) {
    await apiClient.delete(`/admin/projects/${projectId}`);
    return;
  }

  if (isFirebaseConfigured && db) {
    await deleteDoc(doc(db, 'projects', projectId));
    return;
  }

  throw new Error('No backend available for project deletion');
};
