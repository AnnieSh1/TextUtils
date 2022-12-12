import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  //whether darkMode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled!" , "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazingggg!!!!!!';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now!!!!!';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!" , "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      {/* <Navbar title= "TextUtils" aboutText="About" /> */}
      {/* <Navbar/> */}
      {/* <BrowserRouter> */}
      <Navbar title= "TextUtils" mode={mode} tgleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">

      {/* {/* use <Routes> in place of <Switch/> */}
        {/* <Routes> 
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
        </Routes> */}
      
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
