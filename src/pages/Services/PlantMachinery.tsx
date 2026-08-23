import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Construction,
  Truck,
  Settings,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const PlantMachinery: React.FC = () => {
  const features = [
    'Construction plant and machinery hire',
    'Heavy equipment leasing',
    'Excavators & earthmoving equipment',
    'Loaders, graders & rollers',
    'Generators & power equipment',
    'Material handling equipment',
    'Short-term & long-term hire',
    'Equipment delivery & collection',
  ];

  const services = [
    {
      icon: Construction,
      label: 'Construction Equipment',
      desc: 'Reliable heavy machinery for construction, excavation and civil works.',
    },
    {
      icon: Truck,
      label: 'Plant Hire',
      desc: 'Flexible access to a wide range of plant and equipment for your projects.',
    },
    {
      icon: Settings,
      label: 'Machinery Leasing',
      desc: 'Cost-effective long-term equipment leasing solutions for businesses.',
    },
    {
      icon: Clock,
      label: 'Flexible Hire',
      desc: 'Short-term and long-term hire options tailored to your project timeline.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-orange-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
            >
              Services / Plant & Machinery Lease and Hire
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-bold mb-5"
            >
              Plant & Machinery Lease and Hire
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl text-white/85 leading-relaxed"
            >
              Access reliable plant and machinery without the high upfront
              cost of ownership. We provide flexible equipment hire and
              leasing solutions for construction, infrastructure, commercial
              and industrial projects.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
          >
            {/* Content */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <Construction size={16} />
                Reliable Equipment Solutions
              </div>

              <h2 className="text-3xl font-bold text-primary mb-5">
                The Right Equipment For Your Project
              </h2>

              <p className="text-gray-600 leading-relaxed mb-5">
                Our plant and machinery hire services give contractors,
                businesses and project developers access to dependable
                equipment when and where they need it. We help you keep
                projects moving while reducing the financial burden of
                purchasing and maintaining heavy machinery.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you need equipment for a short construction job or
                require machinery over an extended project period, our
                flexible hire and leasing options can be tailored to your
                operational requirements.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle
                      size={16}
                      className="text-accent flex-shrink-0 mt-0.5"
                    />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Service Cards */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-4"
            >
              {services.map((item) => (
                <div
                  key={item.label}
                  className="bg-orange-50 rounded-xl p-6 border border-orange-100"
                >
                  <item.icon
                    size={28}
                    className="text-orange-600 mb-3"
                  />

                  <h4 className="font-bold text-primary text-sm mb-1">
                    {item.label}
                  </h4>

                  <p className="text-gray-500 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Plant or Machinery?
          </h2>

          <p className="text-white/80 mb-8">
            Get in touch with our team to discuss your equipment requirements
            and receive a tailored hire or leasing solution.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-orange-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all"
          >
            Request Equipment
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PlantMachinery;