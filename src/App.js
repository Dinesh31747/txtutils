import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact'

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212121';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
    {/* <div id = "bg" style={{width:"95%", height:"95%", padding:'20px'}}> */}
    <div id = "gg">
    <Navbar title="Textils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div id = "bg" className="container my-3">
    <Routes>
      {/* Use <Route> instead of <Route path=""> */}
      {/* Set the default route to the home page */}
      <Route path='/' element={<HomePage mode = {mode} />} />
      <Route path="/home" element={<TextForm showAlert={showAlert} heading="Try Textils - word counter, character counter, remove extra spaces" mode={mode}/>} />
      <Route path="/about" element={<About mode={mode} />} />
      <Route path='/privacy' element={<PrivacyPolicy mode = {mode}/>}></Route>
      <Route path='/contact' element={<Contact mode = {mode}/>}/>
    </Routes>
    </div>
    <Footer/>
    </div>
    </Router>
    </>
  );
}

export default App;
