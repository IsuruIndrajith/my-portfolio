import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutPage from './Pages/Aboutpage/Aboutpage.jsx'
import ProjectPage from './Pages/Projects/Projects.jsx'
import SkillsPage from './Pages/Skills/Skills.jsx'
import EducationPage from './Pages/Education/Education.jsx'
import ExperiencePage from './Pages/Experience/Experience.jsx'
import ContactsPage from './Pages/Contacts/Contacts.jsx'
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/projects",
    element: <ProjectPage/>,
  },
  {
    path: "/skills",
    element: <SkillsPage/>,
  },
  {
    path: "/education",
    element: <EducationPage/>,
  },
  {
    path: "/experience",
    element: <ExperiencePage/>,
  },
  {
    path: "/contacts",
    element: <ContactsPage/>,
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
