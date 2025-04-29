import React from 'react';
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

const Ambassador = () => {
  const ambassadors = [
    {
      id: 1,
      name: "Priyanka Sharma",
      title: "Celebrity Brand Ambassador",
      image: "",
      description: "Award-winning actress and fashion icon, representing our luxury collection with grace and elegance.",
      quote: "Jewelry is not just an accessory; it's an expression of who you are.",
      social: {
        instagram: "https://instagram.com/priyanka",
        twitter: "https://twitter.com/priyanka",
        facebook: "https://facebook.com/priyanka"
      },
      featured: true
    },
    {
      id: 2,
      name: "Aisha Patel",
      title: "Fashion Influencer",
      image: "https://images.unsplash.com/photo-1621784562803-70c1a494f833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Leading fashion influencer known for her contemporary style and trendsetting jewelry combinations.",
      quote: "Modern elegance is about making bold choices that reflect your personality.",
      social: {
        instagram: "https://instagram.com/aisha",
        twitter: "https://twitter.com/aisha",
        facebook: "https://facebook.com/aisha"
      }
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      title: "Celebrity Stylist",
      image: "https://images.unsplash.com/photo-1621784562516-c3c1a58e7522?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Celebrity stylist with an eye for timeless pieces that make a statement.",
      quote: "The right piece of jewelry can transform any outfit into a masterpiece.",
      social: {
        instagram: "https://instagram.com/rajesh",
        twitter: "https://twitter.com/rajesh",
        facebook: "https://facebook.com/rajesh"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Brand Ambassadors
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the extraordinary personalities who embody our brand's values and bring our jewelry to life.
          </p>
        </div>

        {/* Featured Ambassador */}
        {ambassadors.filter(amb => amb.featured).map(ambassador => (
          <div key={ambassador.id} className="mb-24">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-96 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-yellow-500/20" />
                    <img
                      src={ambassador.image}
                      alt={ambassador.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{ambassador.name}</h2>
                  <p className="text-red-600 font-medium mb-6">{ambassador.title}</p>
                  <p className="text-gray-600 mb-6">{ambassador.description}</p>
                  <blockquote className="italic text-lg text-gray-800 mb-8">
                    "{ambassador.quote}"
                  </blockquote>
                  <div className="flex space-x-6">
                    <a href={ambassador.social.instagram} className="text-gray-600 hover:text-red-600 transition-colors">
                      <FiInstagram size={24} />
                    </a>
                    <a href={ambassador.social.twitter} className="text-gray-600 hover:text-red-600 transition-colors">
                      <FiTwitter size={24} />
                    </a>
                    <a href={ambassador.social.facebook} className="text-gray-600 hover:text-red-600 transition-colors">
                      <FiFacebook size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Ambassadors Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {ambassadors.filter(amb => !amb.featured).map(ambassador => (
            <div key={ambassador.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-yellow-500/10" />
                <img
                  src={ambassador.image}
                  alt={ambassador.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{ambassador.name}</h3>
                <p className="text-red-600 font-medium mb-4">{ambassador.title}</p>
                <p className="text-gray-600 mb-6">{ambassador.description}</p>
                <blockquote className="italic text-gray-800 mb-6">
                  "{ambassador.quote}"
                </blockquote>
                <div className="flex space-x-4">
                  <a href={ambassador.social.instagram} className="text-gray-600 hover:text-red-600 transition-colors">
                    <FiInstagram size={20} />
                  </a>
                  <a href={ambassador.social.twitter} className="text-gray-600 hover:text-red-600 transition-colors">
                    <FiTwitter size={20} />
                  </a>
                  <a href={ambassador.social.facebook} className="text-gray-600 hover:text-red-600 transition-colors">
                    <FiFacebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ambassador; 