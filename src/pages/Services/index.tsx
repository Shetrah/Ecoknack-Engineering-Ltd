import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Building2, Hammer, MapPin, Wrench, Layers } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const services = [
  { icon: Zap, title: 'Solar Energy Solutions', desc: 'High-quality solar panel installations for domestic and commercial projects. Authorised Jinko partner to train, supply and install locally.', link: '/services/solar-energy', color: 'bg-yellow-50 border-yellow-400' },
  { icon: Building2, title: 'Building Construction', desc: 'All-in-one design and build construction services for commercial, residential and luxury homes to save you the inconvenience of juggling multiple service providers.', link: '/services/building-construction', color: 'bg-blue-50 border-blue-400' },
  { icon: Hammer, title: 'Design & Build', desc: 'Rich heritage in the gas and oil industry with over 360 sites completed. Our team handles every aspect with utmost professionalism and care.', link: '/services/design-build', color: 'bg-orange-50 border-orange-400' },
  { icon: Wrench, title: 'Civil Engineering', desc: 'Expert civil engineering and infrastructure solutions from foundations to fit-out across Kenya.', link: '/services/civil-engineering', color: 'bg-green-50 border-green-400' },
  { icon: MapPin, title: 'Road Construction', desc: 'Bituminous and cabro roads that can withstand heavy traffic without deformation. Each stratum laid with precision for optimal load distribution.', link: '/services/road-construction', color: 'bg-purple-50 border-purple-400' },
  { icon: Layers, title: 'CNC & Fabrication', desc: 'Creative solutions for design and cost-effective manufacturing. Sophisticated software and highly skilled automotive welding engineers ready to solve your needs.', link: '/services', color: 'bg-red-50 border-red-400' },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">Our Services</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-5">Comprehensive Engineering Solutions</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/85">
              We offer turnkey project delivery bringing planning, design, project management, cost management and construction together under one roof.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp}>
                <Link to={s.link} className={`block rounded-xl border-l-4 ${s.color} p-8 h-full hover:shadow-xl transition-all duration-300 group`}>
                  <s.icon size={36} className="text-primary mb-4 group-hover:text-secondary transition-colors" />
                  <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a Free Consultation</h2>
          <p className="text-white/80 mb-8">Clients benefit from value-engineering, pre-construction reviews, accelerated delivery and reduced owner risk.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-bold transition-all">
            Request a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
