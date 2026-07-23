import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Building2, Hammer, MapPin, Radio, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const industries = [
  { icon: Zap, title: 'Oil & Gas', desc: 'Rich heritage with 360+ sites completed for leading oil companies including Rubis, OLA, Shell, and Kobil. Full design and build for fuel stations and oil infrastructure.', clients: ['Rubis', 'OLA Energy', 'Shell', 'Kobil'] },
  { icon: Building2, title: 'Real Estate & Construction', desc: 'Residential and commercial property construction — from luxury homes to apartment blocks, warehouses and industrial facilities.', clients: ['Private Developers', 'County Governments'] },
  { icon: Radio, title: 'Telecommunications', desc: 'Tower foundations, civils, and electrical works for major telecom tower companies across Kenya and East Africa.', clients: ['American Tower', 'Eaton Towers', 'Lead Com'] },
  { icon: Zap, title: 'Renewable Energy', desc: 'Authorised Jinko Solar partner delivering domestic and commercial solar installations, grid-tie systems and backup power solutions across Kenya.', clients: ['Commercial Clients', 'Residential Clients'] },
  { icon: MapPin, title: 'Government & Infrastructure', desc: 'Road construction, drainage, and civil infrastructure works for county and national government projects.', clients: ['Kakamega County Govt', 'Various Counties'] },
  { icon: Droplets, title: 'Water Works', desc: 'NCA certified water works including pipelines, water supply systems and drainage infrastructure.', clients: ['NWSC', 'County Govts'] },
  { icon: Hammer, title: 'Manufacturing & Industrial', desc: 'Factory construction, warehouse facilities, and industrial fit-out for leading FMCG and manufacturing companies.', clients: ['Unilever', 'PZ Cussons', 'Egypro'] },
  { icon: Building2, title: 'CNC & Fabrication', desc: 'Creative design solutions and cost-effective manufacturing using sophisticated CNC equipment and skilled welding engineers.', clients: ['Various Industries'] },
];

const Industries: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">Industries</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-5">Industries We Serve</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/85">
              Ecoknack Engineering provides excellence across a wide range of green energy works, industrial & civil, refurbishment and fit-out projects across Kenya.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((ind) => (
              <motion.div key={ind.title} variants={fadeUp} className="bg-white border border-gray-100 rounded-xl p-7 shadow-md hover:shadow-xl hover:border-secondary transition-all duration-300 group">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                    <ind.icon size={22} className="text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">{ind.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{ind.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {ind.clients.map((c) => (
                        <span key={c} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Work With Us in Your Industry</h2>
          <p className="text-gray-500 mb-8">Our integrated approach ensures quality delivery across every sector we operate in.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-4 rounded-lg font-bold transition-all">
              Get a Quote <ArrowRight size={18} />
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-bold transition-all">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
