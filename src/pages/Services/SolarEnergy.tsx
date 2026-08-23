import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Zap,
  Sun,
  Battery,
  CheckCircle,
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

const SolarEnergy: React.FC = () => {
  const features = [
    'Domestic solar panel installations',
    'Commercial & industrial solar systems',
    'Power backup & battery storage',
    'Solar water heating systems',
    'Off-grid solar solutions',
    'System monitoring & maintenance',
    'Site assessment & design',
    'Authorised Jinko Solar partner',
  ];

  const solutions = [
    {
      icon: Sun,
      label: 'Solar Panels',
      desc: 'Premium solar panels designed for maximum energy efficiency.',
    },
    {
      icon: Battery,
      label: 'Battery Storage',
      desc: 'Reliable energy storage for uninterrupted backup power.',
    },
    {
      icon: Zap,
      label: 'Grid-Tie Systems',
      desc: 'Efficient systems designed to reduce your electricity bills.',
    },
    {
      icon: CheckCircle,
      label: 'Maintenance',
      desc: 'Professional monitoring, servicing and ongoing support.',
    },
  ];

  const solarImages = Array.from(
    { length: 13 },
    (_, index) => `/services/solar/solar-${index + 1}.jpg`
  );

  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative bg-gradient-to-br from-yellow-700 via-yellow-600 to-orange-500 text-white py-24 lg:py-28 overflow-hidden">

        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >

            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sun size={16} />
                Services / Solar Energy
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
            >
              Solar Energy &{' '}
              <span className="text-yellow-100">
                Power Backup Solutions
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl"
            >
              Ecoknack prides itself as a leader in solar energy solutions.
              Our specialist team delivers high-quality solar installations
              for homes, businesses and industrial projects.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-yellow-700 hover:bg-yellow-50 px-7 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg"
              >
                Get Free Quote
                <ArrowRight size={18} />
              </Link>

              <a
                href="#solar-projects"
                className="inline-flex items-center gap-2 border border-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-7 py-3.5 rounded-xl font-bold transition-all duration-300"
              >
                Explore Our Work
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center"
          >

            {/* LEFT CONTENT */}
            <motion.div variants={fadeUp}>

              <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                <Sun size={16} />
                Authorised Jinko Solar Partner
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Clean Energy For Every Need
              </h2>

              <p className="text-gray-600 leading-relaxed mb-5">
                We have partnered and been authorised by leading solar
                manufacturer Jinko to train, supply and install locally.
                This partnership ensures our clients receive world-class
                equipment installed to the highest standards.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Our multi-award-winning green team handles everything from
                site assessment, system design and supply to installation
                and ongoing maintenance — whether it is a domestic rooftop
                or a large commercial installation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <CheckCircle
                      size={18}
                      className="text-yellow-600 flex-shrink-0 mt-0.5"
                    />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

            </motion.div>


            {/* RIGHT CARDS */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >

              {solutions.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="group bg-yellow-50 hover:bg-white rounded-2xl p-6 border border-yellow-100 hover:border-yellow-200 hover:shadow-xl transition-all duration-300"
                  >

                    <div className="w-12 h-12 rounded-xl bg-yellow-100 group-hover:bg-yellow-600 flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon
                        size={25}
                        className="text-yellow-600 group-hover:text-white transition-colors duration-300"
                      />
                    </div>

                    <h3 className="font-bold text-primary text-lg mb-2">
                      {item.label}
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
          SOLAR PROJECT GALLERY
      ====================================================== */}
      <section
        id="solar-projects"
        className="relative py-20 lg:py-28 bg-gray-50"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* SECTION HEADING */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mb-14"
          >

            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-5"
            >
              <Sun size={16} />
              Solar Projects
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-5"
            >
              Powering a Cleaner Future
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-lg leading-relaxed"
            >
              A look at some of the solar installations and renewable energy
              solutions delivered by the Ecoknack team.
            </motion.p>

          </motion.div>


          {/* =================================================
              MASONRY STYLE GALLERY
          ================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]"
          >

            {solarImages.map((image, index) => (
              <motion.div
                key={image}
                variants={fadeUp}
                className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500"
              >

                <img
                  src={image}
                  alt={`Ecoknack solar installation ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Decorative corner */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <Sun
                    size={18}
                    className="text-yellow-600"
                  />
                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-yellow-600 to-orange-500 text-white overflow-hidden">

        <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <Sun
            size={42}
            className="mx-auto mb-5 text-yellow-100"
          />

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Go Solar Today
          </h2>

          <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
            Get a free site assessment and quote from our certified solar
            installation team.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-yellow-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Free Quote
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default SolarEnergy;