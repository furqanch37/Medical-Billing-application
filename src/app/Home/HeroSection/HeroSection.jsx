import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-subtitle">Entrust your health our doctors</p>
          <h1 className="hero-title">
            Medical services that<br />
            you can trust
          </h1>
          <div className="hero-buttons">
            <button className="hero-btn filled">Make an Appointment</button>
            <button className="hero-btn outlined">View Departments</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
