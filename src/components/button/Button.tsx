import React from "react";

interface ButtonProps {
  children: React.ReactNode; // Content to display inside the button
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-primary text-center text-white py-p0 px-p2 w-[150px] hover:bg-secondary transition-colors duration-300">
      {children}
    </button>
  );
};

export default Button;
