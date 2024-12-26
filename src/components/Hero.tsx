import React from 'react';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleDownload = () => {
    // Replace this URL with the direct download URL
    const resumeUrl = 'https://drive.google.com/uc?id=1WYcFxztx_U3PonR2XlW6hL4iu13cuJv6&export=download';
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'Resume.pdf'; // Suggests a filename for the download
    anchor.click();
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden dark:bg-gray-900">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-10 dark:opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Rishabh Gupta
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Frontend Developer
          </motion.p>
          <motion.p
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about creating beautiful and performant web applications with modern technologies.
          </motion.p>
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: <Github size={24} />, href: 'https://github.com/rishgupta2301', label: 'GitHub' },
              { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/rishabh-gupta-432a98195/', label: 'LinkedIn' },
              { icon: <Mail size={24} />, href: 'mailto:your.guptarishabh1122@gmail.com', label: 'Email' },
              { icon: <FileDown size={24} />, onClick: handleDownload, label: 'Download Resume' }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={item.onClick}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={item.label}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;