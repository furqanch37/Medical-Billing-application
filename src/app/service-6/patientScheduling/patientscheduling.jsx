import React from 'react';
import Image from 'next/image';
import './PatientSchedulingBanner.css';

const PatientSchedulingBanner = ({
  icon = '/assets/sub-services/23.png',
  title = 'Looking for Top-Notch Patient Scheduling Services?',
  subtitle = 'If you want affordable and expert patient scheduling services, reach out to us today and experience seamless, efficient scheduling solutions!',
  buttonText = "Let’s Connect ➞",
  onButtonClick = () => {},
}) => {
  return (
    <div className="scheduling-banner">
      <div className="scheduling-icon">
        <Image src={icon} alt="Scheduling Icon" width={48} height={48} />
      </div>
      <div className="scheduling-content">
        <h3 className="scheduling-title">{title}</h3>
        <p className="scheduling-subtitle">{subtitle}</p>
      </div>
      <div className="scheduling-cta">
        <button className="scheduling-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PatientSchedulingBanner;
