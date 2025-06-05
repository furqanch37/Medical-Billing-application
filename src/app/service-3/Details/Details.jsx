'use client';

import React from 'react';
import './Details.css';
import ServicesSidebar from './ServicesSidebar';
import MedicalBillingFlow from '../MedicalBillingflow/MedicalBillingFlow';
import PatientSchedulingBanner from '../patientScheduling/patientscheduling';
import HomePage from '../MedicalBillingHighlight';
import BillingSpecialties from '../servicecetagory/billing-specialities';

export default function Details() {
  // Hardcoded service data for "Claims Accuracy"
  const service = {
    category: 'Claims Accuracy',
    title: 'Clean Claim Submission & Tracking',
    image: '/assets/doctors/service-2.jpg',
    description: [
      `Clean claim submission is vital to accelerate reimbursements and avoid costly denials or delays. Our Claims Accuracy service ensures that every medical claim is meticulously reviewed and scrubbed for errors before submission, adhering to payer-specific guidelines and industry best practices.`,
      `Our team utilizes cutting-edge claim scrubbing software and manual expert reviews by certified coders to detect and correct inaccuracies such as coding mismatches, missing documentation, or incorrect patient information. This rigorous process reduces claim rejection rates significantly and speeds up the payment lifecycle.`,
      `We also provide continuous tracking of all submitted claims, promptly identifying any issues that arise during processing and swiftly initiating corrective actions or resubmissions. Our comprehensive payer communication helps resolve disputes quickly, thereby enhancing your practice’s financial stability and administrative efficiency.`,
    ],
    servicesList: [
      'Automated and Manual Claims Scrubbing',
      'Real-Time Claim Validation & Error Correction',
      'Denial Prevention and Reduction Strategies',
      'Claims Follow-Up and Resubmission Processes',
      'Effective Payer Communication and Support',
    ],
  };

  return (
    <div className="outpatient-container">
      <ServicesSidebar />

      <div className="content">
        <img
          src={service.image}
          alt={service.title}
          className="top-image"
        />
        <h2>{service.title}</h2>

        {service.description.map((para, idx) => (
          <p className="content-1" key={idx}>
            {para}
          </p>
        ))}

        <div className="services-grid">
          <div className="services-card">
            <h4>{service.category}</h4>
            <ul>
              {service.servicesList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <MedicalBillingFlow />
        <PatientSchedulingBanner />
        <HomePage />
        <BillingSpecialties />
      </div>
    </div>
  );
}
