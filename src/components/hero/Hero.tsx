import React from "react";
import { motion } from "framer-motion";
import EastIcon from '@mui/icons-material/East';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden lg:block absolute top-0 right-0 w-full md:w-5/12 h-full bg-primary z-0 rounded-l-[50%]"
      />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-p4 flex flex-col lg:flex-row items-stretch font-roboto lg:h-[600px]">
        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-7/12 space-y-p2"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-heading"
          >
            Hello,
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-heading"
          >
            This is <span className="text-primary">Richard Yiga</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-heading"
          >
            SOFTWARE ENGINEER, UI/UX DESIGNER,<br /> GRAPHICS DESIGNER.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sm md:text-link lg:text-justify lg:mr-6"
          >
            I’m a Software Engineer, UI/UX Designer, and Graphics Designer with expertise in creating seamless user experiences, designing impactful visuals, and developing efficient software solutions that bridge creativity and technology for high-quality digital products.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="list-disc pl-5 space-y-1 text-sm md:text-link"
          >
            <li>Trusted</li>
            <li>Result-Oriented</li>
            <li>Next Expert Level</li>
          </motion.ul>
          <motion.button
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-primary text-center text-white py-p0 px-p2 hover:bg-secondary transition-colors duration-300"
          >
            See My Works <EastIcon style={{ color: 'white' }} />
          </motion.button>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="w-full lg:w-5/12 mt-8 lg:mt-0 flex justify-center lg:justify-end lg:items-end relative z-20"
        >
          <img
            src="/images/hero1.png"
            alt="Hero Image"
            className="w-auto h-full object-contain"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
