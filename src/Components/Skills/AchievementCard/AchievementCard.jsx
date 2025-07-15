import React from 'react';
import './AchievementCard.css';

const AchievementCard = ({ image, title, description, link }) => {
  return (
    <div className="achievement-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View More</a>}
    </div>
  );
};

export default AchievementCard;
