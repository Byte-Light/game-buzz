"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Game = {
  id: number;
  name: string;
  release_date: string;
  developer: string;
  publisher: string;
  genre: string;
  platform: string;
  rating: number;
  price: string;
  image: string;
  description: string;
};

const TopVideoGame: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/api/games");
        if (!response.ok) {
          throw new Error("Failed to fetch games data");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setGames(data);
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (error) {
        console.error("Error fetching games:", error);
        setError("Failed to load games data");
      }
    };
    fetchGames();
  }, []);

  const handleShowMore = () => {
    router.push("/details");
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-indigo-700">Video Games Top Chart</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105 border-2 border-transparent hover:border-indigo-600"
            >
              <div className="w-full h-64 overflow-hidden mb-4 rounded-lg relative">
                <img
                  src={game.image}
                  alt={`${game.name} Logo`}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 hover:opacity-0 transition-opacity duration-300"></div>
              </div>

              <h3 className="text-2xl font-semibold text-indigo-800">{game.name}</h3>
              <p className="text-sm text-gray-500 mt-1">Genre: {game.genre}</p>
              <p className="text-sm text-gray-500">Rating: {game.rating} / 5</p>
              <p className="text-sm text-gray-500">Platform: {game.platform}</p>
              <p className="text-sm text-gray-500">Price: {game.price}</p>
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
      </div>
    </div>
  );
};

export default TopVideoGame;
