"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Accessory {
  id: number;
  accessory_name: string;
  category: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  afflink: string;
}

const AllAccessories: React.FC = () => {
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [page, setPage] = useState(1);
  const accessoriesPerPage = 6;
  const router = useRouter();

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch('/api/all-accessory');
        const data = await response.json();
        setAccessories(data);
      } catch (error) {
        console.error('Failed to fetch accessories data:', error);
      }
    };

    fetchAccessories();
  }, []);

  const startIndex = (page - 1) * accessoriesPerPage;
  const visibleAccessories = accessories.slice(startIndex, startIndex + accessoriesPerPage);

  const nextPage = () => {
    if (startIndex + accessoriesPerPage < accessories.length) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleShowMore = (afflink: string) => {
    router.push(afflink);
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-green-700">All Accessories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleAccessories.map((accessory) => (
            <div key={accessory.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <img src={accessory.image} alt={accessory.accessory_name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-green-800">{accessory.accessory_name}</h3>
              <p className="text-sm text-gray-500 mt-1">{accessory.description}</p>
              <p className="text-sm text-gray-500">Category: {accessory.category}</p>
              <p className="text-sm text-gray-500">Brand: {accessory.brand}</p>
              <p className="text-sm text-gray-500">Price: ${Number(accessory.price).toFixed(2)}</p>
              <button
                onClick={() => handleShowMore(accessory.afflink)}
                className="mt-6 px-4 py-2 bg-green-600 text-white rounded-full font-medium shadow-md hover:bg-green-700 transition-colors duration-300"
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
              page === 1 ? "bg-gray-400 text-white cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={startIndex + accessoriesPerPage >= accessories.length}
            className={`px-6 py-3 rounded-lg font-semibold shadow transition-colors duration-300 ${
              startIndex + accessoriesPerPage >= accessories.length ? "bg-gray-400 text-white cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"
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
