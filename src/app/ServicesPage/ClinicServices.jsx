import Image from 'next/image';

const services = [
  { title: 'Medical Billing Services', category: 'In Consulting', image: '/assets/services/one.jpg' },
  { title: 'Claims Processing', category: 'In Billing', image: '/assets/services/one.jpg' },
  { title: 'Revenue Cycle Management', category: 'In Finance', image: '/assets/services/one.jpg' },
  { title: 'Practice Management', category: 'In Operations', image: '/assets/services/one.jpg' },
  { title: 'Coding & Documentation', category: 'In Compliance', image: '/assets/services/one.jpg' },
  { title: 'Patient Eligibility Verification', category: 'In Patient Services', image: '/assets/services/one.jpg' },
  { title: 'Denial Management', category: 'In Billing', image: '/assets/services/one.jpg' },
  { title: 'Regulatory Compliance', category: 'In Legal', image: '/assets/services/one.jpg' },
];

export default function ClinicServices() {
  return (
    <div className="grid-container">
      {services.map((service, index) => (
        <div key={index} className="card">
          <div className="image-wrapper">
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={200}
              className="card-image"
            />
          </div>
          <div className="card-content">
            <h3>{service.title}</h3>
            <p>{service.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
