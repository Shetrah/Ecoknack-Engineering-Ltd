import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Sun, Battery, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const SolarEnergy: React.FC = () => {
  const features = [
    'Domestic solar panel installations',
    'Commercial & industrial solar systems',
    'Power backup & battery storage',
    'Solar water heating systems',
    'Off-grid solar solutions',
    'System monitoring & maintenance',
    'Site assessment & design',
    'Authorised Jinko Solar partner',
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-yellow-600 to-orange-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">Services / Solar Energy</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-5">Solar Energy Power Backup Solutions</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/85 leading-relaxed">
              Ecoknack prides itself as a leader in this field. Our team are specialists in delivering high-quality solar panel installations. Whether it is a domestic or commercial project, our multi-award-winning green team is second to none.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <Sun size={16} /> Authorised Jinko Solar Partner
              </div>
              <h2 className="text-3xl font-bold text-primary mb-5">Clean Energy For Every Need</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                We have partnered and been authorised by leading solar manufacturer Jinko, to train, supply and install locally. This partnership ensures our clients receive world-class equipment installed to the highest standards.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our multi-award-winning green team handles everything from site assessment, system design and supply to installation and ongoing maintenance — whether it is a domestic rooftop or a large commercial installation.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    {f}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {[
                { icon: Sun, label: 'Solar Panels', desc: 'Premium Jinko panels for maximum efficiency' },
                { icon: Battery, label: 'Battery Storage', desc: 'Reliable backup power for homes & businesses' },
                { icon: Zap, label: 'Grid-Tie', desc: 'Feed excess power back and reduce bills' },
                { icon: CheckCircle, label: 'Maintenance', desc: 'Ongoing support and monitoring service' },
              ].map((item) => (
                <div key={item.label} className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
                  <item.icon size={28} className="text-yellow-600 mb-3" />
                  <h4 className="font-bold text-primary text-sm mb-1">{item.label}</h4>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Go Solar Today</h2>
          <p className="text-white/80 mb-8">Get a free site assessment and quote from our certified solar installation team.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-yellow-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all">
            Get Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SolarEnergy;
