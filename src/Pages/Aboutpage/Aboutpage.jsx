import { Github, Linkedin, Mail } from 'lucide-react';
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

          <div className="social-links" style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/IsuruIndrajith" target="_blank" rel="noopener noreferrer"
               style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem',
                       background: 'var(--glass-bg)', borderRadius: 'var(--radius-md)',
                       color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--glass-border)' }}>
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/isuru-indrajith-387ab7278/" target="_blank" rel="noopener noreferrer"
               style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem',
                       background: 'var(--glass-bg)', borderRadius: 'var(--radius-md)',
                       color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--glass-border)' }}>
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="mailto:isuruindrajith680@gmail.com"
               style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem',
                       background: 'var(--glass-bg)', borderRadius: 'var(--radius-md)',
                       color: 'var(--text-primary)', textDecoration: 'none', border: '1px solid var(--glass-border)' }}>
              <Mail size={20} /> Email
            </a>
          </div>

        </Body>
        
          </div>

          <Footer />
    </div>
  )
}

export default AboutPage
