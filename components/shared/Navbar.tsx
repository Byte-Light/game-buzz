"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-white text-3xl font-semibold tracking-wide">GameBuzz</h1>
        </Link>

        {/* Hover-to-Expand Search Bar */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative mx-6 ${
            isHovered ? "w-full md:w-80" : "w-12"
          } h-10 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full transition-all duration-300 ease-in-out overflow-hidden shadow-lg`}
        >
          <input
            type="text"
            placeholder="Search games..."
            className={`absolute left-0 top-0 w-full h-full pl-4 pr-4 text-white placeholder-gray-200 bg-transparent outline-none rounded-full transition-opacity duration-300 ${
              isHovered ? "opacity-100 cursor-text" : "opacity-0 cursor-pointer"
            }`}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          {['Home', 'PC Games', 'Smartphone Games', 'Console Games', 'About'].map((link, index) => (
            <Link key={index} href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/\s/g, '-')}`}>
              <span className="px-5 py-2 text-white bg-gradient-to-r from-teal-400 to-blue-500 hover:from-purple-500 hover:to-pink-500 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-md">
                {link}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
