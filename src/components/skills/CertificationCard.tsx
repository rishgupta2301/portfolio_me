import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Certification } from '../../data/skills';

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

const CertificationCard = ({ certification, index }: CertificationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <Award className="w-6 h-6 text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
            {certification.title}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            {certification.provider}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 dark:text-gray-500">
              {certification.year}
            </span>
            {certification.credentials && (
              <a
                href={certification.credentials}
                className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View Credentials
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;