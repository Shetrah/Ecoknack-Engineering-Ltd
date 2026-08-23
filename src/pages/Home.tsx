import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Zap, Building2, Hammer, MapPin,
  Award, Users, Shield, Leaf, TrendingUp,
  CheckCircle, ChevronRight, Star,
} from 'lucide-react';
import Hero from '../components/Hero';
import StatCounter from '../components/StatCounter';
import { defaultProjects } from '../data/siteContent';

/* ── Helpers ── */
const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.12 },
  transition:  { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});
const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const staggerItem = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0,
             transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Data ── */
const services = [
  {
    icon: Zap,
    color: 'bg-amber-50 text-amber-500',
    border: 'group-hover:border-amber-300',
    title: 'Solar Energy',
    desc: 'Authorised Jinko Solar partner — domestic & commercial installations and power backup systems.',
    link: '/services/solar-energy',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&auto=format&fit=crop&q=75',
  },
  {
    icon: Building2,
    color: 'bg-blue-50 text-blue-600',
    border: 'group-hover:border-blue-300',
    title: 'Building Construction',
    desc: 'Commercial, residential and luxury home construction from foundations to finishing.',
    link: '/services/building-construction',
    img: 'https://images.unsplash.com/photo-1590644365607-5b8b4e4a2a34?w=600&auto=format&fit=crop&q=75',
  },
  {
    icon: Hammer,
    color: 'bg-orange-50 text-orange-500',
    border: 'group-hover:border-orange-300',
    title: 'Design & Build',
    desc: 'All-in-one turnkey delivery — 360+ sites completed with oil & gas heritage.',
    link: '/services/design-build',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=75',
  },
  {
    icon: MapPin,
    color: 'bg-green-50 text-green-600',
    border: 'group-hover:border-green-300',
    title: 'Road Construction',
    desc: 'Bituminous and cabro roads engineered for heavy traffic with precision layering.',
    link: '/services/road-construction',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=75',
  },
];

const values = [
  { icon: Users,      title: 'Staff',                  desc: 'Talented professionals sharing values of discipline, commitment and coordinated teamwork.',           accent: 'bg-blue-50 text-blue-600' },
  { icon: Award,      title: 'Quality',                desc: 'Outstanding service through teamwork, experience, accountability and innovation.',                    accent: 'bg-amber-50 text-amber-500' },
  { icon: TrendingUp, title: 'Continuous Improvement', desc: 'An environment that fosters continuous learning, development and personal growth.',                   accent: 'bg-purple-50 text-purple-600' },
  { icon: Shield,     title: 'Safety',                 desc: 'Proactive safety culture protecting colleagues and the public on every project site.',                accent: 'bg-red-50 text-red-500' },
  { icon: Zap,        title: 'Innovation',             desc: 'Continuously seeking technology and process-based ways to exceed client expectations.',               accent: 'bg-orange-50 text-orange-500' },
  { icon: Leaf,       title: 'Sustainability',         desc: 'Upholding effective environmental and sustainable practices on every project we deliver.',            accent: 'bg-green-50 text-green-600' },
];

const featuredProjects = defaultProjects.slice(0, 3).map((project) => ({
  title: project.title,
  category: project.category,
  desc: project.desc,
  img: project.image,
}));

const clients = [
  'Shell', 'Rubis', 'OLA Energy', 'Kobil', 'American Tower',
  'Eaton Towers', 'Unilever', 'PZ Cussons', 'Lead Com', 'Egypro',
  'Apex Steel', 'Rhombu Concrete', 'Tononoka', 'Kakamega County Govt',
];

/* ── Component ── */
const Home: React.FC = () => (
  <div className="overflow-x-hidden">
    <Hero />

    {/* ══════ ABOUT ══════ */}
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text */}
          <motion.div {...fadeUp(0)}>
            <span className="section-tag mb-5">About Ecoknack Engineering</span>
            <h2 className="section-title mb-4">
              Engineering Excellence<br className="hidden sm:block" />Since 2018
            </h2>
            <div className="divider-accent mb-6" />
            <p className="section-subtitle mb-4">
              Ecoknack Engineering Limited is headquartered in Nairobi, Kenya — delivering
              renewable energy installations, general construction, project management and
              consultancy services.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              We operate an integrated business model: Professional Building Construction,
              Design &amp; Build Services and efficient Project Management, all under one roof.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/about" className="btn-primary">
                About Us <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn-outline">
                Our Projects <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Cards + photo */}
          <motion.div {...fadeUp(0.1)} className="space-y-4">
            {/* Real photo */}
            <div className="rounded-2xl overflow-hidden h-44 sm:h-52 w-full">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&auto=format&fit=crop&q=80"
                alt="Ecoknack construction site"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {[
              { label: 'Our Mission', text: 'Providing quality construction and technical services with long-term relationships built on quality assurance, service delivery and safety.', accent: 'border-l-[#0A3D62] bg-[#0A3D62]/5', lc: 'text-[#0A3D62]' },
              { label: 'Our Vision',  text: 'Being the contractor of choice — pursuing excellence through dedication, experience and highly motivated employees delivering exceptional value.', accent: 'border-l-[#F7941D] bg-[#F7941D]/5', lc: 'text-[#F7941D]' },
            ].map((item) => (
              <div key={item.label}
                   className={`border-l-4 rounded-r-2xl p-5 ${item.accent}`}>
                <span className={`text-xs font-bold uppercase tracking-widest ${item.lc} block mb-1.5`}>
                  {item.label}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}

            <div className="grid grid-cols-3 gap-3">
              {[{ n: '360+', l: 'Sites' }, { n: '7+', l: 'Years' }, { n: '20+', l: 'Active' }].map((s) => (
                <div key={s.l} className="bg-[#0A3D62] rounded-2xl p-4 text-center text-white">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#F7941D]">{s.n}</div>
                  <div className="text-xs font-semibold text-white/70 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ══════ SERVICES ══════ */}
    <section className="py-16 sm:py-24 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <span className="section-tag mb-4">What We Do</span>
          <h2 className="section-title mb-4">Our Services &amp; Solutions</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Comprehensive engineering and construction solutions delivered under one roof.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer} initial="hidden"
          whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={staggerItem}>
              <Link to={s.link}
                className={`group block bg-white rounded-2xl border-2
                            border-gray-100 ${s.border}
                            shadow-card hover:shadow-card-hover
                            hover:-translate-y-1.5 transition-all duration-300
                            h-full overflow-hidden`}>
                {/* Image thumbnail */}
                <div className="h-36 overflow-hidden">
                  <img src={s.img} alt={s.title}
                       className="w-full h-full object-cover
                                  group-hover:scale-105 transition-transform duration-500"
                       loading="lazy" />
                </div>
                <div className="p-6">
                  <div className={`icon-bubble ${s.color} mb-4 w-11 h-11`}>
                    <s.icon size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2
                                 group-hover:text-[#0A3D62] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold
                                   text-[#F7941D] group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link to="/services" className="btn-outline">
            All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* ══════ STATS BAND ══════ */}
    <section className="py-16 sm:py-20 bg-hero-gradient relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80
                        bg-[#F7941D] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80
                        bg-[#558ec5] rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: '360+', label: 'Sites Completed',  sub: 'Oil & gas' },
            { number: '20+',  label: 'Active Sites',     sub: 'Simultaneously' },
            { number: '16+',  label: 'Project Managers', sub: 'Expert team' },
            { number: '12+',  label: 'Heavy Machinery',  sub: 'Modern fleet' },
          ].map((s) => (
            <StatCounter key={s.label} number={s.number} label={s.label} sub={s.sub} />
          ))}
        </div>
      </div>
    </section>

    {/* ══════ CORE VALUES ══════ */}
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <span className="section-tag mb-4">What Drives Us</span>
          <h2 className="section-title">Our Core Values</h2>
        </motion.div>
        <motion.div
          variants={staggerContainer} initial="hidden"
          whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {values.map((v) => (
            <motion.div key={v.title} variants={staggerItem} className="value-card">
              <div className={`icon-bubble ${v.accent} mb-4 w-11 h-11`}>
                <v.icon size={20} />
              </div>
              <h3 className="font-extrabold text-gray-900 text-base mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ══════ FEATURED PROJECTS ══════ */}
    <section className="py-16 sm:py-24 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <span className="section-tag mb-4">Portfolio</span>
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            From gas station upgrades to warehouses and road infrastructure — our portfolio spans Kenya.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer} initial="hidden"
          whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
        >
          {featuredProjects.map((p) => (
            <motion.div key={p.title} variants={staggerItem}>
              <div className="relative rounded-2xl overflow-hidden h-64 group
                              cursor-pointer hover:shadow-2xl transition-shadow duration-300">
                <img src={p.img} alt={p.title}
                     className="w-full h-full object-cover
                                group-hover:scale-105 transition-transform duration-500"
                     loading="lazy" />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t
                                from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-white/15 text-white/90 text-xs
                                   font-bold uppercase tracking-widest px-3 py-1
                                   rounded-full mb-3 backdrop-blur-sm">
                    {p.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-white mb-1">{p.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link to="/projects" className="btn-primary">
            Explore All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* ══════ CLIENTS ══════ */}
    <section className="py-16 sm:py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
            Trusted By Kenya's Leading Organisations
          </p>
          <div className="flex items-center justify-center gap-1">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} size={14} className="text-[#F7941D] fill-[#F7941D]" />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={staggerContainer} initial="hidden"
          whileInView="visible" viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-2.5"
        >
          {clients.map((c) => (
            <motion.span key={c} variants={staggerItem}
              className="bg-gray-50 border border-gray-200 text-gray-600
                         font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5
                         rounded-full hover:border-[#F7941D] hover:text-[#F7941D]
                         hover:bg-[#F7941D]/5 transition-colors duration-200 cursor-default">
              {c}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ══════ STRENGTHS STRIP ══════ */}
    <section className="py-12 bg-gray-50/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { icon: CheckCircle, text: 'NCA, CAK, EPRA & ICTA Certified', color: 'text-green-600' },
            { icon: Award,       text: 'Authorised Jinko Solar Partner',   color: 'text-amber-500' },
            { icon: Shield,      text: 'Comprehensive EHS Policy',         color: 'text-blue-600' },
            { icon: TrendingUp,  text: 'Turnkey Project Delivery',         color: 'text-[#0A3D62]' },
          ].map(({ icon: Icon, text, color }) => (
            <div key={text}
                 className="flex items-center gap-3 bg-white rounded-xl px-4 sm:px-5
                            py-3.5 border border-gray-100 shadow-card">
              <Icon size={18} className={`${color} flex-shrink-0`} />
              <span className="text-xs sm:text-sm font-semibold text-gray-700">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══════ CTA BANNER ══════ */}
    <section className="py-16 sm:py-24 bg-hero-gradient relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96
                        bg-[#F7941D] rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80
                        bg-[#558ec5] rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.04]"
             style={{
               backgroundImage:
                 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
               backgroundSize: '64px 64px',
             }} />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2 bg-white/10 border
                           border-white/20 text-white/80 text-xs font-semibold
                           px-4 py-1.5 rounded-full mb-5 sm:mb-6">
            Free Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white
                         mb-4 sm:mb-5 leading-tight">
            Ready to Start<br />Your Project?
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">
            We bring planning, design, project management and construction
            together under one roof — get in touch today.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact" className="btn-white w-full xs:w-auto justify-center">
              Request a Quote <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/254711203376"
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2
                          bg-[#25D366] hover:bg-[#1fba58] text-white font-bold
                          text-sm px-7 py-3.5 rounded-xl transition-colors duration-200
                          shadow-lg shadow-green-600/30 w-full xs:w-auto">
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Home;
