import MedicalBillingHighlight from "./MedicalBillingHighlight";

export default function HomePage() {
  return (
    <MedicalBillingHighlight
      title="What Makes Our Medical Billing and Coding Services Stand Out?"
      paragraphs={[
        "Pro Medical Billing Solutions understands that even minor errors and mistakes in Medical Billing and Coding Services can lead to significant financial issues. We prioritize hiring certified and experienced professionals to provide top-tier services to healthcare providers nationwide.",
        "Our dedicated team works closely with you to meet your specific needs, ensuring accuracy and compliance. Our proactive strategies focus on maximizing your financial success by submitting accurate claims and meeting industry benchmarks.",
        "With 24/7 web-based access and client support, you gain real-time visibility into your financial and Billing activities, empowering you to make informed decisions for better Revenue Cycle Management.",
      ]}
      buttonText="Let’s Connect"
      buttonLink="/contact"
      badgeText="150+ Providers"
      mainImage="/images/money-handoff.jpg"
      overlayImage="/images/coins-hand.jpg"
    />
  );
}
