"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Game {
  id: number;
  game_name: string;
  release_date: string;
  developer: string;
  publisher: string;
  genre: string;
  platform: string;
  rating: number;
  price: number;
  image: string;
  description: string;
}

const AllAccessories: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const gamesPerPage = 6;
  const router = useRouter();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/api/smartphone-games');
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Failed to fetch smartphone games data:', error);
      }
    };

    fetchGames();
  }, []);

  const startIndex = (page - 1) * gamesPerPage;
  const visibleGames = games.slice(startIndex, startIndex + gamesPerPage);

  const nextPage = () => {
    if (startIndex + gamesPerPage < games.length) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleShowMore = () => {
    router.push('/details');
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-green-700">All Accessories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleGames.map((game) => (
            <div key={game.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <img src={game.image} alt={game.game_name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-green-800">{game.game_name}</h3>
              <p className="text-sm text-gray-500 mt-1">{game.description}</p>
              <p className="text-sm text-gray-500 mt-1">Genre: {game.genre}</p>
              <p className="text-sm text-gray-500">Rating: {game.rating} / 5</p>
              <p className="text-sm text-gray-500">Platform: {game.platform}</p>
              <p className="text-sm text-gray-500">Developer: {game.developer}</p>
              <p className="text-sm text-gray-500">Publisher: {game.publisher}</p>
              <p className="text-sm text-gray-500">Release Date: {game.release_date}</p>
              <p className="text-sm text-gray-500">Price: ${Number(game.price).toFixed(2)}</p>
              <button
                onClick={handleShowMore}
                className="mt-6 px-4 py-2 bg-green-600 text-white rounded-full font-medium shadow-md hover:bg-green-700 transition-colors duration-300">
                Show More Details
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={prevPage}
            disabled={page === 1}
            className={`px-6 py-3 mr-4 rounded-lg font-semibold shadow transition-colors duration-300 ${
              page === 1 ? "bg-gray-400 text-white cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={startIndex + gamesPerPage >= games.length}
            className={`px-6 py-3 rounded-lg font-semibold shadow transition-colors duration-300 ${
              startIndex + gamesPerPage >= games.length ? "bg-gray-400 text-white cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllAccessories;
