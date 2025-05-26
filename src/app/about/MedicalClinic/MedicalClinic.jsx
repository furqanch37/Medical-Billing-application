'use client';
import { useState } from "react";
import Image from "next/image";
import './Clinic.css';

const AccordionItem = ({ title, content, isOpen, toggle }) => (
  <div className="accordion-item">
    <div className="accordion-header" onClick={toggle}>
      <h4>{title}</h4>
      <span>{isOpen ? "−" : "+"}</span>
    </div>
    {isOpen && <p className="accordion-content">{content}</p>}
  </div>
);

export default function MedicalClinic() {
  const [openIndex, setOpenIndex] = useState(0);

  const data = [
    {
      title: "Who we are?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
    },
    {
      title: "Our Services",
      content: `We offer a range of services including general checkups...`,
    },
    {
      title: "Qualified Doctors",
      content: `Our staff includes highly trained medical professionals...`,
    },
  ];

  return (
    <div className="clinic-container">
      <h5 className="subtitle-1">Professionals</h5>
      <h2 className="title-1">Welcome to Medical Clinic</h2>
      <div className="clinic-content">
        <div className="clinic-image">
          <Image src="/assets/about/2.png" alt="Clinic Building" width={500} height={300} />

        </div>
        <div className="clinic-info">
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
