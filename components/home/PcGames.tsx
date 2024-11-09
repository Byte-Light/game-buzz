import React from 'react';

type Game = {
  id: number;
  name: string;
  genre: string;
  rating: number;
  description: string;
};

const games: Game[] = [
  {
    id: 1,
    name: 'Cyberpunk 2077',
    genre: 'Action RPG',
    rating: 4.5,
    description: 'An open-world, action-adventure story set in Night City.',
  },
  {
    id: 2,
    name: 'The Witcher 3: Wild Hunt',
    genre: 'RPG',
    rating: 4.9,
    description: 'A story-driven, open-world RPG set in a visually stunning fantasy universe.',
  },
  {
    id: 3,
    name: 'Minecraft',
    genre: 'Sandbox',
    rating: 4.8,
    description: 'A game about placing blocks and going on adventures.',
  },
  {
    id: 4,
    name: 'Red Dead Redemption 2',
    genre: 'Action-Adventure',
    rating: 4.7,
    description: 'An epic tale of life in America’s unforgiving heartland.',
  },
  {
    id: 5,
    name: 'DOOM Eternal',
    genre: 'Shooter',
    rating: 4.6,
    description: 'Battle across dimensions to save humanity from extinction.',
  },
  {
    id: 6,
    name: 'Assassin’s Creed Valhalla',
    genre: 'Action RPG',
    rating: 4.4,
    description: 'Become a legendary Viking on a quest for glory in England.',
  },
];

const PcGames: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-indigo-700">Top PC Games</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div key={game.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-indigo-800">{game.name}</h3>
              <p className="text-sm text-gray-500 mt-1">Genre: {game.genre}</p>
              <p className="text-sm text-gray-500">Rating: {game.rating} / 5</p>
              <p className="mt-4 text-gray-700">{game.description}</p>
              <button
                className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-full font-medium shadow-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Show More Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PcGames;
