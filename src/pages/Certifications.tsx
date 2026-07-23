import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const certifications = [
  { name: 'NCA – Electrical Works', body: 'National Construction Authority', desc: 'Certified to undertake electrical installation and infrastructure works.', color: 'border-yellow-400 bg-yellow-50' },
  { name: 'NCA – Civil Works', body: 'National Construction Authority', desc: 'Certified for civil engineering and infrastructure construction.', color: 'border-blue-400 bg-blue-50' },
  { name: 'NCA – Building Works', body: 'National Construction Authority', desc: 'Certified for residential, commercial and industrial building construction.', color: 'border-green-400 bg-green-50' },
  { name: 'NCA – Water Works', body: 'National Construction Authority', desc: 'Certified for water supply, pipelines and drainage infrastructure.', color: 'border-cyan-400 bg-cyan-50' },
  { name: 'CAK Accredited', body: 'Communications Authority of Kenya', desc: 'Accredited for telecommunications infrastructure installation and works.', color: 'border-purple-400 bg-purple-50' },
  { name: 'EPRA Accredited', body: 'Energy & Petroleum Regulatory Authority', desc: 'Accredited for petroleum and energy infrastructure construction.', color: 'border-orange-400 bg-orange-50' },
  { name: 'ICTA Accredited', body: 'ICT Authority', desc: 'Accredited for ICT infrastructure implementation.', color: 'border-red-400 bg-red-50' },
];

const Certifications: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">Certifications</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-5">Licences & Accreditations</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/85">
              A wealth of experience, wide integration and comprehensive inventory of equipment has made Ecoknack one of the best contractors regionally — certified and accredited across all key sectors.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {certifications.map((cert) => (
              <motion.div key={cert.name} variants={fadeUp} className={`rounded-xl border-l-4 ${cert.color} p-7 hover:shadow-lg transition-shadow`}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-base mb-1">{cert.name}</h3>
                    <p className="text-secondary text-xs font-semibold mb-2">{cert.body}</p>
                    <p className="text-gray-500 text-sm">{cert.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-start gap-5">
              <CheckCircle size={32} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Why Certifications Matter</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our certifications from the National Construction Authority (NCA), Communications Authority of Kenya (CAK), Energy and Petroleum Regulatory Authority (EPRA) and ICT Authority (ICTA) demonstrate our commitment to operating within the highest professional and regulatory standards in Kenya's construction and engineering industry.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Work With a Certified Contractor</h2>
          <p className="text-white/80 mb-8">All our projects are delivered by certified, accredited professionals to the highest industry standards.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-bold transition-all">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
