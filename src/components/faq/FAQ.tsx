import React, { useState } from 'react';
import { faqData } from './faqData'; // Adjust the path as necessary

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 font-roboto">
      <h2 className="text-heading font-semibold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white shadow-md">
            <div 
              className="flex justify-between items-center p-4 cursor-pointer bg-bg-color hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-medium">{faq.question}</h3>
              <span className="text-lg">{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="p-4 border-t">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
