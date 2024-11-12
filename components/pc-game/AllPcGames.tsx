"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Game = {
  id: number;
  game_name: string;
  release_date: string;
  developer: string;
  publisher: string;
  genre: string;
  platform: string;
  rating: number;
  price: number;
  image: string;         // New field for image
  description: string;    // New field for description
};

const AllPcGames: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const gamesPerPage = 6;
  const router = useRouter();

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/games');
        if (!response.ok) {
          throw new Error('Failed to fetch games data');
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        setError('Failed to load games data');
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  const startIndex = (page - 1) * gamesPerPage;
  const visibleGames = games.slice(startIndex, startIndex + gamesPerPage);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleShowMore = () => {
    router.push('/details');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-indigo-700">Top PC Games</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleGames.map((game) => (
            <div key={game.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <div className="w-full h-64 overflow-hidden mb-4 rounded-lg relative">
                <img
                  src={game.image}
                  alt={`${game.game_name} Logo`}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold text-indigo-800">{game.game_name}</h3>
              <p className="text-sm text-gray-500 mt-1">Release Date: {game.release_date}</p>
              <p className="text-sm text-gray-500">Developer: {game.developer}</p>
              <p className="text-sm text-gray-500">Publisher: {game.publisher}</p>
              <p className="text-sm text-gray-500">Genre: {game.genre}</p>
              <p className="text-sm text-gray-500">Platform: {game.platform}</p>
              <p className="text-sm text-gray-500">Rating: {game.rating} / 5</p>
              <p className="text-sm text-gray-500">Price: ${Number(game.price).toFixed(2)}</p>
              <p className="mt-4 text-gray-700">{game.description}</p>
              <button
                onClick={handleShowMore}
                className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-full font-medium shadow-md hover:bg-indigo-700 transition-colors duration-300"
              >
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
              page === 1 ? "bg-gray-400 text-white cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={startIndex + gamesPerPage >= games.length}
            className={`px-6 py-3 rounded-lg font-semibold shadow transition-colors duration-300 ${
              startIndex + gamesPerPage >= games.length ? "bg-gray-400 text-white cursor-not-allowed" : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllPcGames;
