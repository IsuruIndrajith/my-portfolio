import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  Twitter,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'isuruindrajith680@gmail.com',
      href: 'mailto:isuruindrajith680@gmail.com'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Sri Lanka',
      href: null
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+94 70 123 4567',
      href: 'tel:+94701234567'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      href: 'https://github.com/IsuruIndrajith',
      color: '#333'
    },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/isuru-indrajith-387ab7278/',
      color: '#0077b5'
    },
    {
      icon: <Twitter size={20} />,
      name: 'Twitter',
      href: '#',
      color: '#1da1f2'
    },
    {
      icon: <Mail size={20} />,
      name: 'Email',
      href: 'mailto:isuruindrajith680@gmail.com',
      color: '#ea4335'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission (replace with actual form handling)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <motion.div
          className="contact-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="section-subtitle">
              Ready to work together? Let's discuss your next project or just say hello!
            </p>
          </motion.div>

          <div className="contact-grid">
            {/* Contact Information */}
            <motion.div className="contact-info" variants={itemVariants}>
              <div className="contact-info-header">
                <h3>Let's Connect</h3>
                <p>
                  I'm always interested in new opportunities and collaborations. 
                  Whether you have a project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>
              </div>

              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-detail-item"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="detail-icon">
                      {info.icon}
                    </div>
                    <div className="detail-content">
                      <h4>{info.title}</h4>
                      {info.href ? (
                        <a href={info.href} className="detail-link">
                          {info.value}
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: social.color,
                        color: 'white'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="contact-form-wrapper" variants={itemVariants}>
              <div className="form-header">
                <h3>Send a Message</h3>
                <p>Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input focus-ring"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input focus-ring"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input focus-ring"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea focus-ring"
                    placeholder="Tell me about your project or just say hello..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                {/* Submit Status */}
                {submitStatus && (
                  <motion.div
                    className={`submit-status ${submitStatus}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <CheckCircle size={20} />
                        <span>Message sent successfully! I'll get back to you soon.</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle size={20} />
                        <span>Something went wrong. Please try again or contact me directly.</span>
                      </>
                    )}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div className="contact-cta" variants={itemVariants}>
            <div className="cta-content">
              <h3>Ready to start your next project?</h3>
              <p>
                Let's work together to bring your ideas to life. 
                I'm excited to hear about your vision and help make it a reality.
              </p>
              <div className="cta-actions">
                <a href="#projects" className="btn btn-secondary">
                  View My Work
                </a>
                <a href="/assets/Isuru_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;