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
  {
    id: 4,
    name: 'Clash of Clans',
    genre: 'Strategy',
    rating: 4.5,
    description: 'Build your village, raise a clan, and battle with other players worldwide.',
  },
  {
    id: 5,
    name: 'Among Us',
    genre: 'Party',
    rating: 4.3,
    description: 'A multiplayer social deduction game where crewmates must find the imposter.',
  },
  {
    id: 6,
    name: 'Call of Duty: Mobile',
    genre: 'Shooter',
    rating: 4.6,
    description: 'A mobile adaptation of the classic Call of Duty shooter franchise.',
  },
];

const SmartphoneGames: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-green-700">Top Smartphone Games</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div key={game.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-green-800">{game.name}</h3>
              <p className="text-sm text-gray-500 mt-1">Genre: {game.genre}</p>
              <p className="text-sm text-gray-500">Rating: {game.rating} / 5</p>
              <p className="mt-4 text-gray-700">{game.description}</p>
              <button
                className="mt-6 px-4 py-2 bg-green-600 text-white rounded-full font-medium shadow-md hover:bg-green-700 transition-colors duration-300"
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

export default SmartphoneGames;
