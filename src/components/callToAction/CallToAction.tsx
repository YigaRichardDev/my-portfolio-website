import { motion } from "framer-motion";

const CallToAction = () => {
    return (
      <div className=" py-p4 px-4 flex justify-center items-center font-roboto">
        <div className="text-center container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6}}
          viewport={{ once: true }}
          className="text-heading font-semibold mb-p2">Get In Touch</motion.h2>
          
          {/* Content */}
          <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm mb-6">
          Have a project in mind or just want to connect? Don’t hesitate to get in touch. Let’s turn your vision into reality!
          </motion.p>
          
          {/* Button */}
          <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-primary text-center text-white py-p0 px-p2  hover:bg-secondary transition-colors duration-300">
              Send Me A Message
            </motion.button>
        </div>
      </div>
    );
  };
  
  export default CallToAction;
  