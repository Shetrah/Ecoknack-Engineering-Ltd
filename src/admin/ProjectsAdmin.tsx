import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';

const ProjectsAdmin: React.FC = () => (
  <div className="min-h-screen bg-gray-100 p-8">
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Link to="/admin" className="text-gray-500 hover:text-primary transition-colors"><ArrowLeft size={20} /></Link>
          <h1 className="text-2xl font-bold text-primary">Projects</h1>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-secondary transition-colors">
          <Plus size={16} /> Add Project
        </button>
      </div>
      <div className="bg-white rounded-xl shadow p-12 text-center text-gray-400">
        <p className="text-lg font-medium mb-2">Project management coming soon</p>
        <p className="text-sm">Connect a CMS or database to manage projects dynamically.</p>
      </div>
    </div>
  </div>
);

export default ProjectsAdmin;
