import React from 'react';
import { motion } from 'framer-motion';

interface SkillTagProps {
  skill: string;
  index: number;
}

const SkillTag = ({ skill, index }: SkillTagProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
    >
      {skill}
    </motion.span>
  );
};

export default SkillTag;