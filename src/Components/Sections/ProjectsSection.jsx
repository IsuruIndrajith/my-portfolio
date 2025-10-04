import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Zap } from 'lucide-react';
import './ProjectsSection.css';

const ProjectsSection = ({ projects }) => {
  // Function to get appropriate icon based on URL
  const getLinkIcon = (url) => {
    if (url.includes('github.com')) {
      return <Github size={16} />;
    } else if (url.includes('linkedin.com')) {
      return <Linkedin size={16} />;
    } else {
      return <ExternalLink size={16} />;
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

  const cardVariants = {
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

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <motion.div
          className="projects-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={cardVariants}>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A showcase of my recent work and technical achievements
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card glass"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Project Header */}
                <div className="project-header">
                  <div className="project-number">
                    <span>0{project.id}</span>
                  </div>
                  <div className="project-status">
                    <Zap size={16} />
                    <span>Completed</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Features */}
                  <div className="project-features">
                    <h4>Key Features</h4>
                    <ul className="features-list">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="more-features">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="project-tech">
                    <h4>Tech Stack</h4>
                    <div className="tech-tags">
                      {project.techStack.slice(0, 6).map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 6 && (
                        <span className="tech-tag more-tech">
                          +{project.techStack.length - 6}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Footer */}
                <div className="project-footer">
                  <div className="project-links">
                    {project.links.map((link, idx) => (
                      <motion.a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {getLinkIcon(link.url)}
                        <span>{link.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="projects-cta"
            variants={cardVariants}
          >
            <p>Interested in collaborating on a project?</p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;