import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
];

const FooterLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <motion.li 
            key={link.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <a 
              href={link.href}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <ChevronRight size={16} />
              {link.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FooterLinks;