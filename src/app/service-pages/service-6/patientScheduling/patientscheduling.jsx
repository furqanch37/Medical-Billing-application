import React from 'react'; 
import Image from 'next/image';
import './PatientSchedulingBanner.css';

const PatientSchedulingBanner = ({
  icon = '/assets/sub-services/23.png',
  title = 'Need Reliable Patient Scheduling Services?',
  subtitle = 'CareWatch offers expert, affordable scheduling solutions designed to streamline your patient flow and enhance your practice’s efficiency. Connect with us today to experience hassle-free appointment management!',
  buttonText = "Let’s Connect ➞",
  onButtonClick = () => {},
}) => {
  return (
    <div className="scheduling-banner">
      <div className="scheduling-icon">
        <Image src={icon} alt="Patient Scheduling Icon" width={48} height={48} />
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
