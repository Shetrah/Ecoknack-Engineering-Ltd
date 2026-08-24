import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Cog,
  Factory,
  Settings,
  Wrench,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const CNCFabrication: React.FC = () => {
  const services = [
    'Structural steel fabrication',
    'CNC machining',
    'Precision component fabrication',
    'Concrete floor hardening',
    'Roofing & cladding systems',
    'Loading bay construction',
    'Industrial steelwork',
    'Custom metal fabrication',
    'Machine components',
    'Commercial fabrication',
    'Installation & assembly',
    'Maintenance & modifications',
  ];

  const solutions = [
    {
      icon: Cog,
      title: 'CNC Machining',
      desc: 'Precision machining and component production for demanding industrial and commercial applications.',
    },
    {
      icon: Factory,
      title: 'Steel Fabrication',
      desc: 'Custom structural steelwork and metal fabrication engineered for strength, durability and performance.',
    },
    {
      icon: Settings,
      title: 'Industrial Solutions',
      desc: 'Fabrication and construction solutions tailored to industrial environments and operational requirements.',
    },
    {
      icon: Wrench,
      title: 'Installation & Assembly',
      desc: 'Professional installation, assembly and finishing of fabricated structures and components.',
    },
  ];

  const projectImages = [
    '/projects/cnc-1.jpg',
    '/projects/cnc-2.jpg',
    '/projects/cnc-3.jpg',
    '/projects/cnc-4.jpg',
  ];

  const googlePhotosUrl =
    'https://photos.app.goo.gl/vXCPdsj2sFBNCTDu8';

  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative bg-gradient-to-br from-primary via-slate-900 to-blue-900 text-white py-24 lg:py-28 overflow-hidden">

        {/* Decorative background */}
        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-blue-500/20 rounded-full blur-3xl" />

        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-secondary/15 rounded-full blur-3xl" />

        {/* Technical grid */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >

            {/* Breadcrumb */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Cog size={16} />
                Services / CNC Machining & Fabrication
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
            >
              CNC Machining &{' '}
              <span className="text-blue-200">
                Fabrication
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-3xl"
            >
              Precision CNC machining and fabrication services for
              industrial and commercial applications, combining advanced
              workmanship with reliable engineering solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mt-8"
            >

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-500 text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg"
              >
                Request a Quote
                <ArrowRight size={18} />
              </Link>

              <a
                href="#cnc-projects"
                className="inline-flex items-center gap-2 border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-7 py-3.5 rounded-xl font-bold transition-all duration-300"
              >
                View Our Work
              </a>

            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start"
          >

            {/* LEFT CONTENT */}
            <motion.div variants={fadeUp}>

              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                <Cog
                  size={30}
                  className="text-secondary"
                />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Precision Engineering & Fabrication
              </h2>

              <p className="text-gray-600 leading-relaxed mb-5">
                Ecoknack delivers CNC machining and fabrication solutions
                designed for industrial, commercial and construction
                applications where precision, strength and reliability
                matter.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                From structural steel fabrication and custom components to
                roofing systems, loading bays and concrete floor
                hardening, our team provides practical solutions from
                fabrication through to installation.
              </p>

              {/* Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <CheckCircle
                      size={18}
                      className="text-accent flex-shrink-0 mt-0.5"
                    />

                    <span>{service}</span>
                  </div>
                ))}
              </div>

            </motion.div>


            {/* RIGHT SOLUTIONS */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >

              {solutions.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="group bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300"
                  >

                    <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-secondary flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon
                        size={24}
                        className="text-secondary group-hover:text-white transition-colors duration-300"
                      />
                    </div>

                    <h3 className="font-bold text-primary text-lg mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>

                  </motion.div>
                );
              })}

            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* =====================================================
          FEATURE STRIP
      ====================================================== */}
      <section className="py-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="flex items-center gap-3">
              <Cog
                size={22}
                className="text-secondary"
              />
              <div>
                <p className="font-bold text-primary text-sm">
                  Precision
                </p>
                <p className="text-gray-500 text-xs">
                  Accurate fabrication
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck
                size={22}
                className="text-secondary"
              />
              <div>
                <p className="font-bold text-primary text-sm">
                  Quality
                </p>
                <p className="text-gray-500 text-xs">
                  Built to perform
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Factory
                size={22}
                className="text-secondary"
              />
              <div>
                <p className="font-bold text-primary text-sm">
                  Industrial
                </p>
                <p className="text-gray-500 text-xs">
                  Commercial solutions
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Wrench
                size={22}
                className="text-secondary"
              />
              <div>
                <p className="font-bold text-primary text-sm">
                  Complete Service
                </p>
                <p className="text-gray-500 text-xs">
                  Fabrication to installation
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PROJECT GALLERY
      ====================================================== */}
      <section
        id="cnc-projects"
        className="py-20 lg:py-28 bg-white"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mb-14"
          >

            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-5"
            >
              <Factory size={16} />
              Our Fabrication Projects
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-5"
            >
              Built With Precision
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Explore selected CNC machining, fabrication and industrial
              construction projects completed by the Ecoknack team.
            </motion.p>

          </motion.div>


          {/* =================================================
              GALLERY
          ================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >

            {projectImages.map((image, index) => (
              <motion.div
                key={image}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-2xl bg-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 ${
                  index === 0
                    ? 'sm:row-span-2'
                    : ''
                }`}
              >

                <img
                  src={image}
                  alt={`Ecoknack CNC fabrication project ${index + 1}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                    index === 0
                      ? 'h-full min-h-[520px]'
                      : 'h-[250px] sm:h-[255px]'
                  }`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner icon */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <Cog
                    size={18}
                    className="text-primary"
                  />
                </div>

              </motion.div>
            ))}

          </motion.div>


          {/* =================================================
              GOOGLE PHOTOS
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14"
          >

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-blue-900 text-white px-6 py-10 sm:px-10 lg:px-14">

              <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />

              <div className="absolute -bottom-32 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-7">

                <div className="max-w-2xl">

                  <span className="text-blue-200 text-sm font-semibold uppercase tracking-wider">
                    More Fabrication Projects
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-3">
                    Explore Our Complete Gallery
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    See more of our CNC machining, structural fabrication,
                    industrial works and completed projects in our full
                    photo gallery.
                  </p>

                </div>

                <a
                  href={googlePhotosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 px-7 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg whitespace-nowrap"
                >
                  View More Photos
                  <ExternalLink size={18} />
                </a>

              </div>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-primary via-slate-900 to-blue-900 text-white overflow-hidden">

        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <Cog
            size={42}
            className="mx-auto mb-5 text-blue-200"
          />

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need Precision Fabrication?
          </h2>

          <p className="text-white/75 text-lg mb-8 max-w-2xl mx-auto">
            Talk to the Ecoknack team about your CNC machining,
            fabrication or industrial construction requirements.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Request a Quote
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default CNCFabrication;