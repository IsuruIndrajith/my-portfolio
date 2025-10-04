import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Trophy, Star } from 'lucide-react';
import { achievements } from '../../data/achievementData';
import './AchievementsSection.css';

const AchievementsSection = () => {
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
    <section id="achievements" className="achievements-section section">
      <div className="container">
        <motion.div
          className="achievements-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              <span className="text-gradient">Achievements</span> & Recognition
            </h2>
            <p className="section-subtitle">
              Milestones that showcase my journey of continuous learning and professional growth
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div className="achievements-grid" variants={containerVariants}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Achievement Image */}
                <div className="achievement-image">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="achievement-badge">
                    <Trophy size={20} />
                  </div>
                </div>

                {/* Achievement Content */}
                <div className="achievement-content">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                  
                  {/* Achievement Link */}
                  {achievement.link && (
                    <motion.a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-link"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={16} />
                      <span>View Details</span>
                    </motion.a>
                  )}
                </div>

                {/* Decorative Elements */}
                <div className="achievement-decorations">
                  <Star className="star star-1" size={12} />
                  <Star className="star star-2" size={10} />
                  <Star className="star star-3" size={14} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Section Summary */}
          <motion.div className="achievements-summary" variants={itemVariants}>
            <div className="summary-content">
              <div className="summary-item">
                <Award className="summary-icon" />
                <h4>{achievements.length}</h4>
                <p>Total Achievements</p>
              </div>
              <div className="summary-item">
                <Trophy className="summary-icon" />
                <h4>Winner</h4>
                <p>Yarl Xtreme 2024</p>
              </div>
              <div className="summary-item">
                <Star className="summary-icon" />
                <h4>Global Rank</h4>
                <p>IEEE Xtreme 18.0</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;