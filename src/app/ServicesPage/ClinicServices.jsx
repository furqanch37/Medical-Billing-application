import Image from 'next/image';

const services = [
  { title: 'Outpatient Surgery', category: 'In Surgery', image: '/assets/services/one.jpg' },
  { title: 'Cardiac Clinic', category: 'In Services, Therapy', image: '/assets/services/one.jpg' },
  { title: 'Ophthalmology Clinic', category: 'In Therapy', image: '/assets/services/one.jpg' },
  { title: 'Gynaecological Clinic', category: 'In Therapy', image: '/assets/services/one.jpg' },
  { title: 'Outpatient Rehabilitation', category: 'In Rehabilitation', image:'/assets/services/one.jpg' },
  { title: 'Laryngological Clinic', category: 'In Therapy', image: '/assets/services/one.jpg' },
  { title: 'Pediatric Clinic', category: 'In Pediatric', image: '/assets/services/one.jpg' },
  { title: 'Laboratory Analysis', category: 'In Pharmacy', image: '/assets/services/one.jpg' },
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
