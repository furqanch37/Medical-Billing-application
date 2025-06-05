import Image from "next/image";
import "./MedicalBillingFlow.css";

export default function MedicalBillingFlow() {
  return (
    <section className="medical-billing-section">
      <h2 className="section-title">
        Our Streamlined Approach And Process Flow to Medical Billing Services!
      </h2>

      <div className="content-container">
        <div className="text-content">
          <p>
            In Medical Billing, what happens behind the scenes can make or break a practice’s revenue
            flow. We’ve seen firsthand how success depends on the first steps—patient registration and
            insurance verification. These early moments set the tone for everything that follows. Once
            the provider delivers care, our skilled coding team translates clinical notes into accurate
            CPT, ICD, and HCPCS codes. Each entry reflects not only the complexity of treatment but also
            our responsibility to maintain accuracy and uphold industry standards.
          </p>

          <p>
            The process then moves into a phase where precision is non-negotiable. Claims are carefully
            reviewed, scrubbed for errors, and submitted to the appropriate payers through secure
            channels. Our team closely monitors each submission, intervening quickly to resolve
            discrepancies before they disrupt cash flow. Every step—from documentation to denial
            management—is guided by a strong commitment to compliance and transparency. This is how Pro
            Medical Billing Solutions ensures that providers are paid promptly and correctly, while
            patients experience a seamless, trustworthy billing process.
          </p>

          <button className="start-button">
            Let's Get Started
          </button>
        </div>

        <div className="image-container">
          <Image
            src="/assets/sub-services/25.png"
            alt="Revenue Cycle Management Diagram"
            width={500}
            height={500}
            className="responsive-image"
          />
        </div>
      </div>
    </section>
  );
}
