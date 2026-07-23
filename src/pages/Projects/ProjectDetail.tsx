import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MapPin, Calendar, CheckCircle } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const projectData: Record<string, { title: string; category: string; client: string; location: string; year: string; desc: string; highlights: string[]; color: string }> = {
  'rubis-un-avenue': {
    title: 'Rubis UN Avenue',
    category: 'Design & Build',
    client: 'Rubis Energy Kenya',
    location: 'UN Avenue, Nairobi',
    year: '2024',
    desc: 'Flag ship Rubis UN Avenue — a stunning transformation, a whole gas station upgrade with striking details. Ecoknack undertook a comprehensive design and build renovation of this flagship station, delivering a complete transformation from demolition through to final fit-out.',
    highlights: ['Complete canopy replacement', 'Forecourt resurfacing with cabro', 'Fuel dispensing island upgrades', 'Shop and wash bay construction', 'Electrical & lighting upgrade', 'Signage and branding installation'],
    color: 'from-orange-600 to-orange-400',
  },
  'ola-energy-stations': {
    title: 'OLA Energy Stations',
    category: 'Design & Build',
    client: 'OLA Energy Kenya',
    location: 'Various locations, Kenya',
    year: '2022–2024',
    desc: 'Full design and build service for multiple OLA Energy fuel stations across Kenya. Our team managed the complete lifecycle from site assessment and design through construction and commissioning.',
    highlights: ['Multiple station upgrades', 'Canopy and forecourt works', 'Underground tank installation', 'Electrical and plumbing', 'Branding and fit-out', 'Project management'],
    color: 'from-yellow-600 to-yellow-400',
  },
  'warehouses-godowns': {
    title: 'Warehouses & Godowns',
    category: 'Building Construction',
    client: 'Various Clients',
    location: 'Nairobi & Environs',
    year: '2022–2024',
    desc: 'Warehouses and Godowns: From design to delivery, one stop service — from customized design, fabrication and erection. Ecoknack provides complete industrial building solutions for storage and logistics clients.',
    highlights: ['Structural steel fabrication', 'Concrete flooring & hardening', 'Roofing & cladding systems', 'Loading bay construction', 'Drainage & surfacing', 'Office and amenity fit-out'],
    color: 'from-primary to-blue-700',
  },
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-2xl font-bold text-primary mb-4">Project Not Found</h2>
        <p className="text-gray-500 mb-6">This project doesn't exist or may have been moved.</p>
        <Link to="/projects" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
          <ArrowLeft size={18} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className={`bg-gradient-to-r ${project.color} text-white py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-4">
              <Link to="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <ArrowLeft size={16} /> Back to Projects
              </Link>
            </motion.div>
            <motion.span variants={fadeUp} className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {project.category}
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-5">{project.title}</motion.h1>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-5 text-white/80 text-sm">
              <span className="flex items-center gap-1.5"><MapPin size={14} />{project.location}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} />{project.year}</span>
              <span>Client: <strong className="text-white">{project.client}</strong></span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-5">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">{project.desc}</p>
              <p className="text-gray-600 leading-relaxed">
                Ecoknack Engineering Limited engaged its full planning and management capabilities to deliver this project to the highest standards, embracing new technology and innovative approaches throughout the construction process.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-primary mb-4">Project Highlights</h3>
                <ul className="space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary text-white rounded-xl p-6">
                <h3 className="font-bold mb-3">Start Your Project</h3>
                <p className="text-white/75 text-sm mb-4">Get a free consultation from our expert team for a similar project.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all w-full justify-center">
                  Request Quote <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <div className="border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/projects" className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors">
            <ArrowLeft size={18} /> All Projects
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-semibold transition-all">
            Discuss a Project <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
