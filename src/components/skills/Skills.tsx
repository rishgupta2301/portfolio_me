import React from 'react';
import { motion } from 'framer-motion';
import SkillCategory from './SkillCategory';
import CertificationCard from './CertificationCard';
import { skillCategories, certifications } from '../../data/skills';

const Skills = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            Skills & Certifications
          </h2>

          {/* Skills Categories */}
          <div className="mb-16">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={category.title}
                category={category}
                index={index}
              />
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((certification, index) => (
                <CertificationCard
                  key={certification.title}
                  certification={certification}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;