import React from 'react'
import "./ExperienceCard.css"

const ExperienceCard = ({ iconUrl, position, organization, time, section, details }) => {
  return (
    <div className='experience-card'>
         <div className="org-icon">
              <img src={iconUrl} alt={organization} />
          </div>
          <h3>{position}</h3>
          <h4>{organization}</h4>
          <p className='time'>{ time}</p>
          <p className='section'>{section}</p>
          <p className='details'> { details}</p>
    </div>
  )
}

export default ExperienceCard
