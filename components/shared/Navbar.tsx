"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="text-white text-3xl font-bold tracking-wide">GameBuzz</h1>
        </Link>

        {/* Hover-to-Expand Search Bar */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative mx-6 h-10 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full transition-all duration-300 ease-in-out overflow-hidden shadow-md ${
            isHovered ? "w-full md:w-80" : "w-12"
          }`}
        >
          <input
            type="text"
            placeholder="Search games..."
            className={`absolute left-4 top-0 w-full h-full pl-4 pr-4 text-white placeholder-gray-200 bg-transparent outline-none rounded-full transition-opacity duration-300 ${
              isHovered ? "opacity-100 cursor-text" : "opacity-0 cursor-pointer"
            }`}
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {['Home', 'Video Games', 'Accessories', 'About'].map((link, index) => (
            <Link key={index} href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/\s/g, '-')}`}>
              <span className="px-4 py-2 text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-teal-400 hover:to-blue-500 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-md">
                {link}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;