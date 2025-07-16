
import DownloadButton from "../../Components/Buttons/DowloadButton/DownloadButton";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Body from "../../Components/Body/Body";
import "./Skills.css";
import { skillsData } from "../../data/skillData";
import SkillCard from "../../Components/Skills/SkillCard/SkillCard";
import { useState } from "react";
import SkillsInfoCard from "../../Components/Skills/SkillsinfoCard/SkillsInfoCard";
import AchievementCard from "../../Components/Skills/AchievementCard/AchievementCard";
import { achievements } from "../../data/achievementData";

const SkillsPage = () => {

  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);

  return (
      <div>
           <Header />
    <div className="skills-page-container">
       
        <Body>
          <h5>Technical Proficiency</h5>

          <div className="skills-content">
            <div className="skills">

              {skillsData.map(item => (
                <SkillCard
                  key={item.title}
                  title={item.title}
                  iconUrl={item.icon}
                  isActive={selectedSkill.title === item.title}
                  onClick={() => setSelectedSkill(item)}
                />
              ))}
            </div>

            <div className="skills-info">
              <SkillsInfoCard
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
              />
            </div>

          
              
          </div>

          <h5>Achievements</h5>

          <div className="achievements-container">
  {achievements.map((item, index) => (
    <AchievementCard
      key={index}
      title={item.title}
      image={item.image}
      description={item.description}
      link={item.link}
    />
  ))}
</div>


          


        </Body>
        
          </div>

          <Footer />
    </div>
  )
}

export default SkillsPage
