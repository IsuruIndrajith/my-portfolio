
import Body from "./Components/Body/Body"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import './index.css';
import DownloadButton from "./Components/Buttons/DowloadButton/DownloadButton"
import bg from './assets/images/bg.jpg';

function App() {


  return (
    <div>
      <Header />
      {/* <img src={bg} className="bg" alt="background image" /> */}
      <div className="bg"></div>
      
      {/* following is including props handling */}
      <Body>
        <h1>Welcome to My Portfolio</h1>
        <h2>About Me</h2>
        <DownloadButton/>
         <p>Welcome to my portfolio! I am a passionate web developer.</p>
      </Body>
        <Footer />
    </div>
  )
}

export default App
