"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Accessory = {
  id: number;
  accessory_name: string;
  category: string;
  brand: string;
  price: string;
  image: string;
  description: string;
};

const NewAccessories: React.FC = () => {
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch("/api/top-accessory");
        if (!response.ok) {
          throw new Error("Failed to fetch accessories data");
        }
        const data = await response.json();
        setAccessories(data);
      } catch (error) {
        console.error("Error fetching accessories:", error);
        setError("Failed to load accessories data");
      }
    };
    fetchAccessories();
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
        <h2 className="text-5xl font-bold text-center mb-12 text-gradient from-green-400 to-blue-500">
          Latest Accessories
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessories.map((accessory) => (
            <div
              key={accessory.id}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={accessory.image}
                  alt={`${accessory.accessory_name} Image`}
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-3xl font-semibold text-green-300">{accessory.accessory_name}</h3>
                <p className="text-gray-400 text-sm">Category: {accessory.category}</p>
                <p className="text-gray-400 text-sm">Brand: {accessory.brand}</p>
                <p className="text-gray-400 text-sm">Price: {accessory.price}</p>
                <p className="mt-4 text-gray-300 text-sm line-clamp-3">{accessory.description}</p>

                <button
                  onClick={handleShowMore}
                  className="mt-6 w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
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

export default NewAccessories;
