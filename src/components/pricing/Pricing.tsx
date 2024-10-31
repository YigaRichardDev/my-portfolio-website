import React from "react";

const Pricing: React.FC = () => {
  return (
    <section className="bg-bg-color">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-p4 lg:h-[600px] font-roboto">
        <h2 className="font-medium text-heading text-center mb-p4">
          Our <span className="text-primary">Pricing</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl border border-transparent hover:border-primary transition duration-300 p-6 flex flex-col w-full md:w-full lg:h-[420px] lg:w-full space-y-p2 justify-center items-center">
            <div className="text-center space-y-p1">
            <h1 className="text-heading font-medium">Software Development</h1>
            <h2 className="text-heading font-medium">2M <span className="text-primary">UGX</span></h2>
            <h3 className="text-xl">3 Months Completion</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-link text-gray-700">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <button className="bg-primary text-center text-white py-p0 px-p2 w-[150px] hover:bg-secondary transition-colors duration-300">
              Get Started
            </button>
          </div>
          <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl border border-transparent hover:border-primary transition duration-300 p-6 flex flex-col w-full md:w-full lg:h-[420px] lg:w-full space-y-p2 justify-center items-center">
            <div className="text-center space-y-p1">
            <h1 className="text-heading font-medium">Website Development</h1>
            <h2 className="text-heading font-medium">600K <span className="text-primary">UGX</span></h2>
            <h3 className="text-xl">1 Month Completion</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-link text-gray-700">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <button className="bg-primary text-center text-white py-p0 px-p2 w-[150px] hover:bg-secondary transition-colors duration-300">
              Get Started
            </button>
          </div>
          <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl border border-transparent hover:border-primary transition duration-300 p-6 flex flex-col w-full md:w-full lg:h-[420px] lg:w-full space-y-p2 justify-center items-center">
            <div className="text-center space-y-p1">
            <h1 className="text-heading font-medium">Logo Design</h1>
            <h2 className="text-heading font-medium">50K <span className="text-primary">UGX</span></h2>
            <h3 className="text-xl">1 Week Completion</h3>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-link text-gray-700">
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <button className="bg-primary text-center text-white py-p0 px-p2 w-[150px] hover:bg-secondary transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
