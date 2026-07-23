import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5 bg-white">
    <div className="relative w-16 h-16">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border-4
                   border-primary/20 border-t-primary"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-2 rounded-full border-4
                   border-secondary/20 border-t-secondary"
      />
    </div>
    <p className="text-sm font-semibold text-gray-400 tracking-wide">Loading…</p>
  </div>
);

export default LoadingSpinner;
