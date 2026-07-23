import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const RoadConstruction: React.FC = () => {
  const services = ['Bituminous road construction', 'Cabro paving & installation', 'Sub-base & base preparation', 'Surface dressing', 'Road drainage systems', 'Culverts & crossings', 'Road markings', 'Maintenance & repairs'];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">Services / Road Construction</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-5">Road Construction & Drainage</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/85">
              We build bituminous and cabro roads that can withstand heavy traffic without deformation. Each stratum from sub-base to surface is laid with precision for optimal load distribution.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <motion.div variants={fadeUp}>
              <MapPin size={40} className="text-secondary mb-5" />
              <h2 className="text-3xl font-bold text-primary mb-5">Precision Road Engineering</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our road construction team delivers durable, high-performance roads engineered to handle heavy traffic loads. We use modern machinery and proven techniques to ensure every layer meets the highest standards.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From rural access roads to urban streets, we manage every aspect of road construction including earthworks, drainage, pavement layers, and finishing. NCA certified for road works.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              {[
                { title: 'Bituminous Roads', desc: 'High-quality asphalt roads engineered for longevity and heavy traffic resistance with multiple compacted layers.' },
                { title: 'Cabro Paving', desc: 'Interlocking concrete block paving for driveways, parking areas, walkways and urban roads with precision installation.' },
                { title: 'Drainage Works', desc: 'Comprehensive drainage solutions including open channels, culverts and storm-water management systems.' },
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
          <h2 className="text-3xl font-bold mb-4">Build Better Roads With Us</h2>
          <p className="text-white/80 mb-8">Contact our road construction specialists for a site assessment and competitive quote.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-bold transition-all">
            Get a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RoadConstruction;
