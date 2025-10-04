import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Server, Database, Cloud } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description: 'React, React Native, HTML5, CSS3, JavaScript, Tailwind CSS'
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development', 
      description: 'Node.js, Express.js, Spring Boot, RESTful APIs'
    },
    {
      icon: <Database size={24} />,
      title: 'Database & Tools',
      description: 'PostgreSQL, MongoDB, Firebase, Git, Maven'
    },
    {
      icon: <Cloud size={24} />,
      title: 'DevOps & Cloud',
      description: 'Docker, Jenkins, AWS EC2, CI/CD, SonarQube'
    }
  ];

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
    <section id="about" className="about-section section">
      <div className="container">
        <motion.div
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate about building innovative solutions with modern technologies
            </p>
          </motion.div>

          <div className="about-grid">
            {/* About Text */}
            <motion.div className="about-text" variants={itemVariants}>
              <p className="about-description">
                A passionate Computer Engineer with hands-on experience in developing 
                full-stack web solutions and app-based software solutions. My expertise 
                spans across Node.js, Express.js, Spring Boot for backend development, 
                and React, React Native with Tailwind CSS for creating engaging frontends.
              </p>
              
              <p className="about-description">
                I have a strong foundation in DevOps practices, with practical experience 
                in setting up and maintaining CI/CD pipelines using tools like Docker, 
                Jenkins, SonarQube, and AWS web services. I'm always adapting to new 
                technologies while staying curious about innovative solutions.
              </p>

              <p className="about-description">
                Whether it's solving complex problems or exploring innovative solutions, 
                I approach every challenge with curiosity, discipline, and a desire to grow. 
                My strong communication skills and experience in group projects make me 
                an effective team collaborator.
              </p>

              <motion.div 
                className="about-actions"
                variants={itemVariants}
              >
                <a 
                  href="/assets/Isuru_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </motion.div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div className="skills-grid" variants={itemVariants}>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.1
                      }
                    }
                  }}
                >
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <h3 className="skill-title">{skill.title}</h3>
                  <p className="skill-description">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;