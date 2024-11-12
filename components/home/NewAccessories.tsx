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

const SmartphoneAccessories: React.FC = () => {
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch("/api/accessory");
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
    return <p>{error}</p>;
  }

  return (
    <div className="bg-gradient-to-b from-green-50 to-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-green-700">Latest Accessories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessories.map((accessory) => (
            <div
              key={accessory.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-green-500 transition-all duration-300 transform hover:scale-105"
            >
              {/* Accessory Image */}
              <div className="w-full h-64 overflow-hidden mb-4 rounded-lg relative">
                <img
                  src={accessory.image}
                  alt={`${accessory.accessory_name} Image`}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                />
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 hover:opacity-0 transition-opacity duration-300"></div>
              </div>

              {/* Accessory Name */}
              <h3 className="text-2xl font-semibold text-green-800">{accessory.accessory_name}</h3>
              <p className="text-sm text-gray-500 mt-1">Category: {accessory.category}</p>
              <p className="text-sm text-gray-500">Brand: {accessory.brand}</p>
              <p className="text-sm text-gray-500">Price: {accessory.price}</p>
              <p className="mt-4 text-gray-700">{accessory.description}</p>

              {/* Show More Button */}
              <button
                onClick={handleShowMore}
                className="mt-6 px-4 py-2 bg-green-600 text-white rounded-full font-medium shadow-md hover:bg-green-700 transition-colors duration-300"
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

export default SmartphoneAccessories;
