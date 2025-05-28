import './Details.css';
import ServicesSidebar from './ServicesSidebar';

const Details = () => {
  return (
    <div className="outpatient-container">
      <ServicesSidebar />
      <div className="content">
        <img src="/assets/services/one.jpg" alt="Medical Billing Services" className="top-image" />
        <h2>Medical Billing & Consultancy</h2>
        <p>
          At CareWatch, we provide comprehensive medical billing and consultancy services tailored to optimize your practice's revenue cycle.
          Our expert team handles everything from claims processing to regulatory compliance, ensuring your operations run smoothly and efficiently.
        </p>
        <p>
          We understand the complexities of healthcare administration and are dedicated to providing customized solutions that reduce administrative burden,
          improve cash flow, and enhance patient satisfaction. Partner with us for trusted expertise and dedicated support.
        </p>

        <div className="services-grid">
          <div className="services-card">
            <h4>Billing Services</h4>
            <ul>
              <li>Claims Submission & Follow-up</li>
              <li>Denial Management & Appeals</li>
              <li>Patient Eligibility Verification</li>
              <li>Accounts Receivable Management</li>
            </ul>
          </div>
          <div className="services-card">
            <h4>Consultancy</h4>
            <ul>
              <li>Revenue Cycle Optimization</li>
              <li>Practice Management Solutions</li>
              <li>Compliance & Regulatory Guidance</li>
              <li>Coding & Documentation Training</li>
            </ul>
          </div>
          <div className="services-card">
            <h4>Additional Services</h4>
            <ul>
              <li>Patient Billing & Collections</li>
              <li>Financial Reporting & Analytics</li>
              <li>Insurance Contract Negotiation</li>
              <li>Custom Software Integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
