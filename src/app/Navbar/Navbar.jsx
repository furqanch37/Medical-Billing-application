import React from 'react';
import './mainnavbar.css';
import { FaSearch } from 'react-icons/fa';

const MainNavbar = ({ scrolled }) => {
  return (
    <div className={`main-navbar ${scrolled ? "scrolled-bg" : ""}`}>
      <div className="logo">
        <span className="icon">+</span>
        <span className="brand"><strong>Care</strong>Watch</span>
      </div>

    <div className='flexed-div'>
        <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Departments</a>
        <a href="#">Timetable</a>
        <a href="#">Features</a>
        <a href="#">Shortcodes</a>
        <a href="#">Post Types</a>
      </div>

      <div className="search">
        <button>
          <FaSearch />
        </button>
      </div>
    </div>
    </div>
  );
};

export default MainNavbar;
