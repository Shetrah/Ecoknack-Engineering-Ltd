import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface Props { children: React.ReactNode; }

const variants = {
  initial:  { opacity: 0, y: 18 },
  enter:    { opacity: 1, y: 0,
              transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
  exit:     { opacity: 0, y: -12,
              transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
};

const PageTransition: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <motion.div
      key={pathname}
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
