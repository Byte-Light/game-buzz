"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { games as allGames, Game } from '../../data/ConsoleGamesData';

const AllConsoleGames: React.FC = () => {
  const [page, setPage] = useState(1);
  const gamesPerPage = 6;
  const router = useRouter();

  const startIndex = (page - 1) * gamesPerPage;
  const visibleGames = allGames.slice(startIndex, startIndex + gamesPerPage);

  const nextPage = () => {
    if (startIndex + gamesPerPage < allGames.length) {
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
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-red-700">Top Console Games</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleGames.map((game) => (
            <div
              key={game.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-red-700">{game.name}</h3>
              <p className="text-sm text-gray-500 mt-1">Genre: {game.genre}</p>
              <p className="text-sm text-gray-500">Rating: {game.rating} / 5</p>
              <p className="mt-4 text-gray-700">{game.description}</p>
              <button
                onClick={handleShowMore}
                className="mt-6 px-4 py-2 bg-red-600 text-white rounded-full font-medium shadow-md hover:bg-red-700 transition-colors duration-300"
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
              page === 1 ? "bg-gray-400 text-white cursor-not-allowed" : "bg-red-600 text-white hover:bg-red-700"
            }`}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={startIndex + gamesPerPage >= allGames.length}
            className={`px-6 py-3 rounded-lg font-semibold shadow transition-colors duration-300 ${
              startIndex + gamesPerPage >= allGames.length ? "bg-gray-400 text-white cursor-not-allowed" : "bg-red-600 text-white hover:bg-red-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllConsoleGames;