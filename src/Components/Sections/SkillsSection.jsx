import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Cloud, 
  Smartphone, 
  Wrench,
  Zap,
  TrendingUp 
} from 'lucide-react';
import './SkillsSection.css';

const SkillsSection = () => {
  console.log('SkillsSection rendering');

  const skillCategories = {
    frontend: {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90, experience: '2+ years' },
        { name: 'React Native', level: 85, experience: '1.5+ years' },
        { name: 'JavaScript (ES6+)', level: 88, experience: '2+ years' },
        { name: 'TypeScript', level: 75, experience: '1+ year' },
        { name: 'HTML5 & CSS3', level: 95, experience: '3+ years' },
        { name: 'Tailwind CSS', level: 90, experience: '1.5+ years' }
      ]
    },
    backend: {
      icon: <Server size={24} />,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85, experience: '2+ years' },
        { name: 'Express.js', level: 88, experience: '2+ years' },
        { name: 'Spring Boot', level: 80, experience: '1.5+ years' },
        { name: 'Java', level: 82, experience: '2+ years' },
        { name: 'RESTful APIs', level: 90, experience: '2+ years' },
  
      ]
    },
    database: {
      icon: <Database size={24} />,
      title: 'Database & Storage',
      skills: [
        { name: 'PostgreSQL', level: 85, experience: '1.5+ years' },
        { name: 'MongoDB', level: 80, experience: '1+ year' },
        { name: 'Firebase', level: 88, experience: '2+ years' },
        { name: 'Redis', level: 70, experience: '6+ months' },
        { name: 'SQL', level: 90, experience: '2+ years' }
      ]
    },
    devops: {
      icon: <Cloud size={24} />,
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', level: 85, experience: '1+ year' },
        { name: 'Jenkins', level: 82, experience: '1+ year' },
        { name: 'AWS EC2', level: 78, experience: '1+ year' },
        { name: 'CI/CD Pipelines', level: 85, experience: '1+ year' },
        { name: 'SonarQube', level: 80, experience: '1+ year' },
        { name: 'NGINX', level: 75, experience: '1+ year' }
      ]
    },
    mobile: {
      icon: <Smartphone size={24} />,
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 85, experience: '1.5+ years' },
        { name: 'Expo', level: 88, experience: '1.5+ years' },
        { name: 'Flutter', level: 70, experience: '1+ year' },
        { name: 'Mobile UI/UX', level: 80, experience: '1+ year' }
      ]
    },
    tools: {
      icon: <Wrench size={24} />,
      title: 'Tools & Other',
      skills: [
        { name: 'Git & GitHub', level: 90, experience: '2+ years' },
        { name: 'Maven', level: 80, experience: '1.5+ years' },
        { name: 'Postman', level: 88, experience: '2+ years' },
        { name: 'VS Code', level: 95, experience: '3+ years' },
        { name: 'Figma', level: 75, experience: '1+ year' }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 0.2
      }
    })
  };

  return (
    <section id="skills" className="skills-section section">
      <div className="container" style={{ padding: '0 2rem' }}>
        <motion.div
          className="skills-content"
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="section-subtitle">
              Expertise across the full development stack with hands-on experience
            </p>
          </motion.div>

          {/* All Skills Grid */}
          <motion.div className="all-skills-display" variants={itemVariants}>
            {Object.entries(skillCategories).map(([categoryKey, category], categoryIndex) => (
              <motion.div
                key={categoryKey}
                className="skills-category"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="category-title">
                      {category.title}
                    </h3>
                    <p className="category-count">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>

                <div className="skills-grid">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item card"
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.03 
                      }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="skill-info">
                        <div className="skill-header">
                          <h4 className="skill-name">{skill.name}</h4>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                        <p className="skill-experience">{skill.experience}</p>
                      </div>
                      
                      <div className="skill-progress">
                        <div className="progress-bar">
                          <motion.div
                            className="progress-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                              duration: 0.8,
                              ease: 'easeOut',
                              delay: 0.2
                            }}
                          />
                        </div>
                      </div>

                      <div className="skill-badge">
                        <TrendingUp size={16} />
                        <span>Proficient</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div className="skills-summary" variants={itemVariants}>
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-icon">
                  <Zap className="icon-accent" />
                </div>
                <div className="summary-content">
                  <h4>2+ Years</h4>
                  <p>Development Experience</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">
                  <Code className="icon-accent" />
                </div>
                <div className="summary-content">
                  <h4>15+ Projects</h4>
                  <p>Completed Successfully</p>
                </div>
              </div>
              <div className="summary-item">
                <div className="summary-icon">
                  <TrendingUp className="icon-accent" />
                </div>
                <div className="summary-content">
                  <h4>Always Learning</h4>
                  <p>New Technologies</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;