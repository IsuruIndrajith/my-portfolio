import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Heart,
  Code,
  Coffee,
  MapPin
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/IsuruIndrajith',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/isuru-indrajith-387ab7278/',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:isuruindrajith680@gmail.com',
      label: 'Email'
    },
    {
      icon: <Twitter size={20} />,
      href: 'https://x.com/IsuruIndrajith_',
      label: 'Twitter'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Main Footer Content */}
          <div className="footer-main">
            {/* Brand Section */}
            <motion.div 
              className="footer-brand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="brand-name">
                <span className="text-gradient">Isuru Indrajith</span>
              </h3>
              <p className="brand-tagline">
                Computer Engineer & Full Stack Developer
              </p>
              <div className="brand-location">
                <MapPin size={16} />
                <span>Sri Lanka</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="footer-links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4>Quick Links</h4>
              <ul className="links-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="footer-social"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4>Connect With Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <p className="social-text">
                Let's build something amazing together!
              </p>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div 
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>
                  © {currentYear} Isuru Indrajith Edirisinghe. All rights reserved.
                </p>
              </div>
              <div className="footer-made-with">
                <p>
                  Made with <Heart size={14} className="heart-icon" /> and 
                  <Coffee size={14} className="coffee-icon" /> using 
                  <Code size={14} className="code-icon" /> React
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
