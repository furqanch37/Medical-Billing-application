import React from 'react';
import './InfoSection.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="contact-row">
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <div>
            <p className="label">Give us a Call</p>
            <p className="value">1-888-123-4567</p>
          </div>
        </div>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <div>
            <p className="label">Send us a Message</p>
            <p className="value">medical-clinic@mail.com</p>
          </div>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <div>
            <p className="label">Visit our Location</p>
            <p className="value">3213 Suitland Street</p>
          </div>
        </div>
      </div>

      <div className="info-grid">
        <div className="info-box box1">
          <h3>Top Doctors</h3>
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit
            mollis commodo et nec augue tristique sed volutpat.
          </p>
          <button>Read More</button>
        </div>

        <div className="info-box box2">
          <h3>24 Hours Service</h3>
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit
            mollis commodo et nec augue tristique sed volutpat.
          </p>
          <button>Read More</button>
        </div>

        <div className="info-box box3">
          <h3>Opening Hours</h3>
          <div className="hours">
            <div>
              <span>Monday – Friday</span>
              <span>8.00 – 17.00</span>
            </div>
            <div>
              <span>Saturday</span>
              <span>9.30 – 17.30</span>
            </div>
            <div>
              <span>Sunday</span>
              <span>9.30 – 15.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
