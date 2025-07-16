
import DownloadButton from "../../Components/Buttons/DowloadButton/DownloadButton";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Body from "../../Components/Body/Body";
import "./Experience.css";
import { experienceData } from "../../data/experience";
import ExperienceCard from "../../Components/ExperienceCard/ExperienceCard";


function ExperiencePage() {


  return (
      <div>
           <Header />
      <div className="exp-page-container">
       
        <Body>
           <h1>Experience</h1>
          {experienceData.map((item, index) => (
            <ExperienceCard
              key={index}
              position={item.position}
              organization={item.organization}
              time={item.time}
              iconUrl={item.iconUrl}
              section={item.section}
              details={ item.details}
            
            />
          )) }

      </Body>
        
          </div>

          <Footer />
    </div>
  )
}

export default ExperiencePage
