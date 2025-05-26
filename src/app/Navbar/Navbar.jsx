import React, { useState } from 'react';
import './mainnavbar.css';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const MainNavbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={`main-navbar ${scrolled ? "scrolled-bg" : ""}`}>
      <div className="navbar-header">
        <div className="logo">
          <span className="icon">+</span>
          <span className="brand"><strong>Care</strong>Watch</span>
        </div>
        <div className="burger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div className={`flexed-div ${menuOpen ? 'show' : ''}`}>
        <div className="nav-links">
          <Link href="/" className='navLinkMain'>Home</Link>
          <Link href="/about" className='navLinkMain'>About</Link>
          <Link href="/ServicesPage" className='navLinkMain'>Services</Link>
          <Link href="/doctors" className='navLinkMain'>Doctors</Link>
          <Link href="/" className='navLinkMain'>Features</Link>
          <Link href="/contact" className='navLinkMain'>Contact</Link>
        </div>
        <div className="search">
          <button><FaSearch /></button>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
