import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const FooterNewsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <h3 className="text-xl font-semibold mb-4 text-white">Stay Updated</h3>
      <p className="mb-4 text-sm">
        Subscribe to my newsletter for the latest updates on projects and tech articles.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </motion.div>
        <motion.button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Subscribe</span>
          <Send size={16} />
        </motion.button>
      </form>
    </motion.div>
  );
};

export default FooterNewsletter;