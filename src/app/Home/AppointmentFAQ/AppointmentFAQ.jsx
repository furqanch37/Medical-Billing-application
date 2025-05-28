'use client';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import "./AppointmentFAQ.css";

const AppointmentForm = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are your regular office hours?",
      answer: "Our office hours are Monday to Friday from 8:00 AM to 6:00 PM EST. For urgent billing inquiries, support is available 24/7."
    },
    {
      question: "What is your appointment policy?",
      answer: "You can book appointments online or by calling us. We recommend booking in advance for personalized support sessions."
    },
    {
      question: "What should I do if I’m ill?",
      answer: "Reach out to your healthcare provider. For insurance or billing concerns related to your treatment, CareWatch is ready to assist."
    },
    {
      question: "How do I get a refill on my prescription?",
      answer: "Request a refill via your healthcare provider. For billing-related questions, our consultants are here to help."
    },
  ];

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
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            {faq.question} <span>{activeIndex === index ? '-' : '+'}</span>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentForm;
