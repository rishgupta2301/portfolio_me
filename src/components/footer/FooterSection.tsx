import React from 'react';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';
import ContactForm from '../forms/ContactForm';
import { motion } from 'framer-motion';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FooterLinks />
          <FooterSocial />
          <ContactForm />
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Rishabh Gupta. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;