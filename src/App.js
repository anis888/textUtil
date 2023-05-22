// import logo from './logo.svg';
import {useState } from 'react';
import './App.css';
import React from "react";
// import ReactDOM from "react-dom/client";
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Error from './components/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
         setAlert(null);},1500
    );
}
  
  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to analyze below" />} />
        <Route exact path="/About" element={<About />} />
        <Route path='*'  element={<Error/>}/>
      </Routes>
    </Router>
     <Alert alert={alert}/>     
    </>
  );
}

export default App;
