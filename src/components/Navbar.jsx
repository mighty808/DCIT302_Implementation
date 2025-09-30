import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
         <Link to='/'> 
             <div className="w-16">
                <img src={assets.wassceLogo} alt="WAEC Logo" />
            </div>
         </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                About WAEC
              </a>
              <a
                href="https://waecgh.org/timetable/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Exams
              </a>
              <a
                href="/buycheckerpage"
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Buy Checker
              </a>
              <a
                href="/faq"
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
              >
                Faqs
              </a>
              <a
                href="/check-results"
                className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ml-4"
              >
                Check Results
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={!isMobileMenuOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isMobileMenuOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
          <a
            href="/"
            className="text-gray-900 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            About WAEC
          </a>
          <a
            href="https://waecgh.org/timetable/#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Exams
          </a>
          <a
            href="/buycheckerpage"
            className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Buy Checker
          </a>
          <a
            href="/faq"
            className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Faqs
          </a>
          <a
            href="/check-results"
            className="bg-blue-600 text-white hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-medium mt-2"
          >
            Check Results
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;