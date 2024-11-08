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
    name: 'The Last of Us Part II',
    genre: 'Action-Adventure',
    rating: 4.9,
    description: 'A gritty, emotional story-driven experience set in a post-apocalyptic world.',
  },
  {
    id: 2,
    name: 'God of War',
    genre: 'Action',
    rating: 4.8,
    description: 'An epic journey of Kratos and his son Atreus through Norse mythology.',
  },
  {
    id: 3,
    name: 'Spider-Man: Miles Morales',
    genre: 'Action',
    rating: 4.7,
    description: 'An open-world superhero adventure where you take on the role of Miles Morales.',
  },
  {
    id: 4,
    name: 'Ghost of Tsushima',
    genre: 'Action-Adventure',
    rating: 4.8,
    description: 'Explore feudal Japan as a samurai defending his homeland.',
  },
  {
    id: 5,
    name: 'Horizon Forbidden West',
    genre: 'RPG',
    rating: 4.6,
    description: 'A visually stunning open-world adventure in a post-apocalyptic setting.',
  },
  {
    id: 6,
    name: 'Ratchet & Clank: Rift Apart',
    genre: 'Platformer',
    rating: 4.5,
    description: 'A dimension-hopping adventure with action-packed gameplay.',
  },
];

const ConsoleGames: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-red-700">Top Console Games</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-red-700">{game.name}</h3>
              <p className="text-sm text-gray-500 mt-1">Genre: {game.genre}</p>
              <p className="text-sm text-gray-500">Rating: {game.rating} / 5</p>
              <p className="mt-4 text-gray-700">{game.description}</p>
              <button
                className="mt-6 px-4 py-2 bg-red-600 text-white rounded-full font-medium shadow-md hover:bg-red-700 transition-colors duration-300"
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

export default ConsoleGames;
