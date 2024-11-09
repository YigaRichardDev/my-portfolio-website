import React from "react";
import { motion } from "framer-motion";

const Mission: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:h-[400px] flex flex-col-reverse lg:flex-row font-roboto space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Content Column with animation */}
      <motion.div
        className="w-full lg:flex-1 lg:pr-16 space-y-4"
        initial={{ y: 50, opacity: 0 }} // Start slightly below and invisible
        whileInView={{ y: 0, opacity: 1 }} // Animate to original position and fully visible
        transition={{ duration: 0.8, ease: "easeOut" }} // Control animation speed
        viewport={{ once: true }} // Animation triggers once per page load
      >
        <h2 className="text-heading font-semibold">
          Values and <span className="text-primary">Mission</span>
        </h2>
        <p className="mt-4 text-gray-700 text-justify">
          What Drives Me: I’m driven by a deep passion for creating digital
          experiences that resonate with people and add genuine value to their
          lives. My journey in tech has always been about more than just code or
          design; it’s about understanding users' needs, solving real-world
          problems, and crafting solutions that feel natural and effortless to
          use.
        </p>
        <p className="mt-4 text-gray-700 text-justify">
          At my core, I believe in the power of technology to simplify, empower,
          and connect people. My mission is to keep pushing my limits, embracing
          new technologies, and continuously refining my skills. I’m committed
          to helping businesses and individuals turn complex ideas into
          intuitive and accessible digital products. Every project I undertake
          is guided by a commitment to quality, innovation, and empathy for the
          user, ensuring that what I build has a lasting, positive impact.
        </p>
      </motion.div>

      {/* Image Column with animation */}
      <motion.div
        className="w-full lg:w-1/3 flex justify-center lg:justify-start"
        initial={{ x: -100, opacity: 0 }} // Start off-screen to the left
        whileInView={{ x: 0, opacity: 1 }} // Animate to original position and fully visible
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Slight delay for staggered effect
        viewport={{ once: true }} // Animation triggers once per page load
      >
        <img
          src="/images/mission.jfif"
          alt="Background"
          className="w-full h-60 sm:h-80 lg:h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Mission;
