import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  CheckCircle,
  ExternalLink,
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

const BuildingConstruction: React.FC = () => {
  const services = [
    'Residential homes',
    'Commercial buildings',
    'Luxury home construction',
    'Industrial facilities',
    'Refurbishment & fit-out',
    'Structural repairs',
    'Foundation works',
    'Roofing & cladding',
  ];

  const constructionSolutions = [
    {
      title: 'Residential Construction',
      desc: 'From single-storey homes to multi-unit apartment blocks, built to your specifications with quality materials.',
    },
    {
      title: 'Commercial Buildings',
      desc: 'Office complexes, retail spaces, warehouses and industrial facilities designed for functionality and longevity.',
    },
    {
      title: 'Refurbishment',
      desc: 'Comprehensive renovation services delivering exceptional results that exceed client expectations.',
    },
  ];

  const constructionImages = Array.from(
    { length: 5 },
    (_, index) => `/services/building-construction/building-${index + 1}.jpg`
  );

  const googlePhotosLink = 'https://photos.app.goo.gl/bqBZMxeGb8ZoVJd16';

  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative bg-gradient-to-br from-primary via-blue-900 to-blue-800 text-white py-24 lg:py-28 overflow-hidden">

        {/* Decorative backgrounds */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >

            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Building2 size={16} />
                Services / Building Construction
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
            >
              Building Construction{' '}
              <span className="text-blue-200">
                Services
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl"
            >
              All-in-one design and build construction services to save you
              the inconvenience of juggling multiple service providers.
              Building your dream home? We help you save cost, time and
              effort.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mt-8"
            >

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-500 text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>

              <a
                href="#construction-projects"
                className="inline-flex items-center gap-2 border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-7 py-3.5 rounded-xl font-bold transition-all duration-300"
              >
                Explore Our Projects
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
                <Building2
                  size={30}
                  className="text-secondary"
                />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Professional Building Works
              </h2>

              <p className="text-gray-600 leading-relaxed mb-5">
                Contact us today for consultation and discover why we are
                the go-to choice for luxury home construction. We strive to
                ensure that each client's unique needs and vision are met
                with precision and attention to detail.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Our team of construction professionals boasts extensive
                knowledge and skills in construction projects, ensuring that
                every aspect is handled with utmost professionalism and
                care. From foundation to finishing, we manage every detail.
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


            {/* RIGHT CONTENT */}
            <motion.div
              variants={fadeUp}
              className="space-y-5"
            >

              {constructionSolutions.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                  className="group bg-gray-50 hover:bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-100 border-l-4 border-l-secondary hover:shadow-xl transition-all duration-300"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h3 className="font-bold text-primary text-lg mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-secondary flex-shrink-0 flex items-center justify-center transition-colors duration-300">
                      <Building2
                        size={19}
                        className="text-secondary group-hover:text-white transition-colors duration-300"
                      />
                    </div>

                  </div>

                </motion.div>
              ))}

            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* =====================================================
          PROJECT GALLERY
      ====================================================== */}
      <section
        id="construction-projects"
        className="relative py-20 lg:py-28 bg-gray-50"
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
              <Building2 size={16} />
              Our Construction Projects
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-5"
            >
              Building With Precision
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Take a look at some of the construction and building projects
              delivered by the Ecoknack team.
            </motion.p>

          </motion.div>


          {/* =================================================
              FIVE IMAGE MASONRY GALLERY
          ================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="columns-1 sm:columns-2 lg:columns-3 gap-5"
          >

            {constructionImages.map((image, index) => (
              <motion.div
                key={image}
                variants={fadeUp}
                className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500"
              >

                <img
                  src={image}
                  alt={`Ecoknack building construction project ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner icon */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <Building2
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

            <div className="relative overflow-hidden rounded-3xl bg-primary text-white px-6 py-10 sm:px-10 lg:px-14">

              {/* Background decoration */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />

              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-7">

                <div className="max-w-2xl">

                  <span className="text-blue-200 text-sm font-semibold uppercase tracking-wider">
                    More Projects
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-3">
                    Explore Our Complete Project Gallery
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    View more of our completed construction projects,
                    developments and building works in our full photo
                    gallery.
                  </p>

                </div>

                <a
                  href={googlePhotosLink}
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
      <section className="relative py-20 lg:py-24 bg-primary text-white overflow-hidden">

        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <Building2
            size={42}
            className="mx-auto mb-5 text-blue-200"
          />

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start Building Today
          </h2>

          <p className="text-white/75 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover why we are Kenya's trusted
            building construction partner.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Free Consultation
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default BuildingConstruction;