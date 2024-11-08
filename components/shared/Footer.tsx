import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Footer Content - Centered */}
        <div className="text-center mb-8">
          {/* Logo and Description */}
          <h2 className="text-3xl font-bold tracking-wider">GameBuzz</h2>
          <p className="mt-4 text-sm leading-relaxed max-w-xs mx-auto">
            Your ultimate destination for the latest in gaming news, reviews, and guides.
          </p>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-500 pt-6">
          <p className="text-center text-gray-300 text-sm mb-2">
            &copy; {new Date().getFullYear()} GameBuzz. All rights reserved.
          </p>
          <p className="text-center text-gray-300 text-sm">
            Made with ❤️ by{' '}
            <Link href="https://bytlight.net/" className="text-blue-300 hover:text-white transition duration-200">
              Sheikh Yeamin
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
