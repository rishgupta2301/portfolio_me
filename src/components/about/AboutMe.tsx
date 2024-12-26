import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket } from 'lucide-react';
import SkillCard from './SkillCard';

const AboutMe = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Hi, I'm Rishabh Gupta, a passionate Frontend Developer with a keen eye for creating 
            beautiful and functional web experiences. I specialize in building modern web applications 
            using cutting-edge technologies and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <SkillCard 
            icon={<Code2 className="w-8 h-8" />}
            title="Development"
            description="Crafting clean, efficient code with modern web technologies"
            delay={0}
          />
          <SkillCard 
            icon={<Palette className="w-8 h-8" />}
            title="Design"
            description="Creating intuitive and visually appealing user interfaces"
            delay={0.2}
          />
          <SkillCard 
            icon={<Rocket className="w-8 h-8" />}
            title="Performance"
            description="Optimizing applications for speed and efficiency"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe