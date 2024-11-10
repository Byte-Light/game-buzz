// components/GameSection.tsx
import Image from 'next/image';
import React from 'react';

const GameSection: React.FC = () => {
  return (
    <div className="bg-yellow-400 flex flex-col items-center p-4 md:p-8 lg:flex-row lg:justify-center lg:space-x-8">
      {/* Image Container */}
      <div className="w-full lg:w-2/3 xl:w-1/2">
        <div className="bg-black rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/game-section.webp" // Replace with actual image path
            alt="Game Preview"
            layout="responsive"
            width={1440}
            height={720}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Description */}
      <div className="text-center lg:text-left max-w-lg mt-6 lg:mt-0">
        <p className="text-lg md:text-xl lg:text-2xl text-black font-semibold">
          Slide down the hills jumping into and out of the ground, crashing and destroying
          everything on your way in this action-packed adventure. Discover thrilling and
          magical lands filled with zombies, giants, dragons and tons of surprises.
        </p>
      </div>
    </div>
  );
};

export default GameSection;
