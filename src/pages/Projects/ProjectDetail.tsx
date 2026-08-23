import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  CheckCircle,
  ExternalLink,
  Image,
} from 'lucide-react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../../lib/firebase';
import { defaultProjects, type ProjectRecord } from '../../data/siteContent';

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

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectRecord | null>(null);

  useEffect(() => {
    /*
     * First look for the project in the local/default projects.
     * This allows the page to work even when Firebase is not configured.
     */
    const localProject = defaultProjects.find(
      (item) => item.id === id
    );

    /*
     * If Firebase is not configured, use defaultProjects.
     */
    if (!isFirebaseConfigured || !db) {
      setProject(localProject ?? null);
      return;
    }

    /*
     * Listen for projects stored in Firebase.
     */
    const unsubscribe = onSnapshot(
      collection(db, 'projects'),
      (snapshot) => {
        const firebaseProjects = snapshot.docs.map((docItem) => ({
          id: docItem.id,
          ...(docItem.data() as Omit<ProjectRecord, 'id'>),
        })) as ProjectRecord[];

        /*
         * Firebase project takes priority.
         * If it doesn't exist in Firebase, use the local project.
         */
        const firebaseProject = firebaseProjects.find(
          (item) => item.id === id
        );

        setProject(firebaseProject ?? localProject ?? null);
      },
      (error) => {
        console.error(
          'Error loading project from Firebase:',
          error
        );

        /*
         * If Firebase fails, fall back to the local project.
         */
        setProject(localProject ?? null);
      }
    );

    return () => unsubscribe();
  }, [id]);

  /*
   * ─────────────────────────────────────────────
   * PROJECT NOT FOUND
   * ─────────────────────────────────────────────
   */
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Project Not Found
        </h2>

        <p className="text-gray-500 mb-6 text-center">
          This project doesn't exist or may have been moved.
        </p>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section
        className={`bg-gradient-to-r ${project.color} text-white py-20 sm:py-24`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >

            {/* Back to Projects */}
            <motion.div
              variants={fadeUp}
              className="mb-5"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Projects
              </Link>
            </motion.div>

            {/* Category */}
            <motion.span
              variants={fadeUp}
              className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
            >
              {project.category}
            </motion.span>

            {/* Project title */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5"
            >
              {project.title}
            </motion.h1>

            {/* Project metadata */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-5 text-white/80 text-sm"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                {project.location}
              </span>

              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {project.year}
              </span>

              <span>
                Client:{' '}
                <strong className="text-white">
                  {project.client}
                </strong>
              </span>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MAIN PROJECT IMAGE
      ═══════════════════════════════════════════ */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="rounded-2xl overflow-hidden shadow-lg bg-gray-100"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[280px] sm:h-[400px] lg:h-[520px] object-cover"
              loading="eager"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROJECT GALLERY
      ═══════════════════════════════════════════ */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >

              {/* Gallery Header */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7"
              >

                <div>
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <Image size={20} />

                    <span className="text-sm font-bold uppercase tracking-wider">
                      Project Gallery
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                    Project Photos
                  </h2>

                  <p className="text-gray-500 text-sm mt-2">
                    A closer look at the work completed on this project.
                  </p>
                </div>

                {/* Google Photos Button */}
                {project.googlePhotosUrl && (
                  <a
                    href={project.googlePhotosUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      bg-primary
                      hover:bg-secondary
                      text-white
                      px-5
                      py-3
                      rounded-lg
                      text-sm
                      font-bold
                      transition-all
                      whitespace-nowrap
                    "
                  >
                    More Project Photos
                    <ExternalLink size={16} />
                  </a>
                )}

              </motion.div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {project.gallery.map((image, index) => (
                  <motion.div
                    key={`${image}-${index}`}
                    variants={fadeUp}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-xl
                      bg-gray-100
                      aspect-[4/3]
                      shadow-sm
                    "
                  >

                    <img
                      src={image}
                      alt={`${project.title} - Project Photo ${index + 1}`}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                      }}
                    />

                    {/* Image Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/50
                        via-transparent
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                      "
                    />

                    {/* Photo Number */}
                    <span
                      className="
                        absolute
                        bottom-3
                        left-3
                        bg-black/50
                        backdrop-blur-sm
                        text-white
                        text-xs
                        font-semibold
                        px-2.5
                        py-1
                        rounded-full
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                      "
                    >
                      Photo {index + 1}
                    </span>

                  </motion.div>
                ))}

              </div>

              {/* Mobile Google Photos Button */}
              {project.googlePhotosUrl && (
                <motion.div
                  variants={fadeUp}
                  className="flex justify-center mt-7 sm:hidden"
                >
                  <a
                    href={project.googlePhotosUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      bg-primary
                      hover:bg-secondary
                      text-white
                      px-6
                      py-3
                      rounded-lg
                      text-sm
                      font-bold
                      transition-all
                    "
                  >
                    View More Project Photos
                    <ExternalLink size={16} />
                  </a>
                </motion.div>
              )}

            </motion.div>

          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════
          PROJECT CONTENT
      ═══════════════════════════════════════════ */}
      <section className="py-10 sm:py-16 lg:py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="
              grid
              grid-cols-1
              lg:grid-cols-3
              gap-10
              lg:gap-12
            "
          >

            {/* ═════════════════════════════════════
                PROJECT OVERVIEW
            ═════════════════════════════════════ */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-2"
            >

              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-5">
                Project Overview
              </h2>

              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-8">
                {project.desc}
              </p>

              <p className="text-gray-600 leading-relaxed">
                Ecoknack Engineering Limited engaged its full planning
                and management capabilities to deliver this project to
                the highest standards, embracing new technology and
                innovative approaches throughout the construction
                process.
              </p>

            </motion.div>

            {/* ═════════════════════════════════════
                SIDEBAR
            ═════════════════════════════════════ */}
            <motion.div
              variants={fadeUp}
              className="space-y-4"
            >

              {/* Project Highlights */}
              <div className="bg-gray-50 rounded-xl p-6">

                <h3 className="font-bold text-primary mb-4">
                  Project Highlights
                </h3>

                <ul className="space-y-3">

                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="
                        flex
                        items-start
                        gap-2
                        text-sm
                        text-gray-700
                      "
                    >

                      <CheckCircle
                        size={16}
                        className="
                          text-accent
                          flex-shrink-0
                          mt-0.5
                        "
                      />

                      <span>
                        {highlight}
                      </span>

                    </li>
                  ))}

                </ul>

              </div>

              {/* Start Your Project */}
              <div className="bg-primary text-white rounded-xl p-6">

                <h3 className="font-bold mb-3">
                  Start Your Project
                </h3>

                <p className="text-white/75 text-sm mb-4">
                  Get a free consultation from our expert team for a
                  similar project.
                </p>

                <Link
                  to="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    bg-secondary
                    hover:bg-orange-500
                    text-white
                    px-5
                    py-2.5
                    rounded-lg
                    text-sm
                    font-bold
                    transition-all
                    w-full
                    justify-center
                  "
                >
                  Request Quote
                  <ArrowRight size={16} />
                </Link>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* ═══════════════════════════════════════════
          BOTTOM NAVIGATION
      ═══════════════════════════════════════════ */}
      <div className="border-t border-gray-100 py-8">

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            flex
            flex-col
            sm:flex-row
            justify-between
            items-center
            gap-4
          "
        >

          {/* All Projects */}
          <Link
            to="/projects"
            className="
              inline-flex
              items-center
              gap-2
              text-primary
              hover:text-secondary
              font-semibold
              transition-colors
            "
          >
            <ArrowLeft size={18} />
            All Projects
          </Link>

          {/* Discuss Project */}
          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              gap-2
              bg-primary
              hover:bg-secondary
              text-white
              px-6
              py-3
              rounded-lg
              font-semibold
              transition-all
            "
          >
            Discuss a Project
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ProjectDetail;