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
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <div className="bg-gray-900 min-h-screen py-10 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-12 text-gradient from-pink-500 to-purple-600">
          Top Video Games
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={game.image}
                  alt={`${game.name} Image`}
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-3xl font-semibold text-pink-400">{game.name}</h3>
                <p className="text-gray-400 text-sm">Genre: {game.genre}</p>
                <p className="text-gray-400 text-sm">Rating: {game.rating} / 5</p>
                <p className="text-gray-400 text-sm">Platform: {game.platform}</p>
                <p className="text-gray-400 text-sm">Price: {game.price}</p>
                <p className="mt-4 text-gray-300 text-sm line-clamp-3">{game.description}</p>

                <button
                  onClick={handleShowMore}
                  className="mt-6 w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  Show More Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopVideoGame;
