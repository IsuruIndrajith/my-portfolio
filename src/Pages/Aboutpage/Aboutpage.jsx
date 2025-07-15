
import DownloadButton from "../../Components/Buttons/DowloadButton/DownloadButton";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Body from "../../Components/Body/Body";
import "./Aboutpage.css";


function AboutPage() {


  return (
      <div>
           <Header />
    <div className="about-page-container">
       
      <Body>
        <h1>Welcome to My Portfolio</h1>
        <h2>About Me</h2>
        <DownloadButton/>
         <p>A passionate Computer engineer with hands on experience in developing Full stack web solutions and developing app based software solutions. handling Node js, express js, spring boot are core-skills in developing backends with improved frontend skills of react, react native and using tailwind css. <br/>

A strong foundation in DevOps practices, with practical experience in setting up and maintaining CI/CD pipelines and related tech stacks like, Docker, jenkins, SonarQube and the use of AWS web services when needed. Always adapting to new updates and the technologies while eager to learn new tech stacks with continuous searching. Better communication skills and contribution on group projects are core skills within me.
 Whether it's solving complex problems or exploring innovative solutions, I approach every challenge with curiosity, discipline, and a desire to grow.</p>
      </Body>
        
          </div>

          <Footer />
    </div>
  )
}

export default AboutPage
