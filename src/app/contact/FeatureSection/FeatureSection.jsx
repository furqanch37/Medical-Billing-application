import React from 'react';
import { FaUser, FaHeart, FaComments } from 'react-icons/fa';
import './FeatureSection.css';

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="feature-box">
        <div className="feature-icon">
          <FaUser />
        </div>
       <div> <h3>The Best Doctors</h3>
        <p>
          Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndsisse suscipit sagittis leo sit met entum
          estibulum dignissim
        </p></div>
      </div>
      <div className="feature-box">
        <div className="feature-icon">
          <FaHeart />
        </div>
      <div>  <h3>Care About All Clients</h3>
        <p>
          Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndsisse suscipit sagittis leo sit met entum
          estibulum dignissim
        </p></div>
      </div>
      <div className="feature-box">
        <div className="feature-icon">
          <FaComments />
        </div>
      <div>  <h3>Communication With Patients</h3>
        <p>
          Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndsisse suscipit sagittis leo sit met entum
          estibulum dignissim
        </p></div>
      </div>
    </div>
  );
};

export default FeatureSection;
