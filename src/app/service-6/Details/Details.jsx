'use client';

import Image from 'next/image';
import './Details.css';

import ServicesSidebar from './ServicesSidebar';
import BillingSpecialties from '../servicecetagory/billing-specialities';
import PatientSchedulingBanner from '../patientScheduling/patientscheduling';
import HomePage from '../MedicalBillingHighlight';
import MedicalBillingFlow from '../MedicalBillingflow/MedicalBillingFlow';

const denialManagementServices = {
  category: 'Reimbursement Recovery',
  title: 'Denial Prevention, Management & Appeals',
  image: '/assets/doctors/service-5.jpg',
  description: [
    `Denied claims represent lost revenue and increased administrative workload. Our Denial Prevention, Management, and Appeals service focuses on identifying, preventing, and resolving claim denials to maximize reimbursement and minimize revenue leakage.`,

    `We analyze denial trends to pinpoint root causes, such as coding errors, missing documentation, or payer policy changes. Our team works proactively to correct these issues before claim submission and to educate providers on best practices to reduce future denials.`,

    `When denials do occur, we manage the entire appeals process—preparing thorough documentation, submitting appeals within payer timelines, and following up aggressively until resolution. Our proven strategies recover valuable revenue and improve your practice’s overall financial health.`,
  ],
  servicesList: [
    'Detailed Denial Analysis and Reporting',
    'Appeals Preparation, Submission, and Follow-Up',
    'Root Cause Identification and Corrective Actions',
    'Payer Negotiations and Dispute Resolution',
  ],
};

export default function Details() {
  const service = denialManagementServices;

  return (
    <div className="outpatient-container">
      <ServicesSidebar />
      <div className="content">
        <Image
          src={service.image}
          alt={service.title}
          className="top-image"
          width={1000}
          height={500}
          priority
        />
        <h2>{service.title}</h2>

        {service.description.map((para, idx) => (
          <p className="content-1" key={idx}>
            {para}
          </p>
        ))}

        {service.servicesList.length > 0 && (
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
        )}

        <MedicalBillingFlow />
        <PatientSchedulingBanner />
        <HomePage />
        <BillingSpecialties />
      </div>
    </div>
  );
}
