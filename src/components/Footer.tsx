
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-16 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <p className="text-lg font-medium">oh.studio</p>
            <p className="text-gray-500 mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <Link to="/" className="mb-2 md:mb-0 hover:text-gray-500 transition-colors">Home</Link>
            <Link to="/projects" className="mb-2 md:mb-0 hover:text-gray-500 transition-colors">Projects</Link>
            <Link to="/about" className="mb-2 md:mb-0 hover:text-gray-500 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-gray-500 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
