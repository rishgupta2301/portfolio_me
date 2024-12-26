import React from 'react';
import { motion } from 'framer-motion';
import SkillTag from './SkillTag';
import { SkillCategory as SkillCategoryType } from '../../data/skills';

interface SkillCategoryProps {
  category: SkillCategoryType;
  index: number;
}

const SkillCategory = ({ category, index }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="mb-8"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, i) => (
          <SkillTag key={skill} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;