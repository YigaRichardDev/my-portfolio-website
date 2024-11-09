import React from "react";
import { motion } from "framer-motion";
import MyServices from "./MyServices";


const Services: React.FC = () => {
  return (
    <div className="bg-bg-color">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-p4  font-roboto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-heading font-medium text-center"
        >
          Our <span className="text-primary">Services</span>
        </motion.h2>
        <MyServices/>
       
      </section>
    </div>
  );
};

export default Services;
