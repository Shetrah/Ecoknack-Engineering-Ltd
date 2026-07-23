import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Hammer, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const DesignBuild: React.FC = () => {
  const benefits = ['Value-engineering reviews', 'Pre-construction planning', 'Accelerated delivery', 'Increased quality control', 'Lower design fees', 'Reduced owner risk', 'Single point of contact', 'Post-completion support'];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-orange-600 to-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">Services / Design & Build</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-5">Design & Build Services</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/85">
              Ecoknack has a rich heritage in the gas and oil industry with over 360 sites completed. Our team of construction professionals ensures every aspect is handled with utmost professionalism and care.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <motion.div variants={fadeUp}>
              <Hammer size={40} className="text-secondary mb-5" />
              <h2 className="text-3xl font-bold text-primary mb-5">Turnkey Project Delivery</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                We offer turnkey project delivery by bringing the planning, design, project management, cost management and construction of the project together, under one roof. We strive to ensure that each client's unique needs and vision are met with precision and attention to detail.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Clients benefit from value-engineering and pre-construction reviews, accelerated delivery, increased quality control, lower design and consultation fees, reduced owner risk and administrative responsibilities.
              </p>
              <h3 className="font-bold text-primary mb-4">Benefits of Design & Build</h3>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-accent flex-shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">360+ Sites Completed</h3>
                <p className="text-white/80">Our rich heritage in the gas and oil industry gives us unmatched expertise in complex, multi-faceted construction projects.</p>
              </div>
              {[
                { step: '01', title: 'Consultation & Assessment', desc: 'We begin with a thorough site assessment and client brief to understand your vision and requirements.' },
                { step: '02', title: 'Design & Engineering', desc: 'Our engineering team creates detailed designs using sophisticated software to bring your vision to life.' },
                { step: '03', title: 'Construction & Delivery', desc: 'We manage the complete build with our 16+ project managers ensuring quality at every stage.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-50 rounded-xl p-5">
                  <span className="text-3xl font-bold text-secondary/30 flex-shrink-0">{item.step}</span>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Design & Build Project</h2>
          <p className="text-white/80 mb-8">Contact us today and let our expert team bring your construction vision to life.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DesignBuild;
