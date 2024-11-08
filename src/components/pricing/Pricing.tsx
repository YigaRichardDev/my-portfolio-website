import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
  return (
    <section className="bg-bg-color">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-p4 lg:h-[600px] font-roboto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-medium text-heading text-center mb-p4"
        >
          Our <span className="text-primary">Pricing</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg overflow-hidden hover:shadow-xl border border-transparent hover:border-primary transition duration-300 p-6 flex flex-col w-full md:w-full lg:h-[420px] lg:w-full space-y-p2 justify-center items-center"
          >
            <div className="text-center space-y-p1">
              <h1 className="text-heading font-medium">Software Development</h1>
              <h2 className="text-heading font-medium">
                2M <span className="text-primary">UGX</span>
              </h2>
              <h3 className="text-xl">3 Months Completion Time</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-link text-gray-700">
              <li>Scalable</li>
              <li>Flexible</li>
              <li>Hosting inclusive</li>
              <li>Maintenance</li>
              <li>Lifetime Updates</li>
            </ul>
            <div>
              <Link to={"/contact"}>
                <button className="bg-primary text-center text-white py-p0 px-p2 w-[150px] hover:bg-secondary transition-colors duration-300">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg overflow-hidden hover:shadow-xl border border-transparent hover:border-primary transition duration-300 p-6 flex flex-col w-full md:w-full lg:h-[420px] lg:w-full space-y-p2 justify-center items-center"
          >
            <div className="text-center space-y-p1">
              <h1 className="text-heading font-medium">Website Development</h1>
              <h2 className="text-heading font-medium">
                600K <span className="text-primary">UGX</span>
              </h2>
              <h3 className="text-xl">2 Month Completion Time</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-link text-gray-700">
              <li>Responsive Design</li>
              <li>Cross-browser Compatibility</li>
              <li>SEO Optimized</li>
              <li>Performance Optimized</li>
              <li>Easy Maintenance</li>
            </ul>
            <div>
              <Link to={"/contact"}>
                <button className="bg-primary text-center text-white py-p0 px-p2 w-[150px] hover:bg-secondary transition-colors duration-300">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg overflow-hidden hover:shadow-xl border border-transparent hover:border-primary transition duration-300 p-6 flex flex-col w-full md:w-full lg:h-[420px] lg:w-full space-y-p2 justify-center items-center"
          >
            <div className="text-center space-y-p1">
              <h1 className="text-heading font-medium">Logo Design</h1>
              <h2 className="text-heading font-medium">
                50K <span className="text-primary">UGX</span>
              </h2>
              <h3 className="text-xl">1 Week Completion Time</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-link text-gray-700">
              <li>Unique Branding</li>
              <li>Scalable Vector Graphics</li>
              <li>Timeless Appeal</li>
              <li>Memorable Identity</li>
              <li>Color Theory & Typography</li>
            </ul>
            <div>
              <Link to={"/contact"}>
                <button className="bg-primary text-center text-white py-p0 px-p2 w-[150px] hover:bg-secondary transition-colors duration-300">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
