import React from "react";
import EastIcon from '@mui/icons-material/East';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="hidden lg:block absolute top-0 right-0 w-full md:w-5/12 h-full bg-primary z-0 rounded-l-[50%]" />
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-p4 flex flex-col lg:flex-row items-stretch font-roboto lg:h-[600px]">
    {/* Content Column */}
    <div className="w-full lg:w-7/12 space-y-p2">
      <p className="text-heading">Hello,</p>
      <p className="text-heading">This is <span className="text-primary">Richard Yiga</span></p>
      <p className="text-heading">SOFTWARE ENGINEER, UI/UX DESIGNER,<br /> GRAPHICS DESIGNER.</p>
      <p className="text-sm md:text-link">
        I’m a Software Engineer, UI/UX Designer, and Graphics Designer with expertise in creating seamless user experiences, designing impactful visuals, and developing efficient software solutions that bridge creativity and technology for high-quality digital products.
      </p>
      <ul className="list-disc pl-5 space-y-1 text-sm md:text-link">
        <li>Trusted</li>
        <li>Result-Oriented</li>
        <li>Next Expert Level</li>
      </ul>
      <button className="bg-primary text-center text-white py-p0 px-p2 hover:bg-secondary transition-colors duration-300">
        See My Works <EastIcon style={{ color: 'white' }}/>
      </button>
    </div>

    {/* Image Column */}
    <div className="w-full lg:w-5/12 mt-8 lg:mt-0 flex justify-center lg:justify-end lg:items-end relative z-20">
      <img
        src="/images/hero1.png"
        alt="Hero Image"
        className="w-auto h-full object-contain"
      />
    </div>
  </section>
</div>

  );
};

export default Hero;
