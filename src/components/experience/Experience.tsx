import React from 'react';
import CountUp from 'react-countup';

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:h-[150px] flex items-center justify-center font-roboto">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 w-full">
        
        {/* Column 1 */}
        <div className="flex-1 flex items-center justify-center flex-col">
          <p className='text-primary text-heading'>
            <CountUp start={0} end={3} duration={5} suffix="+" />
          </p>
          <p className="text-center">YEARS OF EXPERIENCE</p>
        </div>

        {/* Column 2 */}
        <div className="flex-1 flex items-center justify-center flex-col">
          <p className='text-primary text-heading'>
            <CountUp start={0} end={20} duration={5} suffix="+" />
          </p>
          <p className="text-center">PROJECTS COMPLETED</p>
        </div>

        {/* Column 3 */}
        <div className="flex-1 flex items-center justify-center flex-col">
          <p className='text-primary text-heading'>
            <CountUp start={0} end={10} duration={5} suffix="+" />
          </p>
          <p className="text-center">HAPPY CLIENTS</p>
        </div>
        
      </div>
    </div>
  );
};

export default Experience;
