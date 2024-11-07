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
  // Add more games as needed
];

const ConsoleGames: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-700">Console Games</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <div key={game.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-red-700">{game.name}</h3>
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

export default ConsoleGames;
