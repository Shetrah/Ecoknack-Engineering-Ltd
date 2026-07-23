import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const categories = ['All', 'Design & Build', 'Solar Energy', 'Road Works', 'Building', 'Civil'];

/* Real Unsplash images per category */
const projects = [
  {
    id: 'rubis-un-avenue',
    title: 'Rubis UN Avenue',
    category: 'Design & Build',
    desc: 'Flagship gas station — a stunning transformation, whole station upgrade with striking architectural details.',
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700&auto=format&fit=crop&q=75',
  },
  {
    id: 'ola-energy-stations',
    title: 'OLA Energy Stations',
    category: 'Design & Build',
    desc: 'Full design and build for OLA Energy fuel stations across Kenya including canopy, forecourt and facilities.',
    img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=700&auto=format&fit=crop&q=75',
  },
  {
    id: 'kobil-station-upgrade',
    title: 'Kobil Station Upgrade',
    category: 'Design & Build',
    desc: 'Comprehensive station upgrade delivering exceptional renovation results that exceed client expectations.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&auto=format&fit=crop&q=75',
  },
  {
    id: 'shell-stations',
    title: 'Shell Stations',
    category: 'Design & Build',
    desc: 'Multiple Shell fuel station construction and refurbishment projects across Nairobi and Kenya.',
    img: 'https://images.unsplash.com/photo-1590644365607-5b8b4e4a2a34?w=700&auto=format&fit=crop&q=75',
  },
  {
    id: 'solar-installations',
    title: 'Commercial Solar Installations',
    category: 'Solar Energy',
    desc: 'High-quality commercial and industrial solar panel installations as authorised Jinko Solar partner.',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700&auto=format&fit=crop&q=75',
  },
  {
    id: 'road-nairobi',
    title: 'Nairobi Road Works',
    category: 'Road Works',
    desc: 'Bituminous and cabro road construction with precision layering for optimal load distribution.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&auto=format&fit=crop&q=75',
  },
  {
    id: 'drainage-projects',
    title: 'Drainage & Infrastructure',
    category: 'Civil',
    desc: 'Road drainage channels, culverts and storm-water management systems across multiple counties.',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&auto=format&fit=crop&q=75',
  },
  {
    id: 'warehouses-godowns',
    title: 'Warehouses & Godowns',
    category: 'Building',
    desc: 'From design to delivery — one-stop service including customised design, fabrication and erection.',
    img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=700&auto=format&fit=crop&q=75',
  },
  {
    id: 'american-tower',
    title: 'American Tower Sites',
    category: 'Civil',
    desc: 'Telecom tower foundation, civils and electrical works for American Tower Corporation across Kenya.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&auto=format&fit=crop&q=75',
  },
  {
    id: 'eaton-towers',
    title: 'Eaton Towers Projects',
    category: 'Civil',
    desc: 'Civil and electrical infrastructure works for Eaton Towers telecom sites across East Africa.',
    img: 'https://images.unsplash.com/photo-1607400201889-f39cbeafb61c?w=700&auto=format&fit=crop&q=75',
  },
  {
    id: 'unilever-factory',
    title: 'Unilever Facility Works',
    category: 'Building',
    desc: 'Industrial facility construction and refurbishment works for Unilever East Africa.',
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=700&auto=format&fit=crop&q=75',
  },
  {
    id: 'kakamega-roads',
    title: 'Kakamega County Roads',
    category: 'Road Works',
    desc: 'County road construction and drainage works delivered for Kakamega County Government.',
    img: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=700&auto=format&fit=crop&q=75',
  },
];

const Projects: React.FC = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative bg-[#0A3D62] text-white py-20 sm:py-28 overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&auto=format&fit=crop&q=60"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62]/95 to-[#0A3D62]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp}
              className="inline-block bg-white/15 text-white/90 text-xs font-bold
                         uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Our Portfolio
            </motion.span>
            <motion.h1 variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
              Featured Projects
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/75 text-base sm:text-lg leading-relaxed">
              The company has earned recognition for its vast portfolio of projects —
              landmarks and popular establishments for reputable clients and leading consultant firms.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-[#0A3D62]/5 border-b border-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-center">
            {[
              { value: '360+', label: 'Sites Completed' },
              { value: '20+',  label: 'Active Sites' },
              { value: '7',    label: 'Service Categories' },
              { value: '2018', label: 'Founded' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl sm:text-2xl font-extrabold text-[#0A3D62]">{s.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Filter + Grid ── */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold
                            transition-all duration-200 ${
                  active === cat
                    ? 'bg-[#0A3D62] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {filtered.map((project) => (
                <Link key={project.id} to={`/projects/${project.id}`}
                  className="group block rounded-2xl overflow-hidden border border-gray-100
                             shadow-card hover:shadow-card-hover hover:-translate-y-1
                             transition-all duration-300 bg-white">
                  {/* Image */}
                  <div className="h-44 overflow-hidden relative">
                    <img src={project.img} alt={project.title}
                         className="w-full h-full object-cover
                                    group-hover:scale-105 transition-transform duration-500"
                         loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t
                                    from-black/40 to-transparent" />
                    <span className="absolute bottom-3 left-4 bg-white/15 text-white
                                     text-xs font-bold uppercase tracking-widest
                                     px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  {/* Body */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-base font-extrabold text-[#0A3D62] mb-2
                                   group-hover:text-[#F7941D] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {project.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-bold
                                     text-[#F7941D]">
                      View Details
                      <ArrowRight size={13}
                        className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 sm:py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A3D62] mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-500 mb-8 text-sm sm:text-base">
            Get a free consultation from our expert team. We bring planning, design,
            project management and construction under one roof.
          </p>
          <Link to="/contact" className="btn-primary">
            Request a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
