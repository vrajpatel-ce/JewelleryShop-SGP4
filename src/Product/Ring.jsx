import React from 'react';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

const Ring = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      description: "Exquisite diamond ring with platinum band",
      price: "₹1,25,000",
      image: "../public/images/products/Rings/ring1.jpg",
      weight: "3g",
      purity: "Platinum"
    },
    {
      id: 2,
      name: "Gold Wedding Band",
      description: "Classic 22K gold wedding band",
      price: "₹65,000",
      image: "../public/images/products/Rings/ring2.jpg",
      weight: "8g",
      purity: "22K"
    },
    {
      id: 3,
      name: "Gemstone Ring",
      description: "Beautiful ring with precious gemstone",
      price: "₹85,000",
      image: "../public/images/products/Rings/ring3.jpg",
      weight: "5g",
      purity: "18K"
    },
    {
      id: 4,
      name: "Couple Rings Set",
      description: "Matching rings for couples",
      price: "₹95,000",
      image: "../public/images/products/Rings/ring4.jpg",
      weight: "10g",
      purity: "18K"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Rings Collection</h1>
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

export default Ring; 