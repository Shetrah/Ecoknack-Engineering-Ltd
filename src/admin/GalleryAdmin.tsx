import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const GalleryAdmin: React.FC = () => (
  <div className="min-h-screen bg-gray-100 p-8">
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/admin" className="text-gray-500 hover:text-primary transition-colors"><ArrowLeft size={20} /></Link>
        <h1 className="text-2xl font-bold text-primary">Gallery</h1>
      </div>
      <div className="bg-white rounded-xl shadow p-12 text-center text-gray-400">
        <p className="text-lg font-medium mb-2">Gallery management coming soon</p>
        <p className="text-sm">Connect Cloudinary or Firebase Storage to manage images.</p>
      </div>
    </div>
  </div>
);

export default GalleryAdmin;
