import React from 'react';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

const Gold = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Gold Coin",
      description: "Pure 24K gold coin with certification",
      price: "₹50,000",
      image: "https://via.placeholder.com/300x300?text=Gold+Coin",
      weight: "5g",
      purity: "24K"
    },
    {
      id: 2,
      name: "Gold Bar",
      description: "Investment grade gold bar",
      price: "₹5,00,000",
      image: "https://via.placeholder.com/300x300?text=Gold+Bar",
      weight: "50g",
      purity: "24K"
    },
    {
      id: 3,
      name: "Gold Sovereign",
      description: "Historic gold sovereign coin",
      price: "₹35,000",
      image: "https://via.placeholder.com/300x300?text=Gold+Sovereign",
      weight: "4g",
      purity: "22K"
    },
    {
      id: 4,
      name: "Gold Biscuit",
      description: "Pure gold biscuit with hallmark",
      price: "₹2,50,000",
      image: "https://via.placeholder.com/300x300?text=Gold+Biscuit",
      weight: "25g",
      purity: "24K"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Gold Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                <FiHeart className="text-gray-600 hover:text-red-500" />
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 text-sm">Weight: {product.weight}</span>
                <span className="text-gray-500 text-sm">Purity: {product.purity}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-800">{product.price}</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 flex items-center gap-2">
                  <FiShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gold; 