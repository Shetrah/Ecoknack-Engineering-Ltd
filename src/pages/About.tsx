import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Zap, Shield, Leaf, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const About: React.FC = () => {
  const coreValues = [
    { icon: Users, title: 'Staff', desc: 'Talented professionals and trained recruits from diverse backgrounds sharing values of discipline, commitment and coordinated teamwork.' },
    { icon: Award, title: 'Quality', desc: 'Outstanding service through teamwork, experience, accountability and innovation — all reflected in the quality of our projects.' },
    { icon: TrendingUp, title: 'Continuous Improvement', desc: 'We cultivate an environment that supports and encourages continuous learning, development and personal growth.' },
    { icon: Shield, title: 'Safety', desc: 'We uphold a positive and proactive safety culture, creating a healthy work environment and protecting colleagues and the public.' },
    { icon: Zap, title: 'Innovation', desc: 'We continually seek new and enterprising ways — technology or process-based — to meet client needs and exceed expectations.' },
    { icon: Leaf, title: 'Environment & Sustainability', desc: 'We strive to protect the environment by upholding effective and efficient environmental and sustainable practices.' },
  ];

  const resources = [
    { label: 'Civil, Electrical & Mechanical Engineers', value: '6+' },
    { label: 'Project Managers', value: '16+' },
    { label: 'Technical Teams', value: '16+' },
    { label: 'Heavy Equipment & Machinery', value: '12+' },
    { label: 'Sites Running Simultaneously', value: '20+' },
  ];

  const certifications = [
    { name: 'NCA – Electrical Works', body: 'National Construction Authority' },
    { name: 'NCA – Civil Works', body: 'National Construction Authority' },
    { name: 'NCA – Building Works', body: 'National Construction Authority' },
    { name: 'NCA – Water Works', body: 'National Construction Authority' },
    { name: 'CAK Accredited', body: 'Communications Authority of Kenya' },
    { name: 'EPRA Accredited', body: 'Energy & Petroleum Regulatory Authority' },
    { name: 'ICTA Accredited', body: 'ICT Authority' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary via-blue-700 to-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="badge-secondary inline-block mb-4">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              About Us
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-6">Engineering Kenya's Future</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/85 leading-relaxed">
              Ecoknack Engineering Limited is an Engineering and Construction company headquartered in Nairobi, Kenya, dealing with renewable energy installations, general construction, project management, and consultancy services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-br from-white via-eco-light-blue/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div variants={fadeUp}>
              <h2 className="section-title">Who We Are</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>The company was incorporated in 2018 and has since imposed its mark as the standard in the Engineering industry through different projects implemented across the country.</p>
                <p>At Ecoknack Engineering Limited, we believe that efficient processes are the fundamentals upon which a robust society is built. It is in this regard that we strive to provide quality products and services to our clients ensuring reliability and effectiveness in our delivery.</p>
                <p>We operate an integrated business model, offering our clients Professional Building Construction Services, Design & Build Services and Efficient project management. Ecoknack Engineering Ltd provides excellence in a wide range of green energy works, industrial & civil, refurbishment and fit-out projects across Kenya.</p>
                <p>The company has earned recognition for its vast portfolio of projects, most of which are landmarks and popular establishments, for reputable clients and leading consultant firms.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-br from-primary to-blue-700 text-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-lg">🎯</span>
                  Our Mission
                </h3>
                <p className="text-white/90 leading-relaxed text-lg">We are dedicated to providing quality construction and technical services to our clients. We strive to implement and maintain long-term relationships based on quality assurance, service delivery and safety.</p>
              </div>
              <div className="bg-gradient-to-br from-secondary to-orange-600 text-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-white text-secondary rounded-lg flex items-center justify-center text-lg">🚀</span>
                  Our Vision
                </h3>
                <p className="text-white/90 leading-relaxed text-lg">We are committed to being the contractor of choice, pursuing excellence through dedication, experience and highly motivated employees. We aspire to be a company that our clients want to work with, and our employees are proud to work for. A company ready to embrace new opportunities and deliver exceptional value.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-eco-light-blue/50 to-eco-light-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.span variants={fadeUp} className="badge-secondary inline-block">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              Our Core Values
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-3">What Drives Us Forward</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, idx) => {
              const colors = ['icon-bg-blue', 'icon-bg-orange', 'icon-bg-green'];
              const colorIdx = idx % 3;
              return (
                <motion.div key={v.title} variants={fadeUp} className="feature-card group">
                  <div className="feature-card-content">
                    <div className={`${colors[colorIdx]} p-3 w-fit mb-4 group-hover:scale-110 transition-transform`}>
                      <v.icon size={24} />
                    </div>
                    <h3 className="font-bold text-primary text-lg mb-3">{v.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div variants={fadeUp}>
              <span className="badge-secondary inline-block mb-4">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                Our Capacity
              </span>
              <h2 className="section-title mt-3">Resources & Strength</h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                A wealth of experience, wide integration and comprehensive inventory of equipment and construction machinery has made Ecoknack one of the best contractors regionally.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                We offer turnkey project delivery by bringing planning, design, project management, cost management and construction together under one roof. Clients benefit from value-engineering, pre-construction reviews, accelerated delivery, increased quality control and reduced owner risk.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="bg-gradient-to-br from-eco-light-blue to-eco-light-orange rounded-xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-6 font-bold text-sm uppercase tracking-wider grid grid-cols-2 gap-4">
                  <span>Resource</span><span className="text-right">Count</span>
                </div>
                {resources.map((r, i) => (
                  <div key={r.label} className={`px-8 py-5 grid grid-cols-2 items-center border-t ${i % 2 === 0 ? 'bg-white hover:bg-eco-light-blue' : 'bg-eco-light-blue/40 hover:bg-eco-light-blue'} transition-colors`}>
                    <span className="text-gray-700 text-sm font-medium">{r.label}</span>
                    <span className="text-right text-3xl font-bold text-gradient-primary">{r.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-eco-light-orange/40 to-eco-light-green/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.span variants={fadeUp} className="badge-secondary inline-block">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              Accreditations
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title mt-3">Certifications & Licences</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((c, idx) => {
              const colors = ['icon-bg-blue', 'icon-bg-orange', 'icon-bg-green', 'icon-bg-blue'];
              const colorIdx = idx % 4;
              return (
                <motion.div key={c.name} variants={fadeUp} className="feature-card group text-center">
                  <div className="feature-card-content">
                    <div className={`${colors[colorIdx]} p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <Award size={24} />
                    </div>
                    <h4 className="font-bold text-primary text-sm mb-2 group-hover:text-secondary transition-colors">{c.name}</h4>
                    <p className="text-xs text-gray-600">{c.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-blue-700 to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-5xl font-bold mb-6">Ready to Work With Us?</motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-white/85 mb-10 max-w-2xl mx-auto">At Ecoknack, we engage our planning and management skills to deliver the highest standards in construction, embracing new technology and striving to bring innovative and unique ideas on all our projects.</motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex">
                Get in Touch <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:scale-105">
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
