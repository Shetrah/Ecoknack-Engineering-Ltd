import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Home,
  Palette,
  Layers,
  CheckCircle,
  Ruler,
  Sofa,
  Paintbrush,
  Lightbulb,
  Building2,
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

const InteriorDesign: React.FC = () => {
  const features = [
    'Residential interior design',
    'Commercial & office interiors',
    'Interior space planning',
    'Wall finishes & decorative treatments',
    'Flooring & ceiling finishes',
    'Custom furniture & fittings',
    'Lighting & interior styling',
    'Renovation & interior upgrades',
  ];

  const services = [
    {
      icon: Home,
      label: 'Residential Interiors',
      desc: 'Beautiful and functional living spaces designed around your lifestyle, preferences and everyday needs.',
    },
    {
      icon: Building2,
      label: 'Commercial Interiors',
      desc: 'Professional office, retail and commercial environments designed to enhance functionality and productivity.',
    },
    {
      icon: Palette,
      label: 'Interior Finishes',
      desc: 'Carefully selected wall, floor, ceiling and decorative finishes that give every space a refined appearance.',
    },
    {
      icon: Layers,
      label: 'Fit-Out Solutions',
      desc: 'Complete interior fit-outs including partitions, fittings, fixtures and finishing details.',
    },
    {
      icon: Sofa,
      label: 'Furniture & Fittings',
      desc: 'Custom furniture and interior fittings designed to complement the character and functionality of your space.',
    },
    {
      icon: Ruler,
      label: 'Space Planning',
      desc: 'Intelligent layouts that maximise available space while maintaining comfort, movement and functionality.',
    },
    {
      icon: Paintbrush,
      label: 'Decorative Finishes',
      desc: 'Specialised decorative treatments and finishes that add character, texture and personality to interiors.',
    },
    {
      icon: Lightbulb,
      label: 'Lighting & Styling',
      desc: 'Thoughtful lighting and styling solutions that create the right atmosphere and complete the overall design.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 px-4 py-2 rounded-full text-sm font-semibold mb-6 transition-colors"
              >
                <ArrowRight
                  size={15}
                  className="rotate-180"
                />
                Back to Services
              </Link>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
            >
              Services / Interior Design & Finishes
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Interior Design & Finishes
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl text-white/85 leading-relaxed max-w-3xl"
            >
              We transform ordinary spaces into beautiful, functional and
              inspiring environments through thoughtful interior design,
              professional space planning and high-quality finishes.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
          >

            {/* Left Content */}
            <motion.div variants={fadeUp}>

              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <Palette size={16} />
                Professional Interior Solutions
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5">
                Creating Spaces That Work Beautifully
              </h2>

              <p className="text-gray-600 leading-relaxed mb-5">
                Our interior design and finishing services combine creativity,
                functionality and quality craftsmanship to create spaces that
                reflect your vision and serve their purpose effectively.
              </p>

              <p className="text-gray-600 leading-relaxed mb-5">
                From homes and apartments to offices, retail spaces and
                commercial developments, we provide comprehensive interior
                solutions tailored to the unique requirements of every
                project.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Our team can manage the entire process, from initial
                consultation and space planning through material selection,
                installation, finishing and final styling.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle
                      size={17}
                      className="text-secondary flex-shrink-0 mt-0.5"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* Service Highlights */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-4"
            >
              {services.slice(0, 4).map((item) => (
                <div
                  key={item.label}
                  className="bg-blue-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300"
                >
                  <item.icon
                    size={30}
                    className="text-primary mb-4"
                  />

                  <h4 className="font-bold text-primary text-sm mb-2">
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

      {/* Our Interior Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            >
              <Layers size={16} />
              What We Offer
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              Complete Interior Solutions
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-600 leading-relaxed"
            >
              From the initial concept to the final finishing touch, we
              provide the expertise and services needed to create exceptional
              interiors.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="bg-white rounded-xl p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                  <item.icon
                    size={25}
                    className="text-primary"
                  />
                </div>

                <h3 className="font-bold text-primary mb-3">
                  {item.label}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-secondary font-semibold mb-3"
              >
                OUR APPROACH
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-bold text-primary mb-5"
              >
                From Concept to Completion
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-gray-600 leading-relaxed"
              >
                We take a structured approach to every interior project,
                ensuring that design decisions, materials, workmanship and
                finishing details come together to achieve a cohesive result.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-4"
            >
              {[
                {
                  number: '01',
                  title: 'Consultation & Brief',
                  desc: 'We understand your requirements, preferences, budget and project objectives.',
                },
                {
                  number: '02',
                  title: 'Design & Space Planning',
                  desc: 'Our team develops practical concepts and layouts tailored to your space.',
                },
                {
                  number: '03',
                  title: 'Materials & Finishes',
                  desc: 'We help select appropriate materials, colours, finishes, fixtures and fittings.',
                },
                {
                  number: '04',
                  title: 'Installation & Completion',
                  desc: 'Our team coordinates implementation and finishing to deliver the completed interior.',
                },
              ].map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="flex gap-5 p-5 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="font-bold text-primary mb-1">
                      {step.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Space
          </h2>

          <p className="text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Talk to our interior design team about your next project and
            discover how we can transform your space with professional design
            and quality finishes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-bold transition-all"
            >
              Get a Free Consultation
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg font-bold transition-all"
            >
              View All Services
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
};

export default InteriorDesign;