import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  location?: string;
  period: string;
  description: ReactNode;
  icon: ReactNode;
  index: number;
}

const TimelineItem = ({ 
  title, 
  subtitle, 
  location, 
  period, 
  description, 
  icon, 
  index 
}: TimelineItemProps) => {
  return (
    <motion.div
      className="relative pl-8 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div
        className="absolute left-0 top-0 h-full w-px bg-gray-200 dark:bg-gray-700"
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      />
      <motion.div
        className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
      />
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <motion.div
            initial={{ rotate: -180, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-2">{subtitle}</p>
        {location && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
            <MapPin size={14} />
            {location}
          </p>
        )}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{period}</p>
        <div className="text-gray-700 dark:text-gray-300">{description}</div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;