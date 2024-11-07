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
    name: 'PUBG Mobile',
    genre: 'Battle Royale',
    rating: 4.7,
    description: 'A popular battle royale game where you fight to be the last one standing.',
  },
  {
    id: 2,
    name: 'Candy Crush Saga',
    genre: 'Puzzle',
    rating: 4.4,
    description: 'Match candies to progress through levels in this classic puzzle game.',
  },
  {
    id: 3,
    name: 'Genshin Impact',
    genre: 'Action RPG',
    rating: 4.6,
    description: 'An open-world action RPG with stunning visuals and a rich story.',
  },
  // Add more games as needed
];

const SmartphoneGames: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Smartphone Games</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div key={game.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-700">{game.name}</h3>
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

export default SmartphoneGames;
