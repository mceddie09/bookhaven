import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import logo from "../Assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  // Toggle the menu open or close
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
<nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="navbar-title">Book Haven Bookstore</span>
      </div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/custom" className="nav-link">Community</Link></li>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
