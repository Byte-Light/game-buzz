"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Define SearchResult interface
interface SearchResult {
  id: number;
  name: string;
  type: 'game' | 'accessory';
  key: string;
  release_date?: string; // Optional for games
  category?: string;     // Optional for accessories
  price?: number;
  image?: string;
}

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/search?query=${encodeURIComponent(searchQuery)}`);
        const data = await response.json();

        if (response.ok) {
          setSearchResults(data);
        } else {
          console.error('Error fetching search results:', data.error);
          setSearchResults([]);
        }
      } catch (error) {
        console.error('Error:', error);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300); // 300ms debounce delay

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

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
            placeholder="Search games or accessories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`absolute left-4 top-0 w-full h-full pl-4 pr-4 text-white placeholder-gray-200 bg-transparent outline-none rounded-full transition-opacity duration-300 ${
              isHovered ? "opacity-100 cursor-text" : "opacity-0 cursor-pointer"
            }`}
          />
        </div>

        {/* Search Results Dropdown */}
        {searchQuery.trim() && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md w-80 max-h-64 overflow-y-auto z-50">
            {isLoading ? (
              <div className="p-4 text-center text-gray-500">Loading...</div>
            ) : searchResults.length > 0 ? (
              searchResults.map((result) => (
                <Link
                  key={result.key}
                  href={result.type === 'game' ? `/games/${result.id}` : `/accessories/${result.id}`}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <img src={result.image} alt={result.name} className="w-10 h-10 rounded" />
                    <div>
                      <h3 className="font-medium text-gray-700">{result.name}</h3>
                      <p className="text-sm text-gray-500">
                        {result.type === 'game' ? result.release_date : result.category}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">No results found</div>
            )}
          </div>
        )}

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
