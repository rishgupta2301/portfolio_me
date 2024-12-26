import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socials = [
  { icon: <Github size={20} />, href: 'https://github.com/rishgupta2301', label: 'GitHub' },
  { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/rishabh-gupta-432a98195/', label: 'LinkedIn' },
  { icon: <Twitter size={20} />, href: 'https://x.com/rizzabhgupta', label: 'Twitter' },
  { icon: <Mail size={20} />, href: 'mailto:guptarishabh1122@gmail.com', label: 'Email' },
];

const FooterSocial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
      <div className="flex flex-wrap gap-4">
        {socials.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            aria-label={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
      <p className="mt-4 text-sm">
        Let's connect and build something amazing together!
      </p>
    </motion.div>
  );
};

export default FooterSocial;