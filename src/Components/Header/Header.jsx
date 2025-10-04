import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Header.css';

function Header({ darkMode, toggleDarkMode, activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="nav container">
        {/* Logo */}
        <motion.div className="nav-brand" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <span className="gradient-text">Isuru Indrajith</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <motion.a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.slice(1) ? 'nav-link-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                    setActiveSection(item.href.slice(1));
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                </motion.a>
              </li>
            ))}
          </ul>
          {/* Dark Mode Toggle */}
          <motion.button
            className="theme-toggle"
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>

        {/* Mobile Menu Controls */}
        <div className="nav-mobile">
          {/* Dark Mode Toggle for Mobile */}
          <motion.button
            className="theme-toggle"
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          {/* Hamburger Menu Button */}
          <motion.button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        {/* Mobile Menu */}
        <motion.div
          className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}
          initial={{ x: '100%' }}
          animate={{ x: isMenuOpen ? 0 : '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          <ul className="mobile-nav-links">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: isMenuOpen ? 0 : 50, opacity: isMenuOpen ? 1 : 0 }}
                transition={{ delay: isMenuOpen ? index * 0.1 : 0, duration: 0.3 }}
              >
                <a
                  href={item.href}
                  className={`mobile-nav-link ${activeSection === item.href.slice(1) ? 'mobile-nav-link-active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                    setActiveSection(item.href.slice(1));
                  }}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  );
}

export default Header;