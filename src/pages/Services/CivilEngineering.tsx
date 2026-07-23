import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const CivilEngineering: React.FC = () => {
  const services = ['Site clearance & earthworks', 'Foundation engineering', 'Drainage systems', 'Water works & pipelines', 'Culverts & bridges', 'Retaining walls', 'Paving & surfacing', 'Infrastructure projects'];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-800 to-accent text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">Services / Civil Engineering</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-5">Civil Engineering Services</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/85">
              Expert civil engineering and infrastructure solutions. NCA certified for Civil Works and Water Works, delivering precision engineering across Kenya.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <motion.div variants={fadeUp}>
              <Wrench size={40} className="text-accent mb-5" />
              <h2 className="text-3xl font-bold text-primary mb-5">Precision Civil Works</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Ecoknack Engineering Ltd provides excellence in a wide range of industrial & civil works across Kenya. Our NCA-certified civil engineering team brings technical expertise to every project — from earthworks and drainage to complete infrastructure delivery.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We engage our planning and management skills to deliver the highest standards in civil construction, embracing new technology and striving to bring innovative and unique ideas on all our projects.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-accent flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {[
                { label: 'NCA Certified', sub: 'Civil & Water Works' },
                { label: '20+ Active Sites', sub: 'Simultaneously managed' },
                { label: '12+ Machinery', sub: 'Modern heavy equipment' },
                { label: 'Kenya-wide', sub: 'Project delivery' },
              ].map((item) => (
                <div key={item.label} className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.sub}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Civil Project?</h2>
          <p className="text-white/80 mb-8">Get a free site assessment and expert consultation for your civil engineering project.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CivilEngineering;
