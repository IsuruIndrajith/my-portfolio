
import Body from "./Components/Body/Body"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import DownloadButton from "./Components/Buttons/DowloadButton/DownloadButton"

function App() {


  return (
    <div>
      <Header />
      
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
