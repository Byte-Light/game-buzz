import React from 'react';

interface Game {
  title: string;
  imageUrl: string;
}

const games: Game[] = [
  { title: 'Dragon Hills', imageUrl: '/images/related-game-1.webp' },
  { title: 'Aliens Drive Me Crazy', imageUrl: '/images/related-game-2.webp' },
  { title: 'Daddy Was a Thief', imageUrl: '/images/related-game-3.webp' },
];

const RelatedGames: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 text-center py-12 px-4 md:px-8">
      <h2 className="text-yellow-500 text-3xl font-bold mb-10 tracking-widest">RELATED GAMES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {games.map((game, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={game.imageUrl}
              alt={game.title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold">{game.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-10 px-8 py-3 border border-yellow-500 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition duration-300">
        VIEW ALL
      </button>
    </div>
  );
};

export default RelatedGames;
