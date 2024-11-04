import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BrushIcon from '@mui/icons-material/Brush';
import { motion } from "framer-motion";

const MyServices: React.FC = () => {
  return (
    <div className="bg-bg-color">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-p4 lg:h-[500px] font-roboto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
          className="bg-white shadow-lg hover:shadow-xl border border-transparent hover:border-primary transition duration-300 p-6 flex flex-col w-full md:w-full lg:h-[420px] lg:w-full space-y-p1">
            <div className="bg-primary p-2 rounded-full h-20 w-20 flex justify-center items-center">
              <CodeIcon
                style={{ width: "50px", height: "50px", color: "white" }}
              />
            </div>
            <h3 className="text-link font-semibold mb-4">
              Software Development
            </h3>
            <p className="text-sm text-gray-600">
              I specialize in delivering innovative software development
              solutions tailored to meet the unique needs of your business. With
              a passion for technology and a commitment to excellence, I
              leverage industry expertise and cutting-edge technologies to
              create high-quality applications that enhance operational
              efficiency and drive growth.
            </p>
            <button className="bg-primary text-center text-white py-p0 px-p2 w-[150px] hover:bg-secondary transition-colors duration-300">
              Read More
            </button>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg hover:shadow-xl border border-transparent hover:border-primary transition duration-300 p-6 flex flex-col w-full md:w-full lg:h-[420px] lg:w-full space-y-p1">
            <div className="bg-primary p-2 rounded-full h-20 w-20 flex justify-center items-center">
              <DesignServicesIcon
                style={{ width: "50px", height: "50px", color: "white" }}
              />
            </div>
            <h3 className="text-link font-semibold mb-4">
              UI/UX Design
            </h3>
            <p className="text-sm text-gray-600">
            I specialize in crafting intuitive UI/UX designs tailored to elevate user experiences and meet the unique needs of your business. With a deep passion for design and a commitment to excellence, I apply industry knowledge and the latest design principles to create visually appealing, interfaces. My goal is to ensure each interaction is seamless and engaging.
            </p>
            <button className="bg-primary text-center text-white py-p0 px-p2 w-[150px] hover:bg-secondary transition-colors duration-300">
              Read More
            </button>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg hover:shadow-xl border border-transparent hover:border-primary transition duration-300 p-6 flex flex-col w-full md:w-full lg:h-[420px] lg:w-full space-y-p1">
            <div className="bg-primary p-2 rounded-full h-20 w-20 flex justify-center items-center">
              <BrushIcon
                style={{ width: "50px", height: "50px", color: "white" }}
              />
            </div>
            <h3 className="text-link font-semibold mb-4">
              Graphics Design
            </h3>
            <p className="text-sm text-gray-600">
            I specialize in creating impactful graphic designs that bring your brand’s vision to life. With a passion for visual storytelling and attention to detail, I craft designs that capture attention and communicate effectively. I deliver high-quality visuals that resonate with audiences and elevate your brand’s presence, helping drive engagement and growth.
            </p>
            <button className="bg-primary text-center text-white py-p0 px-p2 w-[150px] hover:bg-secondary transition-colors duration-300">
              Read More
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MyServices;
