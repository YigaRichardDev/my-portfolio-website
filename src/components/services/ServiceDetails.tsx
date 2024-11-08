import { motion } from "framer-motion";
import React from "react";
import servicesData from "./servicesData";
import { useParams } from "react-router-dom";

const ServiceDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((service) => service.slug === slug);
  if (!service) {
    return (
      <p className="flex items-center justify-center h-[100vh] font-roboto">
        Blog post not found.
      </p>
    );
  }

  
  return (
    <div className="bg-bg-color">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row font-roboto space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Image Column */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3 flex justify-center lg:justify-start"
        >
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-60 object-cover"
          />
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:flex-1 lg:pl-16 space-y-4"
        >
          <h2 className="text-heading font-semibold">
            {service.title}
          </h2>
          <p className="mt-4 text-gray-700 text-justify">
           {service.description}
          </p>
        </motion.div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 font-roboto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} 
          className="bg-white shadow-lg overflow-hidden p-6 space-y-5">
          <h2 className="text-heading font-semibold">Service Details</h2>
          <p className="text-gray-700">{service.details}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}  className="bg-white shadow-lg overflow-hidden p-6 space-y-5">
          <h2 className="text-heading font-semibold">Our Approach</h2>
          <p className="text-gray-700">{service.approach}</p>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default ServiceDetails;
