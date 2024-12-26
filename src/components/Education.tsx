import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';
import { educationData } from '../data/education';
import EducationIcon from './education/EducationIcon';

const Education = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="education">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <TimelineItem
              key={index}
              title={edu.degree}
              subtitle={edu.institution}
              location={edu.location}
              period={edu.period}
              description={edu.score}
              icon={<EducationIcon />}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education