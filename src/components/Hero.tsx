import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const stats = [
  { value: '360+', label: 'Sites Completed',  sub: 'Oil & gas industry' },
  { value: '20+',  label: 'Active Sites',      sub: 'Running simultaneously' },
  { value: '16+',  label: 'Project Managers',  sub: 'Expert team' },
  { value: '12+',  label: 'Heavy Machinery',   sub: 'Modern fleet' },
];

const highlights = [
  '360+ projects completed across Kenya',
  'NCA, CAK, EPRA & ICTA certified',
  'Authorised Jinko Solar partner',
];

const Hero: React.FC = () => (
  <section className="relative min-h-screen flex flex-col overflow-hidden">

    {/* ── Full-bleed background image with dark overlay ── */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&auto=format&fit=crop&q=80"
        alt="Construction site aerial view"
        className="w-full h-full object-cover object-center"
        loading="eager"
      />
      {/* layered gradients: dark vignette + brand blue tint */}
      <div className="absolute inset-0 bg-gradient-to-br
                      from-[#071e30]/92 via-[#0A3D62]/85 to-[#0d4f7c]/80" />
      {/* subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.04]"
           style={{
             backgroundImage:
               'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
             backgroundSize: '64px 64px',
           }} />
    </div>

    {/* ── Decorative orbs ── */}
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px]
                      bg-[#F7941D]/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px]
                      bg-[#3CB371]/10 rounded-full blur-[100px]" />
    </div>

    {/* ── Main content ── */}
    <div className="relative z-10 flex-1 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 bg-white/10 border
                               border-white/20 text-white/90 text-xs font-semibold
                               px-4 py-2 rounded-full mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse" />
                Nairobi, Kenya · Established 2018
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.08)}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white
                         leading-[1.1] tracking-tight mb-5">
              Building Kenya's<br />
              Future Through{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#F7941D]">Innovation</span>
                <span className="absolute -bottom-1 left-0 right-0 h-3
                                 bg-[#F7941D]/20 rounded-full -z-0" />
              </span>
            </motion.h1>

            <motion.p {...fadeUp(0.16)}
              className="text-white/70 text-base sm:text-lg leading-relaxed
                         mb-6 sm:mb-8 max-w-lg">
              Engineering and construction excellence — solar energy, building works,
              road construction and civil engineering delivered across Kenya.
            </motion.p>

            <motion.ul {...fadeUp(0.22)} className="space-y-2.5 mb-8 sm:mb-10">
              {highlights.map((h) => (
                <li key={h}
                    className="flex items-center gap-3 text-white/85 text-sm font-medium">
                  <CheckCircle size={16} className="text-[#22c55e] flex-shrink-0" />
                  {h}
                </li>
              ))}
            </motion.ul>

            <motion.div {...fadeUp(0.28)}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <Link to="/projects"
                className="inline-flex items-center justify-center gap-2.5
                           bg-[#F7941D] hover:bg-[#e07a08] text-white font-bold
                           text-sm px-7 py-4 rounded-xl shadow-lg
                           shadow-[#F7941D]/30 hover:shadow-[#F7941D]/50
                           hover:-translate-y-0.5 active:scale-95
                           transition-all duration-200 w-full xs:w-auto">
                View Our Projects <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/254711203376"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2.5
                            bg-white/10 hover:bg-white/20 border border-white/20
                            text-white font-bold text-sm px-7 py-4 rounded-xl
                            backdrop-blur-sm hover:-translate-y-0.5 active:scale-95
                            transition-all duration-200 w-full xs:w-auto">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </motion.div>
          </div>

          {/* Right — stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="stat-card hover:bg-white/15 transition-colors duration-300"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold
                                text-[#F7941D] mb-1 tracking-tight">
                  {s.value}
                </div>
                <div className="text-white font-bold text-xs sm:text-sm">{s.label}</div>
                <div className="text-white/50 text-xs mt-0.5 hidden sm:block">{s.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>

    {/* ── Scroll cue ── */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="relative z-10 flex flex-col items-center pb-8 text-white/50 text-xs gap-1.5"
    >
      <span className="font-medium tracking-wide uppercase text-[10px]">
        Scroll to explore
      </span>
      <ChevronDown size={18} />
    </motion.div>

    {/* ── Wave divider ── */}
    <div className="absolute bottom-0 left-0 right-0 z-10">
      <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg"
           className="w-full block" preserveAspectRatio="none">
        <path d="M0,36 C360,72 1080,0 1440,36 L1440,56 L0,56 Z" fill="white" />
      </svg>
    </div>
  </section>
);

export default Hero;
