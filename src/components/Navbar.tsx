import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageCircle, Zap } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const services = [
  { label: 'Solar Energy Solutions',  path: '/services/solar-energy' },
  { label: 'Building Construction',   path: '/services/building-construction' },
  { label: 'Design & Build',          path: '/services/design-build' },
  { label: 'Civil Engineering',       path: '/services/civil-engineering' },
  { label: 'Road Construction',       path: '/services/road-construction' },
  { label: 'Interior Design',         path: '/services/interior-design' },
  { label: 'Plant Machinery',         path: '/services/plant-machinery'},
  { label: 'CNC Machining & Fabrication', path: '/services/cnc-machining-fabrication' },
  { label: 'Petrol Station & Hospital',   path: '/services/petrol-station-hospital' },
];

const navLinks = [
  { label: 'Home',       path: '/' },
  { label: 'About',      path: '/about' },
  { label: 'Projects',   path: '/projects' },
  { label: 'Industries', path: '/industries' },
  { label: 'Equipment',  path: '/equipment' },
  { label: 'Contact',    path: '/contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen]     = useState(false);
  const [svcOpen, setSvc]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setSvc(false); }, [location]);

  const active = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-[#071e30] text-white/75 text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            Nairobi, Kenya — Est. 2018
          </span>
          <div className="flex items-center gap-6">
            <a href="tel:+254711203376"
               className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={12} /> +254 711 203 376
            </a>
            <a href="mailto:Ecoknackengineering@gmail.com"
               className="hover:text-white transition-colors">
              Ecoknackengineering@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
          : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img
                src="/ECOKNACK LOGO.png"
                alt="Ecoknack Engineering"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* ── Desktop links ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className={`nav-link ${active(path) ? 'nav-link-active' : ''}`}
                >
                  {label}
                </Link>
              ))}

              {/* Services dropdown */}
              <div className="relative group">
                <button className={`nav-link flex items-center gap-1 ${
                  location.pathname.startsWith('/services') ? 'nav-link-active' : ''
                }`}>
                  Services
                  <ChevronDown size={14}
                    className="transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown panel */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                transition-all duration-200 w-64">
                  <div className="bg-white rounded-2xl shadow-card-hover border border-gray-100
                                  overflow-hidden">
                    <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                    {services.map(({ label, path }) => (
                      <Link key={path} to={path}
                        className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium
                                   text-gray-700 hover:bg-primary hover:text-white
                                   transition-colors duration-150 group/item">
                        <Zap size={13}
                          className="text-secondary group-hover/item:text-white
                                     transition-colors flex-shrink-0" />
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+254711203376"
                 className="flex items-center gap-1.5 text-sm font-semibold
                            text-primary hover:text-secondary transition-colors">
                <Phone size={15} />
                <span>+254 711 203 376</span>
              </a>
              <a href="https://wa.me/254711203376"
                 target="_blank" rel="noopener noreferrer"
                 className="btn-primary text-sm py-2.5 px-5 rounded-xl bg-[#25D366]
                            hover:bg-[#1fba58] shadow-lg shadow-green-500/25
                            hover:shadow-green-500/40 hover:-translate-y-0.5
                            transition-all duration-200">
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>

            {/* ── Hamburger ── */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2.5 rounded-xl text-gray-700
                         hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map(({ label, path }) => (
                  <Link key={path} to={path}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold
                                transition-colors ${
                      active(path)
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                    }`}>
                    {label}
                  </Link>
                ))}

                {/* Services accordion */}
                <button
                  onClick={() => setSvc(!svcOpen)}
                  className="w-full flex items-center justify-between px-4 py-3
                             rounded-xl text-sm font-semibold text-gray-700
                             hover:bg-gray-50 transition-colors"
                >
                  Services
                  <ChevronDown size={16}
                    className={`transition-transform ${svcOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {svcOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 border-l-2 border-secondary ml-4"
                    >
                      {services.map(({ label, path }) => (
                        <Link key={path} to={path}
                          className="block px-4 py-2.5 text-sm font-medium text-gray-600
                                     hover:text-secondary transition-colors">
                          {label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mobile CTA */}
                <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                  <a href="tel:+254711203376"
                     className="flex items-center justify-center gap-2 px-4 py-3
                                rounded-xl bg-primary text-white font-semibold text-sm">
                    <Phone size={15} />
                    +254 711 203 376
                  </a>
                  <a href="https://wa.me/254711203376"
                     target="_blank" rel="noopener noreferrer"
                     className="flex items-center justify-center gap-2 px-4 py-3
                                rounded-xl bg-[#25D366] text-white font-semibold text-sm">
                    <MessageCircle size={15} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
