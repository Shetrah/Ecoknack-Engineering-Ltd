import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Award, Zap, Mail } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const openings = [
  { role: 'Civil Engineer', type: 'Full-time', dept: 'Engineering', desc: 'NCA-certified civil engineer to manage site works and infrastructure projects across Kenya.' },
  { role: 'Solar Installation Technician', type: 'Full-time', dept: 'Renewable Energy', desc: 'Certified solar technician for domestic and commercial installations. Jinko training provided.' },
  { role: 'Project Manager', type: 'Full-time', dept: 'Project Management', desc: 'Experienced PM to oversee simultaneous construction sites and coordinate multi-disciplinary teams.' },
  { role: 'Quantity Surveyor', type: 'Full-time', dept: 'Finance & Planning', desc: 'QS to prepare BOQs, manage procurement and track project costs for civil and building works.' },
  { role: 'CNC Fabrication Specialist', type: 'Full-time', dept: 'Fabrication', desc: 'Skilled operator for CNC cutting machines and automotive welding for metalwork projects.' },
  { role: 'Site Supervisor', type: 'Full-time', dept: 'Construction', desc: 'Experienced site supervisor to oversee day-to-day operations and ensure quality standards on site.' },
];

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">Careers</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-5">Join Our Team</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/85">
              We aspire to be a company that our employees are proud to work for. We cultivate an environment that supports continuous learning, development and personal growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-4xl font-bold text-primary mb-4">Why Work at Ecoknack?</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Users, title: 'Diverse Team', desc: 'Our talented professionals from diverse backgrounds share values of discipline, commitment and coordinated teamwork.' },
              { icon: Award, title: 'Grow With Us', desc: 'We cultivate an environment that supports continuous learning, development and personal growth for all employees.' },
              { icon: Zap, title: 'Innovative Culture', desc: 'We continually seek new ways to deliver better projects — technology-led, process-driven and always improving.' },
            ].map((b) => (
              <motion.div key={b.title} variants={fadeUp} className="bg-white rounded-xl p-7 shadow-md text-center">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <b.icon size={28} className="text-secondary" />
                </div>
                <h3 className="font-bold text-primary text-lg mb-3">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-primary mb-8 text-center">Current Openings</motion.h2>
            <div className="space-y-4">
              {openings.map((job) => (
                <motion.div key={job.role} variants={fadeUp} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-between gap-6 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="font-bold text-primary text-lg">{job.role}</h3>
                      <span className="bg-secondary/10 text-secondary text-xs font-semibold px-3 py-0.5 rounded-full">{job.dept}</span>
                      <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-0.5 rounded-full">{job.type}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{job.desc}</p>
                  </div>
                  <a href="mailto:Ecoknackengineering@gmail.com?subject=Application: "
                    className="flex-shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
                    Apply Now <ArrowRight size={14} />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-white/80 mb-8">We're always looking for talented engineers, project managers and construction professionals. Send us your CV.</p>
          <a href="mailto:Ecoknackengineering@gmail.com" className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-bold transition-all">
            <Mail size={18} /> Send Your CV
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;
