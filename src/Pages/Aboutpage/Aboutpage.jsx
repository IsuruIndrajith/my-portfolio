
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
          <div className="button-wrapper">
        <DownloadButton/>
          </div>
            <p>Full Stack Developer<br />

⚡Full-Stack Developer & DevOps Enthusiast 🚀Node.js SpringBoot React | React Native;💡 Building Scalable Applications & Systems;🔧 Developing Backend Systems and Cloud Solutions</p>
     
        </Body>
        
          </div>

          <Footer />
    </div>
  )
}

export default AboutPage
