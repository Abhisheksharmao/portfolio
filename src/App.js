import Home from "./home";
import Foot from "./foot";
import './App.css'
import abhishek_resume from './Abhishek_uxdesign_resume.pdf';

function App() {
  return (
    <div className="App"  style={{
      backgroundImage:'url("./img/anshu-a-C7syHGhUa44-unsplash.jpg")',
      backgroundSize: "contain",
      backgroundRepeat: "repeat",
      height:"auto",
      width:"100%"
    }} >
{/*       <style>{'body{background-image : url("./img/anshu-a-C7syHGhUa44-unsplash.jpg"); bakgroundSixe:"contain"; backgroundRepeat:"repeat";width:"100%"; height:"auto"}'}</style> */}

      <div className="top">
        <h1 style={{ color: "white" }}>Home</h1>

        <a
          href={abhishek_resume}
          download="Abhishek_resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={{ color: "white" }}><h1>Resume</h1> </button>
        </a>
      </div>

      <Home />
      <Foot></Foot>
    </div>
  );
}

export default App;
