


import Image from "next/image";
import "./MedicalFeatures.css";
const MedicalFeatures = () => {
  return (
    <section className="medical-features">
      <div className="container">
        <h2 className="main-title">Awesome Theme for Medical and Health Websites</h2>
        <p className="subtitle">
          Medical Clinic WordPress theme was created to offer a perfect solution for medical websites.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <Image src="/assets/home/medical-services/one.png" width={50} height={50} className="feature-card-img-home" />
            <h3>Medical Treatment</h3>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique
            </p>
          </div>
          <div className="feature-card">
          <Image src="/assets/home/medical-services/two.png" width={50} height={50} className="feature-card-img-home" />
              <h3>Emergency Help</h3>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique
            </p>
          </div>
          <div className="feature-card">
           <Image src="/assets/home/medical-services/three.png" width={50} height={50} className="feature-card-img-home" />
             <h3>Medical professionals</h3>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique
            </p>
          </div>
          <div className="feature-card">
          <Image src="/assets/home/medical-services/four.png" width={50} height={50} className="feature-card-img-home" />
              <h3>Qualified Doctors</h3>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalFeatures;
