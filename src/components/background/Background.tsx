import React from "react";
import Button from "../button/Button";
import { motion } from "framer-motion";

const Background: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:h-[400px] flex flex-col lg:flex-row font-roboto space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Image Column */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/3 flex justify-center lg:justify-start"
      >
        <img
          src="https://img.freepik.com/premium-photo/blue-print-laptop-top-view_641503-399835.jpg?ga=GA1.1.647732713.1729972993&semt=ais_hybrid"
          alt="Background"
          className="w-full h-60 sm:h-80 lg:h-full object-cover"
        />
      </motion.div>

      {/* Content Column */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="w-full lg:flex-1 lg:pl-16 space-y-4"
      >
        <h2 className="text-heading font-semibold">
          Professional <span className="text-primary">Background</span>
        </h2>
        <p className="mt-4 text-gray-700 text-justify">
          With over 3 years of experience in the tech industry, I’ve worked on
          diverse projects, ranging from full-stack web development to designing
          user-centric mobile applications and complex software systems. I’m
          proficient in front-end technologies like React, JavaScript, and Tailwindcss,
          along with backend frameworks such as Node.js and Express, enabling me
          to deliver robust and scalable applications. 
        </p>
        <p className="mt-4 text-gray-700 text-justify">
        As a UI/UX designer, I
          specialize in creating seamless and intuitive user experiences,
          employing tools like Figma and Adobe XD to build wireframes,
          prototypes, and high-fidelity mockups. 
        </p>
        <p className="mt-4 text-gray-700 text-justify">
        In addition to UI/UX design, I bring a solid foundation in graphic design, leveraging tools like Photoshop and Illustrator to craft engaging visuals that reinforce brand identity and storytelling. 

        </p>
      </motion.div>
    </div>
  );
};

export default Background;
