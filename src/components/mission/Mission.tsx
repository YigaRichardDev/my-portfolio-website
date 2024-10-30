import React from 'react';

const Mission: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:h-[400px] flex flex-col lg:flex-row font-roboto space-y-8 lg:space-y-0 lg:space-x-8">
      
      {/* Content Column */}
      <div className="w-full lg:flex-1 lg:pr-16 space-y-4">
        <h2 className="text-heading font-semibold">Values and <span className='text-primary'>Mission</span></h2>
        <p className="mt-4 text-gray-700 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eius, eos explicabo ratione molestias nobis nulla ipsam, dicta quaerat perferendis nesciunt numquam error blanditiis voluptas repellat voluptate adipisci delectus eligendi eaque commodi. Tempore debitis velit sequi, aperiam nulla fuga cupiditate temporibus ipsum suscipit provident quae.
            
        </p>
        <p className="mt-4 text-gray-700 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti expedita numquam mollitia atque dignissimos officia quis assumenda consequuntur odit?</p>
      </div>

      {/* Image Column */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
        <img
          src="/images/mission.jfif"
          alt="Background"
          className="w-full h-60 sm:h-80 lg:h-full object-cover"
        />
      </div>

    </div>
  );
};

export default Mission;
