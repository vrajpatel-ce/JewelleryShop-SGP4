import React, { useState, useEffect } from 'react';
import { FiClock, FiTag, FiInfo } from 'react-icons/fi';

const Offers = () => {
  // Sample offers data - in a real app, this would come from an API or database
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: "Summer Special Discount",
      description: "Get 20% off on all gold jewellery",
      deadline: "2024-06-30T23:59:59",
      discountPercentage: 20,
      code: "SUMMER20"
    },
    {
      id: 2,
      title: "First Purchase Offer",
      description: "Get ₹2000 off on your first purchase above ₹20,000",
      deadline: "2024-05-15T23:59:59",
      discountAmount: 2000,
      code: "FIRST2000"
    },
    {
      id: 3,
      title: "Flash Sale",
      description: "Get 15% off on diamond jewellery for next 24 hours",
      deadline: "2024-04-30T23:59:59",
      discountPercentage: 15,
      code: "FLASH15"
    }
  ]);

  // Sort offers by deadline (nearest deadline first)
  useEffect(() => {
    const sortedOffers = [...offers].sort((a, b) => 
      new Date(a.deadline) - new Date(b.deadline)
    );
    setOffers(sortedOffers);
  }, []);

  // Function to calculate time remaining
  const getTimeRemaining = (deadline) => {
    const total = new Date(deadline) - new Date();
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) return `${days} days left`;
    if (hours > 0) return `${hours} hours left`;
    if (minutes > 0) return `${minutes} minutes left`;
    return 'Expired';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Current Offers</h1>
        
        <div className="space-y-6">
          {offers.map((offer) => (
            <div 
              key={offer.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">{offer.title}</h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    <FiClock className="mr-1" />
                    {getTimeRemaining(offer.deadline)}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{offer.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="inline-flex items-center text-sm text-gray-500">
                      <FiTag className="mr-1" />
                      Code: {offer.code}
                    </span>
                    <span className="inline-flex items-center text-sm text-gray-500">
                      <FiInfo className="mr-1" />
                      {offer.discountPercentage 
                        ? `${offer.discountPercentage}% off`
                        : `₹${offer.discountAmount} off`
                      }
                    </span>
                  </div>
                  
                  <button 
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                    onClick={() => {
                      // TODO: Implement copy to clipboard functionality
                      navigator.clipboard.writeText(offer.code);
                    }}
                  >
                    Copy Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers; 