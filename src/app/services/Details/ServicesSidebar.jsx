import React from 'react';
import { LuMapPin, LuMail, LuPhone } from 'react-icons/lu';
import './Details.css';

const ServicesSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section department">
        <h3>Our Services</h3>
        <ul>
          <li>Claims Management</li>
          <li>Revenue Cycle Optimization</li>
          <li>Insurance Verification</li>
          <li>Regulatory Compliance</li>
          <li>Patient Billing</li>
          <li>Accounts Receivable</li>
          <li>Practice Consultancy</li>
          <li className="active">Medical Billing Services</li>
        </ul>
      </div>

      <div className="sidebar-section hours">
        <h3>Office Hours</h3>
        <ul>
          <li>Monday - Friday: <span>9:00 AM – 6:00 PM</span></li>
          <li>Saturday: <span>10:00 AM – 2:00 PM</span></li>
          <li>Sunday: <span>Closed</span></li>
        </ul>
      </div>

      <div className="sidebar-section contact">
        <h3>Contact Us</h3>
        <p><LuMapPin /> 501 Care Plaza, Suite 204</p>
        <p><LuMail /> support@carewatchhealth.com</p>
        <p><LuPhone /> +1 (888) 555-0199</p>
      </div>
    </div>
  );
};

export default ServicesSidebar;
