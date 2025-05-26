import React, { useState } from 'react';
import './mainnavbar.css';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const MainNavbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={`main-navbar ${scrolled ? "scrolled-bg" : ""}`}>
      <div className="logo">
        <span className="icon">+</span>
        <span className="brand"><strong>Care</strong>Watch</span>
      </div>

      {/* Burger Icon */}
      <div className="burger-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`flexed-div ${menuOpen ? "show-menu" : ""}`}>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Departments</a>
          <a href="#">Timetable</a>
          <a href="#">Features</a>
          <a href="#">Shortcodes</a>
          <a href="#">Post Types</a>
        </div>

        <div className="search">
          <button><FaSearch /></button>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
