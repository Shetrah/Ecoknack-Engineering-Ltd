import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Fuel,
  HeartPulse,
  ShieldCheck,
  Wrench,
  Activity,
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

const SpecializedFacilities: React.FC = () => {
  const services = [
    'Petrol station construction',
    'Hospital & healthcare facilities',
    'Medical centre construction',
    'Fuel station forecourts',
    'Canopies & service bays',
    'Clinical & treatment spaces',
    'Electrical & mechanical works',
    'Facility refurbishment',
    'Plumbing & drainage systems',
    'Structural & civil works',
    'Safety & compliance considerations',
    'Project management',
  ];

  const facilitySolutions = [
    {
      icon: Fuel,
      title: 'Petrol Stations',
      desc: 'Complete construction solutions for modern petrol stations, forecourts, canopies, service areas and supporting facilities.',
    },
    {
      icon: HeartPulse,
      title: 'Hospitals & Healthcare',
      desc: 'Purpose-built healthcare facilities designed around functionality, patient flow, safety and operational requirements.',
    },
    {
      icon: Wrench,
      title: 'Civil & Structural Works',
      desc: 'Professional foundations, structural works, drainage, paving and associated civil engineering solutions.',
    },
    {
      icon: ShieldCheck,
      title: 'Safety & Quality',
      desc: 'A professional approach to quality, safety and project coordination throughout every stage of construction.',
    },
  ];

  const petrolStationFeatures = [
    'Forecourt construction',
    'Fuel station canopies',
    'Service & retail areas',
    'Paving & drainage',
    'Office & staff facilities',
    'Structural works',
  ];

  const hospitalFeatures = [
    'Hospital buildings',
    'Medical centres',
    'Treatment areas',
    'Patient facilities',
    'Administrative spaces',
    'Renovation & refurbishment',
  ];

  const projectImages = Array.from(
    { length: 6 },
    (_, index) =>
      `/services/petrol-hospitals/project-${index + 1}.jpg`
  );

  const googlePhotosLink = 'YOUR_GOOGLE_PHOTOS_LINK';

  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative bg-gradient-to-br from-primary via-slate-900 to-blue-900 text-white py-24 lg:py-28 overflow-hidden">

        <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] bg-blue-500/20 rounded-full blur-3xl" />

        <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] bg-secondary/15 rounded-full blur-3xl" />

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
                Specialized Facilities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
            >
              Petrol Stations &{' '}
              <span className="text-blue-200">
                Hospitals
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-3xl"
            >
              Specialized construction solutions for petrol stations,
              hospitals and healthcare facilities — delivered with
              professionalism, precision and attention to operational needs.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mt-8"
            >

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-500 text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </Link>

              <a
                href="#facility-projects"
                className="inline-flex items-center gap-2 border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-7 py-3.5 rounded-xl font-bold transition-all duration-300"
              >
                View Our Projects
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

            {/* LEFT */}
            <motion.div variants={fadeUp}>

              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                <Building2
                  size={30}
                  className="text-secondary"
                />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Specialized Facility Construction
              </h2>

              <p className="text-gray-600 leading-relaxed mb-5">
                Ecoknack provides specialized construction services for
                facilities that require careful planning, quality
                workmanship and attention to operational requirements.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                From petrol stations and commercial forecourts to hospitals
                and healthcare facilities, our team coordinates the
                construction process from civil and structural works through
                to finishing and refurbishment.
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


            {/* RIGHT */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >

              {facilitySolutions.map((item) => {
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
          PETROL STATIONS
      ====================================================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >

            {/* Petrol content */}
            <motion.div variants={fadeUp}>

              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                <Fuel size={16} />
                Petrol Station Construction
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-5">
                Complete Petrol Station Solutions
              </h2>

              <p className="text-gray-600 leading-relaxed mb-7">
                We deliver construction solutions for modern petrol
                stations, combining practical layouts, durable construction
                and professional finishing to support efficient operations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {petrolStationFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100"
                  >
                    <CheckCircle
                      size={18}
                      className="text-secondary flex-shrink-0"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

            </motion.div>


            {/* Petrol visual */}
            <motion.div
              variants={fadeUp}
              className="relative"
            >

              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-orange-500 to-primary shadow-2xl flex items-center justify-center">

                <div className="absolute inset-0 bg-black/10" />

                <div className="relative text-center text-white p-8">

                  <div className="w-20 h-20 mx-auto rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-6">
                    <Fuel size={40} />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                    Petrol Station Projects
                  </h3>

                  <p className="text-white/75 max-w-md mx-auto">
                    Professional construction and development solutions
                    for modern fuel stations and supporting facilities.
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* =====================================================
          HOSPITALS
      ====================================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >

            {/* Visual */}
            <motion.div
              variants={fadeUp}
              className="relative order-2 lg:order-1"
            >

              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-primary shadow-2xl flex items-center justify-center">

                <div className="relative text-center text-white p-8">

                  <div className="w-20 h-20 mx-auto rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-6">
                    <HeartPulse size={40} />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                    Healthcare Facilities
                  </h3>

                  <p className="text-white/75 max-w-md mx-auto">
                    Purpose-built spaces designed around functionality,
                    patient experience and operational efficiency.
                  </p>

                </div>

              </div>

            </motion.div>


            {/* Content */}
            <motion.div
              variants={fadeUp}
              className="order-1 lg:order-2"
            >

              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                <HeartPulse size={16} />
                Hospital & Healthcare Construction
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-5">
                Building Better Healthcare Spaces
              </h2>

              <p className="text-gray-600 leading-relaxed mb-7">
                Our healthcare construction solutions focus on creating
                practical, durable and professionally finished environments
                for hospitals, medical centres and other healthcare
                facilities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hospitalFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
                  >
                    <CheckCircle
                      size={18}
                      className="text-secondary flex-shrink-0"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* =====================================================
          PROJECT GALLERY
      ====================================================== */}
      <section
        id="facility-projects"
        className="py-20 lg:py-28 bg-gray-50"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
              <Activity size={16} />
              Our Projects
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-5"
            >
              Specialized Projects, Built Right
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Explore a selection of our work across specialized facilities,
              commercial developments and construction projects.
            </motion.p>

          </motion.div>


          {/* Gallery */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="columns-1 sm:columns-2 lg:columns-3 gap-5"
          >

            {projectImages.map((image, index) => (
              <motion.div
                key={image}
                variants={fadeUp}
                className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl bg-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500"
              >

                <img
                  src={image}
                  alt={`Ecoknack specialized facility project ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <Building2
                    size={18}
                    className="text-primary"
                  />
                </div>

              </motion.div>
            ))}

          </motion.div>


          {/* Google Photos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14"
          >

            <div className="relative overflow-hidden rounded-3xl bg-primary text-white px-6 py-10 sm:px-10 lg:px-14">

              <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />

              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-7">

                <div className="max-w-2xl">

                  <span className="text-blue-200 text-sm font-semibold uppercase tracking-wider">
                    More Projects
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-3">
                    Explore Our Complete Gallery
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    View more of our specialized construction projects,
                    facilities and completed developments in our full photo
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
                  <ArrowRight size={18} />
                </a>

              </div>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-primary to-blue-900 text-white overflow-hidden">

        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <Building2
            size={42}
            className="mx-auto mb-5 text-blue-200"
          />

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Have a Specialized Facility Project?
          </h2>

          <p className="text-white/75 text-lg mb-8 max-w-2xl mx-auto">
            Talk to the Ecoknack team about your petrol station, hospital
            or healthcare facility construction requirements.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default SpecializedFacilities;