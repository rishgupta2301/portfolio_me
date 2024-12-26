import React from 'react';
import { motion } from 'framer-motion';

interface SkillProgressProps {
  name: string;
  level: number;
  index: number;
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    x: -50,
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const progressVariants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1.2,
      ease: [0.87, 0, 0.13, 1],
      delay: 0.3
    }
  })
};

const SkillProgress = ({ name, level, index }: SkillProgressProps) => {
  return (
    <motion.div 
      className="relative"
      variants={itemVariants}
    >
      <div className="flex justify-between items-center mb-2">
        <motion.span 
          className="text-lg font-medium dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          {name}
        </motion.span>
        <motion.span 
          className="text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden relative">
        <motion.div
          className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
          variants={progressVariants}
          custom={level}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <motion.div
          className="absolute top-0 left-0 h-full w-full bg-white/20 dark:bg-black/20"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
            delay: index * 0.2
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillProgress