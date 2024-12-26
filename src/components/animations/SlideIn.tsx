import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlideInProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
}

const SlideIn = ({ children, direction = 'left', delay = 0 }: SlideInProps) => {
  const initial = { x: direction === 'left' ? -50 : 50, opacity: 0 };
  
  return (
    <motion.div
      initial={initial}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;