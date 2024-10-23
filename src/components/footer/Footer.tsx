import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Importing an icon from Material UI

const Footer: React.FC = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white font-roboto h-fh flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-2">
        {/* Left Column: Copyright */}
        <div className="text-link">
          © {new Date().getFullYear()} Richard Yiga. All rights reserved.
        </div>

        {/* Right Column: Upward Icon */}
        <div>
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center p-2 bg-primary hover:bg-secondary transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUpwardIcon />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
