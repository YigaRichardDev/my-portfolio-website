import React from 'react';
import { motion } from 'framer-motion';

interface PageTitleProps {
  title: string;
  span: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, span }) => {
  return (
    <div
      className="font-roboto w-full h-[150px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/pt.jfif')" }}
    >
      <motion.h2 
        className="text-pheading font-bold"
        initial={{ opacity: 0, y: 20 }}  // Start off-screen and invisible
        animate={{ opacity: 1, y: 0 }}    // End at its original position and fully visible
        transition={{ duration: 0.5, ease: "easeOut" }} // Animation properties
      >
        {title} <span className='text-primary'>{span}</span>
      </motion.h2>
    </div>
  );
};

export default PageTitle;
