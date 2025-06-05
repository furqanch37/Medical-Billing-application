'use client';

import './Details.css';
import ServicesSidebar from './ServicesSidebar';
import BillingSpecialties from '../servicecetagory/billing-specialities';
import PatientSchedulingBanner from '../patientScheduling/patientscheduling';
import HomePage from '../MedicalBillingHighlight';
import MedicalBillingFlow from '../MedicalBillingflow/MedicalBillingFlow';

const servicesDetails = [
  {
    category: 'End-to-End Billing Solutions',
    title: 'Comprehensive Revenue Cycle Management',
    image: '/assets/doctors/service-1.jpg',
    description: [
      `Our Comprehensive Revenue Cycle Management (RCM) services provide an all-inclusive, seamless approach to managing the entire medical billing process, from patient registration to final payment collection. With extensive experience in healthcare billing, we optimize every phase to ensure accuracy, reduce errors, and expedite reimbursements, enabling healthcare providers to focus on patient care rather than administrative burdens.`,
      `By leveraging advanced billing technology combined with expert human oversight, we manage insurance verification, claims submission, payment posting, and accounts receivable management. Our proactive claim monitoring system identifies potential issues before they become costly delays, ensuring higher claim acceptance rates and improving overall cash flow for medical practices.`,
      `Additionally, our team continuously analyzes revenue cycle performance metrics and implements customized strategies that reduce denials, accelerate payment cycles, and maximize practice revenue. Partner with us for a reliable, transparent, and efficient RCM service designed to meet the specific needs of your healthcare specialty.`,
    ],
    servicesList: [
      'Patient Registration & Insurance Eligibility Verification',
      'Claims Preparation, Submission & Tracking',
      'Payment Posting & Reconciliation',
      'Accounts Receivable Management & Follow-up',
      'Revenue Cycle Analytics, Reporting & Optimization',
    ],
  },
  // other service objects remain in case you want to reuse them later
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
