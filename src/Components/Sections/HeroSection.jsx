import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById('about').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Greeting */}
          <motion.p 
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="gradient-text">Isuru Indrajith</span>
          </motion.h1>

          {/* Title */}
          <motion.h2 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Full-Stack Developer & DevOps Enthusiast
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Node.js | Spring Boot | React | React Native <br/>
          💡 Building Scalable Applications & Systems <br/>
          🔧 Developing Backend Systems and Cloud Solutions <br/>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a 
              href="/assets/Isuru_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <Download size={18} />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.a 
              href="https://github.com/IsuruIndrajith" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/isuru-indrajith-387ab7278/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="mailto:isuruindrajith680@gmail.com"
              className="social-link"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
            </motion.a>
            <motion.a 
              href="https://medium.com/@isuruindrajith680"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                style={{ marginTop: '2px' }}
              >
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="hero-floating-elements">
          <motion.div 
            className="floating-element floating-element-1"
            animate={{ 
              y: [-20, 20, -20],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="floating-element floating-element-2"
            animate={{ 
              y: [20, -20, 20],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="floating-element floating-element-3"
            animate={{ 
              y: [-10, 15, -10],
              x: [-10, 10, -10]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="hero-scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="scroll-btn"
            whileHover={{ y: -2 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;