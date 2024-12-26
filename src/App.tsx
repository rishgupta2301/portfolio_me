import React from 'react';
import { ThemeProvider } from './components/theme/ThemeContext';
import ThemeToggle from './components/theme/ThemeToggle';
import Navbar from './components/navigation/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/about/AboutMe';
import Skills from './components/skills/Skills';
import Timeline from './components/Timeline';
import Education from './components/Education';
import Projects from './components/Projects';
import FooterSection from './components/footer/FooterSection';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <ThemeToggle />
        <main id="home">
          <Hero />
          <AboutMe />
          <Skills />
          <Timeline />
          <Education />
          <Projects />
          <FooterSection />
        </main>
      </div>
    </ThemeProvider>
  );
}