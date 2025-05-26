import React from 'react'
import { LuMapPin, LuMail, LuPhone } from 'react-icons/lu';
import "./Details.css";
const ServicesSidebar = () => {
  return (
   <div className="sidebar">
        <div className="sidebar-section department">
          <h3>Our Departments</h3>
          <ul>
            <li>Laboratory Analysis</li>
            <li>Pediatric Clinic</li>
            <li>Laryngological Clinic</li>
            <li>Outpatient Rehabilitation</li>
            <li>Gynaecological Clinic</li>
            <li>Ophthalmology Clinic</li>
            <li>Cardiac Clinic</li>
            <li className="active">Outpatient Surgery</li>
          </ul>
        </div>
        <div className="sidebar-section hours">
          <h3>Opening Hours</h3>
          <ul>
            <li>Monday - Friday: <span>8.00 - 17.00</span></li>
            <li>Saturday: <span>9.30 - 18.30</span></li>
            <li>Sunday: <span>9.30 - 18.30</span></li>
          </ul>
        </div>
       

<div className="sidebar-section contact">
  <h3>Contacts</h3>
  <p><LuMapPin  />227 Marion street</p>
  <p><LuMail  />med-clinic@mail.com</p>
  <p><LuPhone  />1-888-333-444-222</p>
</div>
      </div>
  )
}

export default ServicesSidebar
