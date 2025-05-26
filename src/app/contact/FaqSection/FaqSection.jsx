'use client';
import React, { useState } from 'react';
import './FaqSection.css';

const leftFaqs = [
  {
    question: 'What are your regular office hours?',
    answer:
      'Cum sociis natoque penatibus et magnis dis parturient ntesmus. Proin vel nibh et elit mollis commodo et nec augue tristique sed Quisque velit nisi, pretium ut lacinia lementum id enim. Nulla quis lorem ut libero malesuada feugiat. Cum sociis natoque penatibus et magnis',
  },
  { question: 'What is your appointment policy?', answer: '' },
  { question: 'What should I do if I’m ill?', answer: '' },
  { question: 'How do I get a refill on my prescription?', answer: '' },
];

const rightFaqs = [
  {
    question: 'Integrative Medicine And Cancer Treatment',
    answer:
      'Cum sociis natoque penatibus et magnis dis parturient ntesmus. Proin vel nibh et elit mollis commodo et nec augue tristique sed Quisque velit nisi, pretium ut lacinia lementum id enim. Nulla quis lorem ut libero malesuada feugiat. Cum sociis natoque penatibus et magnis',
  },
  { question: 'Achieving Better Health Care One Patient At A Time', answer: '' },
  { question: 'Vitamins and supplements', answer: '' },
  { question: 'How do I get a refill on my prescription?', answer: '' },
];

const FaqColumn = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="faq-column">
      {faqs.map((item, index) => (
        <div key={index} className={`faq-item ${index === activeIndex ? 'active' : ''}`}>
          <div className="faq-question" onClick={() => toggleIndex(index)}>
            <span className="question-text">{item.question}</span>
            <span className="toggle-icon">{index === activeIndex ? '−' : '+'}</span>
          </div>
          {index === activeIndex && item.answer && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

const FaqSection = () => {
  return (
    <div className="faq-wrapper">
      <div className="faq-header">
        <span className="faq-title">FAQ</span>
        <h2>Have some Questions?</h2>
      </div>
      <div className="faq-columns">
        <FaqColumn faqs={leftFaqs} />
        <FaqColumn faqs={rightFaqs} />
      </div>
    </div>
  );
};

export default FaqSection;
