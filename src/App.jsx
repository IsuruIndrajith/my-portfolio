
import Body from "./Components/Body/Body"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import './index.css';
import DownloadButton from "./Components/Buttons/DowloadButton/DownloadButton";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <div>
      <Header />
      {/* <img src={bg} className="bg" alt="background image" /> */}
      
        <div className="home-page-container">
          <div className="bg">
        </div>
      </div>
      
      {/* following is including props handling */}
    

        <Footer />
    </div>
  )
}

export default App
