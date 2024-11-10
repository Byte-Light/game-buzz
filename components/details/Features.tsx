import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center p-4 md:p-8">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Awesome FEATURES:
      </h2>
      <ul className="text-gray-600 space-y-2 md:space-y-3">
        <li>• Super fun, fast and furious gameplay</li>
        <li>• Fully destructible terrain (buildings, bridges, vehicles and more)</li>
        <li>• Epic boss battles, 28 towers to conquer and 4 completely different and exciting worlds to explore</li>
        <li>• Upgradeable weapons, dragons and explosive power-ups available for unlocking</li>
        <li>• Easy to learn, intuitive one-touch controls combined with innovative gameplay</li>
        <li>• Achievements and leaderboards to compete with friends</li>
      </ul>
    </section>
  );
};

export default Features;
