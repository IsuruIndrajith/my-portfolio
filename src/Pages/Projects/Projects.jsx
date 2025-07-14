
import DownloadButton from "../../Components/Buttons/DowloadButton/DownloadButton";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Body from "../../Components/Body/Body";
import "./Projects.css";
import ProjectCard from "../../Components/ProjectCard.jsx";
import projects from "../../data/projectsData";


function ProjectPage() {


  return (
      <div>
           <Header />
      <div className="project-page-container">
     
        <Body>
          <h1>Projects and Hands-on Experience</h1>

        {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Body>
        
          </div>

          <Footer />
    </div>
  )
}

export default ProjectPage
