import React,{useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Landing from "./Landing";
import Home from "./Home";
import Navbar from "./Navbar.jsx";
import Form from "./Form";
import Chat from "./Chat";
import Boxes from "./Boxes";
import About from "./About";
import VedaMind from "./VedaMind";
import D from "./D";
function App() {
  
  return (
    <>
 
    <Navbar />
    <Boxes/>
    <Router>
      <Routes>
            <Route path="/Form" element={<Form />} />
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
           
            <Route path="/chat" element={<Chat/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/VedaMind" element={<VedaMind/>} />
        </Routes>
      </Router>
      
    </>
    
  )
}

export default App
