"use client";
import React from "react";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-yellow-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo or Brand Name */}
           
            <a href="/" className="text-white font-bold text-xl">Ruba Haroon.
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
          <ul className="flex space-x-6">

            <li><a href="/" className="text-white hover:bg-sky-500 px-3 py-2 rounded-md text-lg font-medium">Home</a></li>
            <li><a href="/about" className="text-white hover:bg-red-500 px-3 py-2 rounded-md text-lg font-medium">About</a></li>
            <li><a href="/blogs" className="text-white hover:bg-green-500 px-3 py-2 rounded-md text-lg font-medium">Blogs </a></li>
            <li><a href="/skills" className="text-white hover:bg-rose-500 px-3 py-2 rounded-md text-lg font-medium">Skills</a></li>
            <li><a href="/contact" className="text-white hover:bg-violet-500 px-3 py-2 rounded-md text-lg font-medium">Contact Us</a></li>

          </ul>
          </div>
          
          {/* Mobile menu button (hamburger icon) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <ul className="px-2 pt-2 pb-3 space-y-1">
          <li><a href="/" className="text-white hover:bg-sky-500 block px-3 py-2 rounded-md text-base font-medium">Home</a></li>
          <li><a href="/about" className="text-white hover:bg-red-500 block px-3 py-2 rounded-md text-base font-medium">About</a></li>
          <li><a href="/blogs" className="text-white hover:bg-green-500 block px-3 py-2 rounded-md text-base font-medium">Blogs</a></li>
         <li><a href="/skills" className="text-white hover:bg-rose-500 block px-3 py-2 rounded-md text-base font-medium">Skills</a></li>
         <li><a href="/contact" className="text-white hover:bg-violet-500 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a></li>

          </ul>
        </div>
      
      
    </nav>
  );
};

export default Navbar;
