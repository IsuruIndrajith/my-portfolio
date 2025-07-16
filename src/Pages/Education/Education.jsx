
import DownloadButton from "../../Components/Buttons/DowloadButton/DownloadButton";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Body from "../../Components/Body/Body";
import "./Education.css";
import EducationCard from "../../Components/Education/EducationCard";
import { educationData } from "../../data/educationData";

function EducationPage() {


  return (
      <div>
           <Header />
    <div className="edu-page-container">
       
        <Body>
          
          <h5>Education</h5>

          <div className="education-container">
  {educationData.map((item, index) => (
    <EducationCard
      key={index}
      degree={item.degree}
      institution={item.institution}
      year={item.year}
      details={item.details}
    />
  ))}
</div>
      </Body>
        
          </div>

          <Footer />
    </div>
  )
}

export default EducationPage
