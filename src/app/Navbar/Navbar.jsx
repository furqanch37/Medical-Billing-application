'use client';
import React, { useState } from 'react';
import './mainnavbar.css';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const MainNavbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`main-navbar ${scrolled ? 'scrolled-bg' : ''}`}>
      <div className="logo">
        <span className="icon">+</span>
        <span className="brand"><strong>Care</strong>Watch</span>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`flexed-div ${menuOpen ? 'active' : ''}`}>
        <div className="nav-links">
          <Link href="/" className='navLinkMain' onClick={closeMenu}>Home</Link>
          <Link href="/about" className='navLinkMain' onClick={closeMenu}>About</Link>
          <Link href="/ServicesPage" className='navLinkMain' onClick={closeMenu}>Services</Link>
          <Link href="/doctors" className='navLinkMain' onClick={closeMenu}>Doctors</Link>
          <Link href="/" className='navLinkMain' onClick={closeMenu}>Features</Link>
          <Link href="/#appointment" className="navLinkMain" onClick={closeMenu}>
  Faqs
</Link>

          
        </div>
        <div className="search">
          <button><Link href="/contact" className='navLinkMain' onClick={closeMenu}>Contact</Link></button>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
