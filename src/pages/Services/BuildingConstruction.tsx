import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const BuildingConstruction: React.FC = () => {
  const services = ['Residential homes', 'Commercial buildings', 'Luxury home construction', 'Industrial facilities', 'Refurbishment & fit-out', 'Structural repairs', 'Foundation works', 'Roofing & cladding'];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">Services / Building Construction</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-5">Building Construction Services</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/85">
              All-in-one design and build construction services to save you the inconvenience of juggling multiple service providers. Building your dream home? We will help you save cost and time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <motion.div variants={fadeUp}>
              <Building2 size={40} className="text-secondary mb-5" />
              <h2 className="text-3xl font-bold text-primary mb-5">Professional Building Works</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Contact us today for consultation and discover why we are the to-go choice for luxury home constructions. We strive to ensure that each client's unique needs and vision are met with precision and attention to detail.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team of construction professionals boasts knowledge and skills in construction projects, ensuring that every aspect is handled with utmost professionalism and care. From foundation to finishing, we manage every detail.
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

            <motion.div variants={fadeUp} className="space-y-4">
              {[
                { title: 'Residential Construction', desc: 'From single-storey homes to multi-unit apartment blocks, built to your specifications with quality materials.' },
                { title: 'Commercial Buildings', desc: 'Office complexes, retail spaces, warehouses and industrial facilities designed for functionality and longevity.' },
                { title: 'Refurbishment', desc: 'Comprehensive renovation services delivering exceptional results that exceed client expectations.' },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-6 border-l-4 border-secondary">
                  <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Building Today</h2>
          <p className="text-white/80 mb-8">Get a free consultation and discover why we are Kenya's trusted building construction partner.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-bold transition-all">
            Get Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BuildingConstruction;
