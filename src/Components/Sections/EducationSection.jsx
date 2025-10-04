import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationData } from '../../data/educationData';
import './EducationSection.css';

const EducationSection = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="education" className="education-section section">
      <div className="container">
        <motion.div
          className="education-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              Educational <span className="text-gradient">Journey</span>
            </h2>
            <p className="section-subtitle">
              My academic path and the foundations that shaped my technical expertise
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="education-timeline">
            {educationData.map((education, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Timeline Connector */}
                <div className="timeline-connector">
                  <div className="timeline-dot">
                    <GraduationCap size={20} />
                  </div>
                  {index < educationData.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>

                {/* Education Card */}
                <div className="education-card card">
                  <div className="education-header">
                    <div className="education-icon">
                      <GraduationCap size={24} />
                    </div>
                    <div className="education-meta">
                      <div className="education-year">
                        <Calendar size={16} />
                        <span>{education.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="education-content">
                    <h3 className="education-degree">{education.degree}</h3>
                    <div className="education-institution">
                      <MapPin size={16} />
                      <span>{education.institution}</span>
                    </div>
                    
                    {education.details && (
                      <div className="education-details">
                        <Award size={16} />
                        <span>{education.details}</span>
                      </div>
                    )}
                  </div>

                  {/* Progress indicator for current education */}
                  {index === 0 && (
                    <div className="education-progress">
                      <div className="progress-label">
                        <span>Current Progress</span>
                        <span>75%</span>
                      </div>
                      <div className="progress-bar">
                        <motion.div
                          className="progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: '75%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Summary */}
          <motion.div className="education-summary" variants={itemVariants}>
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-icon">
                  <GraduationCap className="icon-accent" />
                </div>
                <div className="summary-content">
                  <h4>Current GPA</h4>
                  <p>3.07 / 4.0</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">
                  <Calendar className="icon-accent" />
                </div>
                <div className="summary-content">
                  <h4>Expected Graduation</h4>
                  <p>2026</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">
                  <Award className="icon-accent" />
                </div>
                <div className="summary-content">
                  <h4>A/L Results</h4>
                  <p>2A, 1B Passes</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;