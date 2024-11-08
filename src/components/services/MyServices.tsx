import { motion } from "framer-motion";
import React from "react";
import servicesData from "./servicesData";
import { Link } from "react-router-dom";

const MyServices: React.FC = () => {
  return (
    <div className="bg-bg-color">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-p4 font-roboto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg hover:shadow-xl border border-transparent hover:border-primary transition duration-300 p-6 flex flex-col w-full lg:h-[420px] space-y-p2 overflow-hidden"
            >
              <div className="bg-primary p-2 rounded-full h-16 w-16 flex justify-center items-center">
                {service.icon}
              </div>
              <h3 className="text-link font-semibold mb-4">{service.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-6">
                {service.description}
              </p>
              <div>
                <Link to={`/service/${service.slug}`}>
                  <button className="bg-primary text-center text-white py-p0 px-p2 w-[150px] hover:bg-secondary transition-colors duration-300 mt-auto">
                    Read More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyServices;
