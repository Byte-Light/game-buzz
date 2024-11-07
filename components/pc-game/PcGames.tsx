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
  // Add more games as needed
];

const PcGames: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">PC Games</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div key={game.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900">{game.name}</h3>
              <p className="text-sm text-gray-600">Genre: {game.genre}</p>
              <p className="text-sm text-gray-600">Rating: {game.rating} / 5</p>
              <p className="mt-4 text-gray-700">{game.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PcGames;
