import React from 'react';
import { motion } from 'framer-motion';
import Button from '../button/Button';

const Approach: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:h-[400px] flex flex-col lg:flex-row font-roboto space-y-8 lg:space-y-0 lg:space-x-8">
      
      {/* Image Column with animation */}
      <motion.div
        className="w-full lg:w-1/3 flex justify-center lg:justify-start"
        initial={{ x: -100, opacity: 0 }}                 // Start off-screen to the left
        whileInView={{ x: 0, opacity: 1 }}                // Move to original position and fade in
        transition={{ duration: 0.8, ease: "easeOut" }}    // Control animation speed
        viewport={{ once: true }}                         // Animate only once per load
      >
        <img
          src="/images/approach.jfif"
          alt="Background"
          className="w-full h-60 sm:h-80 lg:h-full object-cover"
        />
      </motion.div>

      {/* Content Column with animation */}
      <motion.div
        className="w-full lg:flex-1 lg:pl-16 space-y-4"
        initial={{ y: 50, opacity: 0 }}                   // Start slightly below and invisible
        whileInView={{ y: 0, opacity: 1 }}                // Move to original position and fade in
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Stagger effect with delay
        viewport={{ once: true }}                         // Animate only once per load
      >
        <h2 className="text-heading font-semibold">
          Our <span className="text-primary">Approach</span>
        </h2>
        <p className="mt-4 text-gray-700 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eius, eos explicabo ratione molestias nobis nulla ipsam, dicta quaerat perferendis nesciunt numquam error blanditiis voluptas repellat voluptate adipisci delectus eligendi eaque commodi. Tempore debitis velit sequi, aperiam nulla fuga cupiditate temporibus ipsum suscipit provident quae.
        </p>
        <Button>Read More</Button>
      </motion.div>
    </div>
  );
};

export default Approach;
