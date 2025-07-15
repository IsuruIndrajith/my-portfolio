// src/Components/ProjectCard/ProjectCard.jsx

import React from "react";
// import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <h4>✅ Key Features:</h4>
      <ul>
        {project.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      <h4>🔧 Tech Stack:</h4>
      <p>{project.techStack.join(" | ")}</p>

      <div className="project-links">
        {project.links.map((link, idx) => (
          <p key={idx}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              🔗 {link.label}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
