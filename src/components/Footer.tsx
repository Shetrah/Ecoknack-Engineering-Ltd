import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home',        path: '/' },
  { label: 'About Us',    path: '/about' },
  { label: 'Services',    path: '/services' },
  { label: 'Projects',    path: '/projects' },
  { label: 'Equipment',   path: '/equipment' },
  { label: 'Safety & EHS',path: '/safety' },
  { label: 'Careers',     path: '/careers' },
  { label: 'Contact',     path: '/contact' },
];

const serviceLinks = [
  { label: 'Solar Energy Solutions',  path: '/services/solar-energy' },
  { label: 'Building Construction',   path: '/services/building-construction' },
  { label: 'Design & Build',          path: '/services/design-build' },
  { label: 'Civil Engineering',       path: '/services/civil-engineering' },
  { label: 'Road Construction',       path: '/services/road-construction' },
  { label: 'CNC & Fabrication',       path: '/services' },
];

const certs = [
  'NCA – Electrical Works',
  'NCA – Civil Works',
  'NCA – Building Works',
  'NCA – Water Works',
  'CAK Accredited',
  'EPRA Accredited',
  'ICTA Accredited',
];

const socials = [
  { Icon: Facebook,  href: '#' },
  { Icon: Twitter,   href: '#' },
  { Icon: Linkedin,  href: '#' },
  { Icon: Instagram, href: '#' },
];

const Footer: React.FC = () => (
  <footer className="bg-[#071e30] text-white">

    {/* ── CTA Banner ── */}
    <div className="bg-gradient-to-r from-secondary to-[#b85e06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10
                      flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-extrabold text-white">Ready to start your project?</h3>
          <p className="text-white/80 text-sm mt-1">
            Get a free consultation from our certified engineering team.
          </p>
        </div>
        <Link to="/contact"
          className="inline-flex items-center gap-2 bg-white text-secondary
                     font-bold px-7 py-3.5 rounded-xl text-sm hover:bg-gray-50
                     transition-colors whitespace-nowrap shadow-lg">
          Request a Quote <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>

    {/* ── Main footer body ── */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link to="/" className="inline-block mb-6">
            <img src="/ECOKNACK LOGO.png" alt="Ecoknack Engineering"
                 className="h-14 w-auto object-contain brightness-0 invert" />
          </Link>
          <p className="text-white/55 text-sm leading-relaxed mb-6">
            Engineering &amp; Construction company headquartered in Nairobi, Kenya.
            Renewable energy, general construction, project management and
            consultancy services since&nbsp;2018.
          </p>
          <div className="flex gap-2.5">
            {socials.map(({ Icon, href }, i) => (
              <a key={i} href={href}
                 className="w-9 h-9 rounded-lg bg-white/8 hover:bg-secondary
                            flex items-center justify-center transition-colors duration-200">
                <Icon size={16} className="text-white/70 hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map(({ label, path }) => (
              <li key={path}>
                <Link to={path}
                  className="text-white/60 hover:text-secondary text-sm
                             font-medium transition-colors duration-150">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
            Our Services
          </h4>
          <ul className="space-y-2.5">
            {serviceLinks.map(({ label, path }) => (
              <li key={path}>
                <Link to={path}
                  className="text-white/60 hover:text-secondary text-sm
                             font-medium transition-colors duration-150">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
            Get In Touch
          </h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-secondary flex-shrink-0 mt-0.5" />
              <span>
                Donholm Radhesyam Godowns &amp; Kiambu Road K Mall No 8<br />
                P.O Box 7771 – 00200, Nairobi
              </span>
            </li>
            <li>
              <a href="tel:+254711203376"
                 className="flex items-center gap-3 hover:text-secondary transition-colors">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                +254 711 203 376
              </a>
            </li>
            <li>
              <a href="mailto:Ecoknackengineering@gmail.com"
                 className="flex items-center gap-3 hover:text-secondary transition-colors break-all">
                <Mail size={16} className="text-secondary flex-shrink-0" />
                Ecoknackengineering@gmail.com
              </a>
            </li>
          </ul>
          <a href="https://wa.me/254711203376"
             target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 mt-6 bg-[#25D366] hover:bg-[#1fba58]
                        text-white font-semibold text-sm px-5 py-2.5 rounded-xl
                        transition-colors duration-200">
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>

    {/* ── Certifications strip ── */}
    <div className="border-t border-white/8 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-white/30 font-bold uppercase
                      tracking-widest mb-4">
          Certified &amp; Accredited
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {certs.map((c) => (
            <span key={c}
              className="text-xs text-white/45 bg-white/5 border border-white/10
                         px-3.5 py-1.5 rounded-full font-medium">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* ── Bottom bar ── */}
    <div className="border-t border-white/8 py-5 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                      flex flex-col sm:flex-row justify-between items-center gap-3
                      text-xs text-white/35 font-medium">
        <span>© {new Date().getFullYear()} Ecoknack Engineering Limited.
              All rights reserved.</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
