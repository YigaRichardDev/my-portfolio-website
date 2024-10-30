import React from 'react';

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
      <h2 className="text-pheading font-bold">{title} <span className='text-primary'>{span}</span></h2>
    </div>
  );
};

export default PageTitle;
