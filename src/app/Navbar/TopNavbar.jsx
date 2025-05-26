'use client';
import React, { useState } from 'react';
import './navbar.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaChevronDown } from 'react-icons/fa';

const TopHeader = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="top-header">
      <div className="toggle-btn" onClick={toggleDetails}>
        <FaChevronDown />
      </div>

      <div className={`left ${showDetails ? 'show' : ''}`}>
        <a href="#">FAQ</a>
        <a href="#">Book Appointment</a>
        <a href="#">Contacts</a>
        <span className="email">example@example.com</span>
      </div>

      <div className={`right ${showDetails ? 'show' : ''}`}>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaYoutube /></a>
      </div>
    </div>
  );
};

export default TopHeader;
