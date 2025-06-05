'use client';

import Image from 'next/image';
import './Details.css';

import ServicesSidebar from './ServicesSidebar';
import BillingSpecialties from '../servicecetagory/billing-specialities';
import PatientSchedulingBanner from '../patientScheduling/patientscheduling';
import HomePage from '../MedicalBillingHighlight';
import MedicalBillingFlow from '../MedicalBillingflow/MedicalBillingFlow';

const practiceOptimizationService = {
  category: 'Contact Center & Patient Scheduling',
  title: 'Practice Operations & Billing Workflow Support',
  image: '/assets/doctors/service-1.jpg',
  description: [
    `At CareWatch, we know that efficient practice operations and optimized billing workflows are key to minimizing errors, boosting productivity, and elevating patient satisfaction. Our Practice Optimization services are customized to fit the unique needs of your healthcare organization.`,

    `We conduct thorough evaluations of your existing billing processes, administrative workflows, and technology systems to uncover bottlenecks and opportunities for enhancement. Our experts design streamlined workflows that foster better communication between clinical and administrative teams while eliminating redundant tasks.`,

    `Beyond workflow improvements, we provide comprehensive staff training on best practices and billing software tools, empowering your team to manage billing with confidence and accuracy. We also enhance patient financial communication to improve transparency, helping patients understand their responsibilities and speeding up payment collections.`,
  ],
  servicesList: [
    'In-Depth Workflow Assessment and Tailored Process Redesign',
    'Ongoing Billing Staff Training and Support',
    'Practice Management System Integration and Enhancement',
    'Clear and Compassionate Patient Financial Communication Strategies',
  ],
};

export default function Details() {
  const service = practiceOptimizationService;

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
