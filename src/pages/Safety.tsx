import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Leaf, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const Safety: React.FC = () => {
  const commitments = [
    'Priority given to Environment, Health and Safety in all projects',
    'Comprehensive Health and Safety policy for all employees and public',
    'Responsive, safe and reliable services adhering to sustainable environmental requirements',
    'EHS contributes to competitive strengths and benefits clients, shareholders and employees',
    'Continual improvement of EHS performance through setting and monitoring objectives',
    'Necessary training and encouraging new ideas for safety improvement',
    'Employee participation and coordination with clients and suppliers',
    'Annual management reviews of EHS performance',
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-green-800 to-accent text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">Safety, Health & Environment</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-5">Our Safety Commitment</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/85">
              We give priority to Environment, Health and Safety in all projects. We believe EHS contributes to our competitive strengths and benefits our clients, shareholders, employees and the communities we serve.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-16">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-bold text-primary mb-5">Health & Safety Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                The company has a comprehensive Health and Safety policy to ensure the wellbeing of all company employees and the public at large. We provide our clients with responsive, safe and reliable services while adhering to the ideas of sustainable environmental requirements.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We believe that EHS contributes to our competitive strengths and benefits our clients, shareholders and employees by contributing to the overall well-being and economic health of the communities we serve.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The management believes that effective management of Environmental, Health and Safety Management issues is fundamental to success, and is therefore committed to continually improving the EHS performance through setting and monitoring of objectives and targets, necessary training, encouraging new ideas, employee participation, coordination with clients, suppliers and annual management reviews.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="font-bold text-primary text-xl mb-5">Our EHS Commitments</h3>
              <ul className="space-y-3">
                {commitments.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Safety Culture', color: 'bg-blue-50 border-blue-400', iconColor: 'text-blue-600', desc: 'We uphold a positive and proactive safety culture to create a healthy work environment and remain committed to protecting our colleagues and the public.' },
              { icon: Leaf, title: 'Environment', color: 'bg-green-50 border-green-400', iconColor: 'text-green-600', desc: 'We strive to protect the environment by upholding effective and efficient environmental and sustainable practices on every project we undertake.' },
              { icon: Users, title: 'Employee Wellbeing', color: 'bg-orange-50 border-orange-400', iconColor: 'text-orange-600', desc: 'Our comprehensive Health and Safety policy ensures the wellbeing of all employees and the public at large on every project site.' },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className={`rounded-xl border-l-4 ${item.color} p-7`}>
                <item.icon size={32} className={`${item.iconColor} mb-4`} />
                <h3 className="font-bold text-primary text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Safety Is Non-Negotiable</h2>
          <p className="text-white/80 mb-8">Every Ecoknack site operates under strict safety protocols. Learn more about our certifications and approach.</p>
          <Link to="/certifications" className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-bold transition-all">
            View Certifications <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Safety;
