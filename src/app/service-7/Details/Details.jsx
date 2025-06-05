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
    `Efficient practice operations and optimized billing workflows are essential to reduce errors, increase productivity, and improve patient satisfaction. Our Practice Optimization services provide customized assessments and solutions tailored to your healthcare setting.`,

    `We evaluate your current billing processes, administrative workflows, and technology systems to identify bottlenecks and areas for improvement. Our team designs streamlined workflows that enhance communication between clinical and administrative staff and reduce redundant tasks.`,

    `In addition, we offer staff training on best practices and billing software, ensuring your team is well-equipped to manage billing activities effectively. Our patient communication enhancements also improve transparency, helping patients understand their financial responsibilities and reducing delays in payments.`,
  ],
  servicesList: [
    'Comprehensive Workflow Analysis and Redesign',
    'Billing Staff Training and Continuous Support',
    'Practice Management System Integration and Optimization',
    'Enhanced Patient Financial Communication Strategies',
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
