const CallToAction = () => {
    return (
      <div className="bg-bg-color py-p4 px-4 flex justify-center items-center font-roboto">
        <div className="text-center container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="text-heading font-semibold mb-p2">Get In Touch</h2>
          
          {/* Content */}
          <p className="text-sm mb-6">
          Have a project in mind or just want to connect? Don’t hesitate to get in touch. Let’s turn your vision into reality!
          </p>
          
          {/* Button */}
          <button className="bg-primary text-center text-white py-p0 px-p2  hover:bg-secondary transition-colors duration-300">
              Send Me A Message
            </button>
        </div>
      </div>
    );
  };
  
  export default CallToAction;
  