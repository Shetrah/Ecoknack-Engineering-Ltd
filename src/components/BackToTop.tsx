import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollUp}
          aria-label="Back to top"
          className="fixed bottom-8 right-6 z-50 w-12 h-12 rounded-full
                     bg-[#F7941D] text-white flex items-center justify-center
                     focus:outline-none focus:ring-4 focus:ring-[#F7941D]/50
                     hover:scale-110 active:scale-95 transition-transform duration-200"
          style={{
            boxShadow: '0 0 0 0 rgba(247,148,29,0.7)',
            animation: 'btt-glow 2s ease-in-out infinite',
          }}
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
