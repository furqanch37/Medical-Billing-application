'use client';

import './Details.css';
import ServicesSidebar from './ServicesSidebar';
import BillingSpecialties from '../servicecetagory/billing-specialities';
import PatientSchedulingBanner from '../patientScheduling/patientscheduling';
import HomePage from '../MedicalBillingHighlight';
import MedicalBillingFlow from '../MedicalBillingflow/MedicalBillingFlow';

const servicesDetails = [
  {
    category: 'Medical Billing & Coding Audit',
    title: 'Gain Financial Clarity and Compliance Confidence with Expert Billing Audits',
    image: '/assets/doctors/service-1.jpg',
    description: [
      `At CareWatch, our Medical Billing & Coding Audit services empower healthcare providers by uncovering hidden revenue gaps and ensuring compliance across your revenue cycle. We provide a thorough, data-driven review of your billing and coding processes to identify strengths, detect risks, and optimize financial performance.`,
      
      `Our expert team combines advanced analytics, policy review, and on-site evaluations to deliver actionable insights that help you recover lost revenue and improve audit readiness. Beyond fixing issues, our audits educate your staff on complex billing regulations, fostering continuous improvement and operational efficiency.`,

      `We offer risk-based, focused, and regularly scheduled audits tailored to your practice's unique needs—ensuring consistent oversight, early detection of discrepancies, and sustained revenue cycle optimization. Partner with CareWatch for transparent, secure, and dependable audit services designed to boost your practice’s financial health while you focus on exceptional patient care.`,
    ],
    servicesList: [
      'In-depth Review of Billing & Coding Policies',
      'Comprehensive Data Analysis & On-site Evaluation',
      'Risk-Based, Focused, and Scheduled Audits',
      'Detailed Reporting with Clear Recommendations',
      'Ongoing Follow-Up and Continuous Support',
    ],
  },
  // other service objects remain for reuse if needed
];

export default function Details() {
  const service = servicesDetails[0]; // hardcoded selection

  return (
    <div className="outpatient-container">
      <ServicesSidebar />
      <div className="content">
        <img src={service.image} alt={service.title} className="top-image" />
        <h2>{service.title}</h2>
        {service.description.map((para, idx) => (
          <p className="content-1" key={idx}>{para}</p>
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
