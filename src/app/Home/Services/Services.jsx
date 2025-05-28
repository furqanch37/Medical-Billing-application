'use client';
import "./Services.css";
import { useRef } from "react";
import { LuEye, LuHeartPulse, LuMonitor, LuStethoscope, LuUserPlus } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const serviceData = [
  {
    icon: <LuEye />,
    image: "/assets/home/services/one.jpg",
    title: "Ophthalmology Clinic",
    description: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique"
  },
  {
    icon: <LuHeartPulse />,
    image: "/assets/home/services/two.jpg",
    title: "Cardiac Clinic",
    description: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique"
  },
  {
    icon: <LuMonitor />,
    image: "/assets/home/services/three.jpg",
    title: "Outpatient Surgery",
    description: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique"
  },
  {
    icon: <LuStethoscope />,
    image: "/assets/home/services/one.jpg",
    title: "General Diagnosis",
    description: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique"
  },
  {
    icon: <LuUserPlus />,
    image: "/assets/home/services/one.jpg",
    title: "Pediatric Clinic",
    description: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique"
  }
];

const Services = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    const amount = 320; // Adjust for card width + gap
    container.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="services-section">
      <div className="departments-panel">
       <div> <h2>Departments</h2>
        <ul>
          <li>Outpatient Surgery</li>
          <li>Cardiac Clinic</li>
          <li>Ophthalmology Clinic</li>
          <li>Gynaecological Clinic</li>
          <li>Outpatient Rehabilitation</li>
          <li>Laryngological Clinic</li>
          <li>Pediatric Clinic</li>
        </ul>
        <a href="#">View all</a></div>
      </div>

      <div className="services-content">
        <div className="services-header">
          <div className="title-group">
            <span className="tag">Innovation</span>
            <h2>Our Services</h2>
          </div>
          <div className="scroll-buttons">
            <button onClick={() => scroll("left")}><FaChevronLeft /></button>
            <button onClick={() => scroll("right")}><FaChevronRight /></button>
          </div>
        </div>

        <div className="services-scroll" ref={scrollRef}>
          {serviceData.map((service, idx) => (
            <div className="service-card" key={idx}>
              <div className="image-wrapper">
                <img src={service.image} alt={service.title} />
                <div className="overlay-icon">{service.icon}</div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
