import React from 'react';

const DownloadBanner: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center p-8 md:flex-row md:text-left md:justify-between md:items-center bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg rounded-lg space-y-6 md:space-y-0 md:px-12">
      <div className="text-white max-w-md">
        <h2 className="text-3xl font-extrabold mb-4">DRAGON HILLS 2</h2>
        <p className="text-gray-200 leading-relaxed">
          Zombies! ...Where??? ...Dragons!...What???<br />
          Cowboys, armored mechs and spaceships! Why?!<br />
          So many questions... No time for answers now, guys.<br />
          The zombie apocalypse is already here! Hurry up! Hop on your machine dragon and fight to save humanity!
        </p>
      </div>
      <div className="flex space-x-6 mt-6 md:mt-0">
        <a href="#" className="transform hover:scale-105 transition w-40 h-14">
          <img src="/images/apple-store.webp" alt="Download on the App Store" className="w-full h-full object-contain" />
        </a>
        <a href="#" className="transform hover:scale-105 transition w-40 h-14">
          <img src="/images/google-play.webp" alt="Get it on Google Play" className="w-full h-full object-contain" />
        </a>
        <a href="#" className="transform hover:scale-105 transition w-40 h-14">
          <img src="/images/windows-store.webp" alt="Get it on Windows Store" className="w-full h-full object-contain" />
        </a>
      </div>
    </div>
  );
};

export default DownloadBanner;
