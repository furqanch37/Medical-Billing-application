'use client';
import React, { useState, useEffect } from 'react';
import './navbar.css';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaChevronDown,
} from 'react-icons/fa';

const TopHeader = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="top-header">
      {isMobile && (
        <div className="toggle-btn" onClick={toggleDetails}>
          <FaChevronDown />
        </div>
      )}

      <div className={`left ${isMobile && !showDetails ? 'hidden' : ''}`}>
        <a href="#">FAQ</a>
        <a href="#">Book Appointment</a>
        <a href="#">Contacts</a>
        <span className="email">example@example.com</span>
      </div>

      <div className={`right ${isMobile && !showDetails ? 'hidden' : ''}`}>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaYoutube /></a>
      </div>
    </div>
  );
};

export default TopHeader;
