import React from 'react'
import './SkillsInfoCard.css'

const SkillsInfoCard = ({ heading, skills}) => {
    return (
        
        <div className='skills-info-card'>
            <h6>{heading}</h6>

            <div className='skills-info-content'>
              {skills.map((item, index) => (
                  <React.Fragment key={`skill-${index}`}>
                      <div className='skills-info'>
                          <p>{item.skill}</p>
                          <p className="percentage">{item.percentage}</p>
                      </div>

                      <div className='skills-progress-bar'>
                          <div className='skills-progress' style={{ width: item.percentage }}/>
                      </div>
                    </React.Fragment>
              ))}
            </div>

        </div>
    );
};

export default SkillsInfoCard
