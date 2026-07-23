import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const packages = [
  {
    name: 'Basic Package',
    desc: 'Perfect for small to medium projects',
    features: ['Professional consultation', 'Site assessment', 'Initial design proposal', 'Budget estimation', 'Project timeline', 'Basic documentation'],
    highlight: false,
  },
  {
    name: 'Premium Package',
    desc: 'Comprehensive solutions for larger projects',
    features: ['All Basic features', 'Detailed design & engineering', 'Full project management', 'Quality assurance program', 'Regular site reporting', 'Advanced documentation', 'Equipment provision', '24/7 support'],
    highlight: true,
  },
  {
    name: 'Enterprise Package',
    desc: 'Full-service for major developments',
    features: ['All Premium features', 'Dedicated project team', 'Advanced machinery & equipment', 'Sustainability planning', 'Performance guarantees', 'Post-project support', 'Training & handover', 'Long-term maintenance'],
    highlight: false,
  },
];

const offers = [
  { title: 'Solar Installation', badge: '15% OFF', desc: 'On complete solar panel installation packages', note: 'Contact us for current availability' },
  { title: 'Road Construction', badge: '10% OFF', desc: 'Bituminous and cabro road projects', note: 'For qualifying contract values' },
  { title: 'Bulk Equipment Rental', badge: 'Special Rates', desc: 'Multiple machinery for long-term contracts', note: 'Negotiable terms available' },
];

const Sales: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">Sales & Partnerships</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-5">Service Packages & Pricing</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/85">
              Discover our competitive pricing, special offers, and work with our expert team to find the perfect solution for your project.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">Limited Time</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-primary">Special Offers</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((o) => (
              <motion.div key={o.title} variants={fadeUp} className="bg-white rounded-xl p-7 shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-bold text-xl mb-4">{o.badge}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{o.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{o.desc}</p>
                <p className="text-secondary text-xs font-semibold">{o.note}</p>
                <Link to="/contact" className="mt-5 w-full inline-flex justify-center items-center gap-2 bg-primary hover:bg-secondary text-white py-2.5 rounded-lg font-semibold text-sm transition-colors">
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">Pricing</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-primary">Service Packages</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <motion.div key={pkg.name} variants={fadeUp} className={`rounded-xl overflow-hidden shadow-lg transition-all ${pkg.highlight ? 'ring-2 ring-secondary scale-105' : ''}`}>
                <div className={`p-6 ${pkg.highlight ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'bg-gray-50'}`}>
                  <h3 className={`text-xl font-bold mb-1 ${pkg.highlight ? 'text-white' : 'text-primary'}`}>{pkg.name}</h3>
                  <p className={`text-sm ${pkg.highlight ? 'text-white/80' : 'text-gray-500'}`}>{pkg.desc}</p>
                </div>
                <div className="bg-white p-6">
                  <div className="text-lg font-bold text-primary mb-5">Custom Quote</div>
                  <ul className="space-y-3 mb-7">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`w-full inline-flex justify-center items-center gap-2 py-3 rounded-lg font-bold transition-all ${pkg.highlight ? 'bg-primary hover:bg-secondary text-white' : 'bg-gray-100 hover:bg-primary text-primary hover:text-white'}`}>
                    Get a Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Sales */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold text-primary mb-4">Talk to Our Sales Team</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get a personalised quote tailored to your exact project needs. Our expert team offers turnkey project delivery bringing planning, design, project management and construction under one roof.
              </p>
              <div className="space-y-3">
                <a href="tel:+254711203376" className="flex items-center gap-3 text-primary font-semibold hover:text-secondary transition-colors">
                  <Phone size={20} /> +254 711 203 376
                </a>
                <a href="mailto:Ecoknackengineering@gmail.com" className="flex items-center gap-3 text-primary font-semibold hover:text-secondary transition-colors">
                  <Mail size={20} /> Ecoknackengineering@gmail.com
                </a>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-gradient-to-br from-primary to-secondary text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Corporate Contracts</h3>
              <p className="text-white/80 mb-6 text-sm">Customised service agreements, dedicated account management, priority scheduling and up to 20% discount on services for long-term contracts.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-all">
                Enquire Now <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sales;
