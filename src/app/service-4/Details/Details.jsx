'use client';

import Image from 'next/image';
import './Details.css';

import ServicesSidebar from './ServicesSidebar';
import BillingSpecialties from '../servicecetagory/billing-specialities';
import PatientSchedulingBanner from '../patientScheduling/patientscheduling';
import HomePage from '../MedicalBillingHighlight';
import MedicalBillingFlow from '../MedicalBillingflow/MedicalBillingFlow';

const codingComplianceServices = {
  category: 'Coding Compliance',
  title: 'Medical Coding & Clinical Documentation Improvement',
  image: '/assets/doctors/service-4.jpg',
  description: [
    `Accurate and compliant medical coding is the foundation of proper reimbursement and regulatory adherence. Our Medical Coding & Clinical Documentation Improvement (CDI) services ensure that all diagnoses, procedures, and services are coded correctly, reflecting the complexity and medical necessity of care provided.`,

    `Our certified professional coders stay up to date with the latest ICD-10, CPT, and HCPCS guidelines, applying best practices to maximize legitimate reimbursements while reducing audit risks. We collaborate closely with healthcare providers to review and enhance clinical documentation, supporting thorough and precise coding.`,

    `Through targeted CDI initiatives, we help identify documentation gaps, educate providers, and implement corrective measures to improve code specificity and compliance. This improves revenue integrity, accelerates payments, and prepares practices for external audits with confidence.`,
  ],
  servicesList: [
    'Accurate ICD-10, CPT, and HCPCS Coding',
    'Clinical Documentation Review and Improvement Programs',
    'Coding Audits and Compliance Monitoring',
    'Provider Education and Staff Training on Coding Updates',
  ],
};

export default function Details() {
  const service = codingComplianceServices;

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
