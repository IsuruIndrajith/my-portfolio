
import DownloadButton from "../../Components/Buttons/DowloadButton/DownloadButton";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Body from "../../Components/Body/Body";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Contacts.css";


function ContactsPage() {


  return (
      <div>
           <Header />
    <div className="connect-page-container">
       
        <Body>
          
              <div className="connect-page">
      <h1>Connect With Me</h1>
      <p>I'm always open to exciting collaborations and opportunities. Let's chat!</p>

      <div className="contact-links">
        <a href="https://github.com/IsuruIndrajith" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/isuru-indrajith-387ab7278/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="mailto:isuruindrajith680@gmail.com">
          <FaEnvelope /> Email Me
        </a>
      </div>

      <div className="download-resume">
        <a href="/assets/Isuru_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
          Download My Resume
        </a>
      </div>
      
    </div>
      </Body>
        
          </div>

          <Footer />
    </div>
  )
}

export default ContactsPage
