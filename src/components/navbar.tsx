"use client";
import React from "react";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo*/}
            <div className="flex items-center space-x-3">
              <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
              <div className="text-2xl font-bold text-white">Ruba Haroon</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="/"
                  className="text-white hover:bg-sky-500 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white hover:bg-red-500 px-3 py-2 rounded-md text-lg font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="text-white hover:bg-green-500 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Blogs{" "}
                </a>
              </li>
              <li>
                <a
                  href="/skills"
                  className="text-white hover:bg-rose-500 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white hover:bg-violet-500 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            {isOpen ? (
    <HiX onClick={toggleMenu} className="text-2xl text-white hover:text-gray-300" />
  ) : null}


            {/* Social Media Icons */}
            <a
              href="https://www.facebook.com/ruba.haroon.14"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="text-xl text-blue-800 hover:text-blue-400" />
            </a>
            <a
              href="https://github.com/rubaharoon"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-xl text-black hover:text-gray-600" />
            </a>
            <a
              href="https://www.instagram.com/rubaharoon_/?next=%2F"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-xl text-purple-700 hover:text-pink-600" />
            </a>
            <a
              href="https://www.youtube.com/@rubaharoon331"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="text-xl text-red-600 hover:text-red-600" />
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-[#fff] focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <ul className="px-2 pt-2 pb-3 space-y-1">
          <li>
            <a
              href="/"
              className="text-white hover:bg-sky-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-white hover:bg-red-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/blogs"
              className="text-white hover:bg-green-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="/skills"
              className="text-white hover:bg-rose-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-white hover:bg-violet-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Social Media Icons for Mobile */}
        <div className="flex justify-center space-x-4 py-4">
          <a
            href="https://www.facebook.com/ruba.haroon.14"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="text-2xl text-blue-800 hover:text-blue-400" />
          </a>
          <a
            href="https://github.com/rubaharoon"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-2xl text-black hover:text-gray-600" />
          </a>
          <a
            href="https://www.instagram.com/rubaharoon_/?next=%2F"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-2xl text-purple-700 hover:text-pink-600" />
          </a>
          <a
            href="https://www.youtube.com/@rubaharoon331"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="text-2xl text-red-600 hover:text-red-600" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
