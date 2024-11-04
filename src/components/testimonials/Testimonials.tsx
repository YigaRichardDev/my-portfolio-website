import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonials, Testimonial } from "./testimonialsData";
import { motion } from "framer-motion";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonials: React.FC = () => {
  return (
    <div className="bg-bg-color">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-p4 font-roboto">
        {/* Component Header */}
        <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6}}
        viewport={{ once: true }}
        className="text-heading font-bold text-center mb-p4">
          Client's <span className="text-primary">Testimonials</span>
        </motion.h2>

        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style px-4"
          itemClass="px-4"
        >
          {testimonials.map((testimonial: Testimonial) => (
             <div
             key={testimonial.id}
             className="bg-white shadow-lg p-6 text-center h-[300px] flex flex-col justify-between"
             style={{ minHeight: '300px' }} 
           >
              {/* Rounded Image */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-sm font-semibold mb-2">{testimonial.name}</h3>

              {/* Message */}
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                {testimonial.message}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
