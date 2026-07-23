import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const news = [
  { id: 1, title: 'Ecoknack Completes Flagship Rubis UN Avenue Station Upgrade', date: 'January 2025', category: 'Projects', excerpt: 'Ecoknack Engineering Limited successfully completed the comprehensive transformation of the flagship Rubis station on UN Avenue — a stunning upgrade with striking architectural details.' },
  { id: 2, title: 'Jinko Solar Partnership Strengthens Our Renewable Energy Offering', date: 'November 2024', category: 'Partnerships', excerpt: 'We have been authorised by leading solar manufacturer Jinko to train, supply and install locally — giving our clients access to world-class solar technology.' },
  { id: 3, title: 'Ecoknack Expands Road Works Division with New Heavy Machinery', date: 'October 2024', category: 'Company News', excerpt: 'Our road construction capacity has been enhanced with additional heavy machinery, enabling us to deliver more bituminous and cabro road projects simultaneously across Kenya.' },
  { id: 4, title: 'Over 360 Gas & Oil Sites Completed Across Kenya', date: 'September 2024', category: 'Milestones', excerpt: 'Ecoknack Engineering has reached a significant milestone, having completed over 360 gas and oil industry sites — cementing our position as the leading design and build contractor in this sector.' },
  { id: 5, title: 'NCA Certification Renewed for All Four Work Categories', date: 'August 2024', category: 'Certifications', excerpt: 'Ecoknack Engineering Limited has successfully renewed its National Construction Authority certifications for Electrical, Civil, Building and Water works.' },
  { id: 6, title: 'Kakamega County Road Works Project Successfully Delivered', date: 'July 2024', category: 'Projects', excerpt: 'Our team completed road construction and drainage works for Kakamega County Government, delivering durable bituminous roads for the community.' },
];

const News: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.p variants={fadeUp} className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4">News & Updates</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl font-bold mb-5">Latest News</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/85">
              Stay up to date with Ecoknack Engineering's latest projects, milestones, partnerships and industry news.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article) => (
              <motion.div key={article.id} variants={fadeUp} className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="bg-gradient-to-br from-primary to-secondary h-40 flex items-end p-5">
                  <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">{article.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
                    <Calendar size={13} />{article.date}
                  </div>
                  <h3 className="font-bold text-primary text-base mb-3 group-hover:text-secondary transition-colors leading-snug">{article.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <button className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Stay in the Loop</h2>
          <p className="text-gray-500 mb-8">Subscribe to get the latest news from Ecoknack Engineering delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" />
            <button type="submit" className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default News;
