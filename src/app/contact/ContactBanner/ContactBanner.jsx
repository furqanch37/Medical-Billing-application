import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './ContactBanner.css';

const ContactBanner = () => {
  return (
    <div className="contact-banner">
      <div className="contact-left"></div>
      <div className="contact-form-container">
        <h2>Book an Appointment</h2>
        <div className="form-row">
          <div className="custom-select-contact">
            <select>
              <option>Select Departments</option>
            </select>
            <FaChevronDown className="dropdown-icon" />
          </div>
          <div className="custom-select-contact">
            <select>
              <option>Select Doctors</option>
            </select>
            <FaChevronDown className="dropdown-icon" />
          </div>
        </div>
        <div className="form-row">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Phone" />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Your Email" />
          <input type="date" />
        </div>
        <button className="appointment-button">Make an Appointment</button>
      </div>
    </div>
  );
};

export default ContactBanner;
