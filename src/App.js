import React,{ useState } from "react";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from './components/Navbar' ;
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500)
  }
  const toggleMode= () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils - Dark mode";
      // setInterval(() => {
      //   document.title="TextUtil is amazing";
      // },2000);
      // setInterval(() => {
      //   document.title="Download and Install TextUtil now";
      // },1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils - Light mode";
    }
  }
  return (
    <>
    <Navbar title="Textutils" aboutText="About US" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode}/>
      </div>

    {/* <Router>
      <Navbar title="Textutils" aboutText="About US" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="about" element={<About />}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode}/>}>  
          </Route>
        </Routes>
      </div>
      </Router> */}
    </>
  );
}

export default App;
