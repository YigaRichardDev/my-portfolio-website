import React from "react";
import { TextField, Button, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <div className="bg-bg-color">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-p4 font-roboto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form Column */}
          <motion.div
            className="lg:flex-1 p-8 bg-white shadow-md"
            initial={{ opacity: 0, x: -100 }} // Start from left (hidden)
            animate={{ opacity: 1, x: 0 }}     // Animate to original position
            transition={{ duration: 0.6 }}      // Animation duration
          >
            <h2 className="text-2xl font-semibold mb-4">Send Me A Message</h2>
            <form className="space-y-6">
              <TextField fullWidth label="Name" variant="outlined" required />
              <TextField fullWidth label="Email" variant="outlined" />
              <TextField fullWidth label="Phone" variant="outlined" required />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                required
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  height: "50px",
                  backgroundColor: "#3315F4",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#00A3F5",
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information Column */}
          <motion.div
            className="lg:w-1/3 p-6 bg-white shadow-md flex flex-col space-y-4"
            initial={{ opacity: 0, x: 100 }} // Start from right (hidden)
            animate={{ opacity: 1, x: 0 }}     // Animate to original position
            transition={{ duration: 0.6 }}      // Animation duration
          >
            <h3 className="text-xl font-semibold mb-2">Get In Touch</h3>
            <div className="mt-4">
              <p className="mb-2">
                <strong>Phone:</strong> +256 7821 69100 | +256 7555 91263
              </p>
              <p className="mb-2">
                <strong>Email:</strong> info@richardyiga.com
              </p>
              <p>
                <strong>Location:</strong> 123 Main St, Nansana, Uganda
              </p>
            </div>
            <p>Feel free to reach out through any of the following channels.</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <IconButton
                href="#"
                target="_blank"
                sx={{
                  color: "#3315F4",
                  "&:hover": {
                    color: "#00A3F5",
                  },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="#"
                target="_blank"
                sx={{
                  color: "#3315F4",
                  "&:hover": {
                    color: "#00A3F5",
                  },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="#"
                target="_blank"
                sx={{
                  color: "#3315F4",
                  "&:hover": {
                    color: "#00A3F5",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="#"
                target="_blank"
                sx={{
                  color: "#3315F4",
                  "&:hover": {
                    color: "#00A3F5",
                  },
                }}
              >
                <Instagram />
              </IconButton>
            </div>
            {/* Google Maps Location */}
            <div className="mt-6">
              <strong className="mb-2">Find Me</strong>
              <iframe
                className="w-full h-64 border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.46112362889!2d32.51993450933132!3d0.3800200694441337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dafd897a4a4e3%3A0x742dfb2d64ffa648!2sYesu%20amala%20stage!5e0!3m2!1sen!2sug!4v1730378913694!5m2!1sen!2sug"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
