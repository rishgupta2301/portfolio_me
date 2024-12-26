import React from 'react';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';
import ContactForm from '../forms/ContactForm';
import { motion } from 'framer-motion';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
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
          <p>&copy; {currentYear} John Doe. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;