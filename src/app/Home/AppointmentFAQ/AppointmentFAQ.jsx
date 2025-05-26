import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import "./AppointmentFAQ.css";

const AppointmentForm = () => {
  return (
    <div className="appointment-container">
      <div className="form-section">
        <h2 className='Heading-title'>Book an Appointment</h2>
        <form className="form">
          <div className="row">
            <div className="custom-select-wrapper">
              <select className="custom-select">
                <option>Select Departments</option>
              </select>
              <FaChevronDown className="select-icon" />
            </div>
            <div className="custom-select-wrapper">
              <select className="custom-select">
                <option>Select Doctors</option>
              </select>
              <FaChevronDown className="select-icon" />
            </div>
          </div>
          <div className="row">
            <input className="input1" type="text" placeholder="Your Name" />
            <input className="input1" type="text" placeholder="Phone" />
          </div>
          <div className="row">
            <input className="input1" type="email" placeholder="Your Email" />
            <input className="input1" type="date" />
          </div>
          <button type="submit" className="button">Make an Appointment</button>
        </form>
      </div>

      <div className="faq-section">
        <h2 className="faq-title">FAQ</h2>
        <h3 className='faq-title-1'>Have some Questions?</h3>
        <div className="faq-item">What are your regular office hours? <span>+</span></div>
        <div className="faq-item">What is your appointment policy? <span>+</span></div>
        <div className="faq-item">What should I do if I’m ill? <span>+</span></div>
        <div className="faq-item">How do I get a refill on my prescription? <span>+</span></div>
      </div>
    </div>
  );
};

export default AppointmentForm;
