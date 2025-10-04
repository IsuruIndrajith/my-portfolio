import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

// Import all components directly for better navbar detection
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HeroSection from './Components/Sections/HeroSection';
import AboutSection from './Components/Sections/AboutSection';
import SkillsSection from './Components/Sections/SkillsSection';
import ProjectsSection from './Components/Sections/ProjectsSection';
import AchievementsSection from './Components/Sections/AchievementsSection';
import EducationSection from './Components/Sections/EducationSection';
import ExperienceSection from './Components/Sections/ExperienceSection';
import ContactSection from './Components/Sections/ContactSection';

// Import data
import projects from './data/projectsData';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
  };

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Intersection Observer for active section detection - Fixed
  useEffect(() => {
    const observerOptions = {
      root: null,

      rootMargin: '-10% 0px -85% 0px', // Adjust to favor the top of sections
      threshold: [0.1, 0.5, 0.8]
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          const sectionId = entry.target.id;
          if (sectionId) {
            setActiveSection(sectionId);
            // Update URL hash without scrolling
            window.history.replaceState(null, null, `#${sectionId}`);
          }
        }
      });
    }, observerOptions);

    // Immediate observation of sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <main style={{ marginTop: '70px' }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection projects={projects} />
        <AchievementsSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
