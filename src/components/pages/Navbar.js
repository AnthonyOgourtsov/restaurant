import "../styling/Navbar.css";
import { Link } from "react-router-dom";
import React from 'react'

const Navbar = () => {

  return (
    <div className="navbar">      
     
            
          <ul className="navbar-links">
            <li className="navbar-link">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-link">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="navbar-link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
   
    </div>
  );
};

export default Navbar;

