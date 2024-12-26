import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from '../TimelineItem';
import { Experience } from '../../data/experience';
import ExperienceIcon from './ExperienceIcon';

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

const ExperienceItem = ({ experience, index }: ExperienceItemProps) => {
  return (
    <TimelineItem
      title={experience.title}
      subtitle={experience.company}
      location={experience.location}
      period={experience.period}
      description={
        <div className="space-y-4">
          {experience.techStack && (
            <div className="flex flex-wrap gap-2">
              {experience.techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="px-2 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          )}
          <ul className="list-disc list-inside space-y-2">
            {experience.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="text-gray-700 dark:text-gray-300"
              >
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>
      }
      icon={<ExperienceIcon />}
      index={index}
    />
  );
};

export default ExperienceItem;