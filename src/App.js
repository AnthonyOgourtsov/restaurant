import React from 'react'
import './App.css';
import Navbar from "./components/pages/Navbar"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/pages/Home"
import Menu from "./components/pages/Menu"
import Contact from "./components/pages/Contact"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
  </Router>
  );
}

export default App;
