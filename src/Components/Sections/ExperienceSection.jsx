import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Users, Building } from 'lucide-react';
import { experienceData } from '../../data/experience';
import './ExperienceSection.css';

const ExperienceSection = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const getSectionColor = (section) => {
    switch (section) {
      case 'Science & Technology':
        return { bg: 'rgba(99, 102, 241, 0.1)', border: '#6366f1' };
      case 'Education':
        return { bg: 'rgba(16, 185, 129, 0.1)', border: '#10b981' };
      default:
        return { bg: 'rgba(139, 92, 246, 0.1)', border: '#8b5cf6' };
    }
  };

  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <motion.div
          className="experience-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="section-subtitle">
              Leadership roles and collaborative experiences that shaped my professional journey
            </p>
          </motion.div>

          {/* Experience Grid */}
          <motion.div className="experience-grid" variants={containerVariants}>
            {experienceData.map((experience, index) => {
              const colors = getSectionColor(experience.section);
              return (
                <motion.div
                  key={index}
                  className="experience-card card"
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Experience Header */}
                  <div className="experience-header">
                    <div className="experience-logo">
                      <img 
                        src={experience.iconUrl} 
                        alt={experience.organization}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="experience-meta">
                      <div className="experience-time">
                        <Calendar size={16} />
                        <span>{experience.time}</span>
                      </div>
                      <div 
                        className="experience-section-badge"
                        style={{ 
                          backgroundColor: colors.bg, 
                          borderColor: colors.border 
                        }}
                      >
                        {experience.section}
                      </div>
                    </div>
                  </div>

                  {/* Experience Content */}
                  <div className="experience-content">
                    <h3 className="experience-position">{experience.position}</h3>
                    <div className="experience-organization">
                      <Building size={18} />
                      <span>{experience.organization}</span>
                    </div>
                    
                    {experience.details && (
                      <p className="experience-details">{experience.details}</p>
                    )}
                  </div>

                  {/* Experience Footer */}
                  <div className="experience-footer">
                    <div className="experience-type">
                      <Users size={16} />
                      <span>Committee Member</span>
                    </div>
                    <div className="experience-status">
                      <div className="status-indicator active"></div>
                      <span>Active</span>
                    </div>
                  </div>

                  {/* Decorative Line */}
                  <div 
                    className="experience-accent-line"
                    style={{ backgroundColor: colors.border }}
                  ></div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Experience Summary */}
          <motion.div className="experience-summary" variants={itemVariants}>
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-icon">
                  <Briefcase className="icon-accent" />
                </div>
                <div className="summary-content">
                  <h4>{experienceData.length}</h4>
                  <p>Organizations</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">
                  <Users className="icon-accent" />
                </div>
                <div className="summary-content">
                  <h4>Leadership</h4>
                  <p>Committee Roles</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">
                  <Calendar className="icon-accent" />
                </div>
                <div className="summary-content">
                  <h4>3+ Years</h4>
                  <p>Active Involvement</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;