"use client";

import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaGlobe, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column footer-column-one">
          <h3>Contact Information</h3>
          <ul>
            <li><FaMapMarkerAlt className="footer-icon" /> 227 Marion street New York USA</li>
            <li><FaGlobe className="footer-icon" /> medical-clinic.cmsmasters.net</li>
            <li><FaEnvelope className="footer-icon" /> medical-clinic@mail.com</li>
            <li><FaPhone className="footer-icon" /> 1-888-333-444-222</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Doctors</h3>
          <ul>
            <li>Dr. Nick Sims</li>
            <li>Dr. Michael Linden</li>
            <li>Dr. Max Turner</li>
            <li>Dr. Amy Adams</li>
            <li>Dr. Julia Jameson</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Outpatient Surgery</li>
            <li>Cardiac Clinic</li>
            <li>Ophthalmology Clinic</li>
            <li>Gynaecological Clinic</li>
            <li>Outpatient Rehabilitation</li>
          </ul>
        </div>

        <div className="footer-column contact-form">
          <h3>Contact Us</h3>
          <form>
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          CareWatch - © 2025 / All Rights Reserved
        </p>
        <div className="footer-links">
          <a href="/about">About</a>
          <span>|</span>
          <a href="/contact">Contact us</a>
        </div>
        <div className="scroll-top">
          <button onClick={scrollToTop} aria-label="Scroll to top">&uarr;</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
