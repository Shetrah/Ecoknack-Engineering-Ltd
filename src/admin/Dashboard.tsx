import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart3, FileText, Image, Users, MessageSquare, Quote, Settings, LogOut } from 'lucide-react';

const cards = [
  { title: 'Total Projects', value: '360+', icon: FileText, color: 'from-blue-500 to-blue-600', link: '/admin/projects' },
  { title: 'Gallery Images', value: '0', icon: Image, color: 'from-green-500 to-green-600', link: '/admin/gallery' },
  { title: 'Blog Posts', value: '0', icon: FileText, color: 'from-purple-500 to-purple-600', link: '/admin/blog' },
  { title: 'Team Members', value: '0', icon: Users, color: 'from-orange-500 to-orange-600', link: '/admin/team' },
  { title: 'Quote Requests', value: '0', icon: Quote, color: 'from-pink-500 to-pink-600', link: '/admin/quotes' },
  { title: 'Messages', value: '0', icon: MessageSquare, color: 'from-cyan-500 to-cyan-600', link: '/admin/quotes' },
];

const navLinks = [
  { icon: BarChart3, label: 'Dashboard', path: '/admin' },
  { icon: FileText, label: 'Projects', path: '/admin/projects' },
  { icon: Image, label: 'Gallery', path: '/admin/gallery' },
  { icon: FileText, label: 'Blog', path: '/admin/blog' },
  { icon: Users, label: 'Team', path: '/admin/team' },
  { icon: Quote, label: 'Quotes', path: '/admin/quotes' },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-6 min-h-screen shadow-lg flex flex-col">
        <div className="mb-8">
          <h1 className="text-xl font-bold">Ecoknack Admin</h1>
          <p className="text-white/50 text-xs mt-1">Management Panel</p>
        </div>
        <nav className="space-y-2 flex-1">
          {navLinks.map((n) => (
            <Link key={n.path} to={n.path} className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/20 transition-colors text-sm font-medium">
              <n.icon size={18} />{n.label}
            </Link>
          ))}
        </nav>
        <div className="pt-4 border-t border-white/20 space-y-2">
          <Link to="/" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/20 transition-colors text-sm">
            <Settings size={18} /> Settings
          </Link>
          <Link to="/" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-red-500/30 text-red-300 transition-colors text-sm">
            <LogOut size={18} /> Back to Site
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-primary">Dashboard</h2>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">A</div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {cards.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <Link to={c.link} className={`block bg-gradient-to-br ${c.color} rounded-xl p-6 text-white shadow hover:shadow-xl transition-shadow`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold opacity-80">{c.title}</span>
                  <c.icon size={24} className="opacity-40" />
                </div>
                <div className="text-3xl font-bold">{c.value}</div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-bold text-primary mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/admin/projects" className="bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors">
              <FileText size={20} className="text-blue-600 mb-2" />
              <div className="font-semibold text-blue-900 text-sm">Manage Projects</div>
            </Link>
            <Link to="/admin/gallery" className="bg-green-50 hover:bg-green-100 rounded-lg p-4 transition-colors">
              <Image size={20} className="text-green-600 mb-2" />
              <div className="font-semibold text-green-900 text-sm">Upload Gallery</div>
            </Link>
            <Link to="/admin/quotes" className="bg-pink-50 hover:bg-pink-100 rounded-lg p-4 transition-colors">
              <Quote size={20} className="text-pink-600 mb-2" />
              <div className="font-semibold text-pink-900 text-sm">View Quote Requests</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
