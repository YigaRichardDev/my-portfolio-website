import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // List of nav links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 font-roboto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="">
              <img
                src="/images/logo.png"
                alt="ry-logo"
                style={{ width: "100px", height: "auto" }}
              />
            </Link>
          </div>

          {/* Menu Icon for mobile */}
          <div className="md:hidden">
            <IconButton onClick={toggleMenu}>
              {isOpen ? (
                <CloseIcon fontSize="large" />
              ) : (
                <MenuIcon fontSize="large" />
              )}
            </IconButton>
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-link hover:text-primary transition-colors ${
                    isActive ? "text-primary" : ""
                  }`
                }
                style={{ textDecoration: "none" }} // Remove underline
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="#"
              className="bg-primary text-center text-white py-p0 px-p2  hover:bg-secondary transition-colors duration-300"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu (full screen on smaller screens) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col p-6 space-y-6">
          {/* Logo and Close button */}
          <div className="flex justify-between items-center w-full">
            <Link to="/" className="">
              <img
                src="/images/logo.png"
                alt="ry-logo"
                style={{ width: "100px", height: "auto" }}
              />
            </Link>
            <IconButton onClick={toggleMenu}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </div>

          {/* Navigation links */}
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `text-link hover:text-primary transition-colors ${
                  isActive ? "text-primary" : ""
                }`
              }
              style={{ textDecoration: "none" }}
            >
              {link.name}
            </NavLink>
          ))}
          <Link
              to="#"
              className="bg-primary text-center text-white py-p0 px-p2  hover:bg-secondary transition-colors duration-300"
            >
              Hire Me
            </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
