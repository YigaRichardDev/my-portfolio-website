import React, { useState } from "react";
import { faqData } from "./faqData"; // Adjust the path as necessary
import { motion } from "framer-motion";
const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 font-roboto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-heading font-semibold mb-6"
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="bg-white shadow-md"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer bg-bg-color hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-medium">{faq.question}</h3>
              <span className="text-lg">{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="p-4 border-t">
                <p>{faq.answer}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
