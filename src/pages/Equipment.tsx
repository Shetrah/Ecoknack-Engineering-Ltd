import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const equipment = [
  {
    name: 'Tippers / Dump Trucks',
    qty: '6+',
    desc: 'Heavy-duty tipper trucks for material haulage — aggregates, soil and construction materials across all our sites.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=75',
  },
  {
    name: 'Excavators & Backhoe',
    qty: '3+',
    desc: 'Modern excavators and backhoe loaders for earthworks, trenching, demolition and foundation preparation.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=75',
  },
  {
    name: 'Vibratory Rollers',
    qty: '2+',
    desc: 'Vibratory rollers for compaction of road sub-base, base course and asphalt surface layers.',
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format&fit=crop&q=75',
  },
  {
    name: 'Mobile Crane',
    qty: '1+',
    desc: 'Mobile crane for lifting and placing heavy structural steel, precast elements and construction components.',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&auto=format&fit=crop&q=75',
  },
  {
    name: 'Concrete Transit Mixers',
    qty: 'Available',
    desc: 'Drum and transit mixers for consistent, ready-mix concrete supply directly to the point of placement on site.',
    img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&auto=format&fit=crop&q=75',
  },
  {
    name: 'CNC Machine & Fabrication Equipment',
    qty: '1+',
    desc: 'CNC plasma cutting and fabrication equipment for precision metalwork, gates, fences and structural steel.',
    img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&auto=format&fit=crop&q=75',
  },
];

const Equipment: React.FC = () => (
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
            Machinery &amp; Equipment
          </motion.span>
          <motion.h1 variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
            Our Fleet &amp; Equipment
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/75 text-base sm:text-lg leading-relaxed">
            A comprehensive inventory of modern construction machinery enables Ecoknack
            to run 20+ sites simultaneously — making us one of the best contractors regionally.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* ── Equipment grid ── */}
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div initial="hidden" whileInView="visible"
          viewport={{ once: true }} variants={stagger}
          className="text-center mb-12">
          <motion.span variants={fadeUp} className="section-tag mb-4">Our Capacity</motion.span>
          <motion.h2 variants={fadeUp} className="section-title mb-4">
            Machinery &amp; Equipment Inventory
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle max-w-xl mx-auto">
            A wealth of experience, wide integration and comprehensive inventory of
            equipment and construction machinery.
          </motion.p>
        </motion.div>

        {/* Card grid */}
        <motion.div initial="hidden" whileInView="visible"
          viewport={{ once: true }} variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {equipment.map((eq) => (
            <motion.div key={eq.name} variants={fadeUp}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100
                         shadow-card hover:shadow-card-hover hover:-translate-y-1
                         transition-all duration-300 group">
              {/* Image */}
              <div className="h-44 overflow-hidden">
                <img src={eq.img} alt={eq.name}
                     className="w-full h-full object-cover
                                group-hover:scale-105 transition-transform duration-500"
                     loading="lazy" />
              </div>
              {/* Body */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-extrabold text-[#0A3D62] text-base leading-snug">
                    {eq.name}
                  </h3>
                  <span className="flex-shrink-0 ml-3 text-2xl font-extrabold text-[#F7941D]">
                    {eq.qty}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{eq.desc}</p>
              </div>
              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-[#0A3D62] to-[#F7941D]
                              scale-x-0 group-hover:scale-x-100 transition-transform
                              duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>

        {/* Capability summary */}
        <motion.div initial="hidden" whileInView="visible"
          viewport={{ once: true }} variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { value: '20+', label: 'Simultaneous Sites' },
            { value: '12+', label: 'Heavy Equipment Units' },
            { value: '16+', label: 'Technical Teams' },
            { value: '6+',  label: 'Engineers' },
          ].map((s) => (
            <motion.div key={s.label} variants={fadeUp}
              className="bg-[#0A3D62] rounded-2xl p-5 sm:p-6 text-white text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#F7941D] mb-1">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-white/70 font-semibold">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rental CTA */}
        <motion.div initial="hidden" whileInView="visible"
          viewport={{ once: true }} variants={fadeUp}
          className="rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gray-50 p-8 sm:p-10">
              <h3 className="text-2xl font-extrabold text-[#0A3D62] mb-4">
                Equipment Rental
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                In addition to deploying our fleet on our own projects, Ecoknack offers
                competitive equipment rental with operator services available. Flexible rental
                terms for single machines or full fleet packages.
              </p>
              <Link to="/contact" className="btn-primary">
                Inquire About Rental <ArrowRight size={18} />
              </Link>
            </div>
            <div className="h-56 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1607400201889-f39cbeafb61c?w=800&auto=format&fit=crop&q=75"
                alt="Heavy construction equipment on site"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Equipment;
