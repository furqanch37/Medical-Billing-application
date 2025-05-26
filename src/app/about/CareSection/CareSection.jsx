// components/CareSection.jsx
import Image from "next/image";
import "./caresection.css";

const careData = [
  {
    title: "Embrace your Health",
    image: "/assets/about/clinic1.jpg",
    description: `It is a long established fact that a reader will be distracted by the readable content...`,
  },
  {
    title: "Primary Health Care",
    image: "/assets/about/clinic2.jpg",
    description: `It is a long established fact that a reader will be distracted by the readable content...`,
  },
  {
    title: "Achieving Better Health Care",
    image: "/assets/about/clinic3.jpg",
    description: `It is a long established fact that a reader will be distracted by the readable content...`,
  },
];

export default function CareSection() {
  return (
    <section className="care-section">
      <h5 className="subtitle-2">Professionals</h5>
      <h2 className="title-2">We Care About You</h2>
      <div className="care-grid">
        {careData.map((item, index) => (
          <div className="care-card" key={index}>
            <div className="image-wrapper">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                layout="responsive"
              />
            </div>
            <h4>{item.title}</h4>
            <div className="underline"></div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
