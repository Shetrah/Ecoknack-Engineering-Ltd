import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../../lib/firebase';
import { defaultProjects, type ProjectRecord } from '../../data/siteContent';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectRecord[]>(defaultProjects);
  const [active, setActive] = useState('All');

  useEffect(() => {
    if (!isFirebaseConfigured || !db) {
      setProjects(defaultProjects);
      return;
    }

    const unsubscribe = onSnapshot(collection(db, 'projects'), (snapshot) => {
      const items = snapshot.docs.map((docItem) => ({
        id: docItem.id,
        ...(docItem.data() as Omit<ProjectRecord, 'id'>),
      })) as ProjectRecord[];
      setProjects(items.length ? items : defaultProjects);
    });

    return () => unsubscribe();
  }, []);

  const categoryList = useMemo(() => ['All', ...Array.from(new Set(projects.map((project) => project.category)))], [projects]);
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
            {categoryList.map((cat) => (
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
                    <img src={project.image} alt={project.title}
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
