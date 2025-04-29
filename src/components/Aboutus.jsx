import React from 'react';
import { FiAward, FiHeart, FiGem, FiUsers } from 'react-icons/fi';

const AboutUs = () => {
  const milestones = [
    {
      year: "1995",
      title: "The Beginning",
      description: "Started as a small family jewellery workshop with a dream to create timeless pieces."
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Opened our first flagship store, bringing elegant designs to a wider audience."
    },
    {
      year: "2015",
      title: "Innovation",
      description: "Introduced modern design techniques while preserving traditional craftsmanship."
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Recognized internationally for our unique designs and quality craftsmanship."
    }
  ];

  const values = [
    {
      icon: <FiGem className="w-6 h-6" />,
      title: "Quality Craftsmanship",
      description: "Every piece is crafted with meticulous attention to detail and the finest materials."
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Passion for Design",
      description: "Our designs blend traditional aesthetics with contemporary elegance."
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Customer Trust",
      description: "Building lasting relationships through transparency and exceptional service."
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Excellence",
      description: "Committed to maintaining the highest standards in jewellery crafting."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              A legacy of crafting timeless elegance since 1995
            </p>
          </div>
        </div>
      </div>

      {/* Founder's Story */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="aspect-w-4 aspect-h-5">
                  <img
                    src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Kaushil Soni"
                    className="object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg">
                  <p className="font-medium">Since 1995</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Kaushil Soni
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  For over two decades, Kaushil Soni has been the creative force behind our elegant jewellery designs. His journey began in 1995 with a simple yet powerful vision: to create jewellery that captures the essence of timeless beauty while embracing contemporary design.
                </p>
                <p>
                  Drawing inspiration from India's rich cultural heritage and combining it with modern aesthetics, Kaushil has developed a unique style that resonates with jewelry enthusiasts worldwide. Each piece tells a story of craftsmanship, passion, and dedication to excellence.
                </p>
                <p>
                  "My philosophy is simple - every piece of jewellery should not just be worn, but experienced. It should make the wearer feel special, confident, and connected to our rich tradition of craftsmanship."
                </p>
                <p className="italic">- Kaushil Soni</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Journey</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="text-red-600 text-2xl font-bold mb-2">{milestone.year}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
                {index !== milestones.length - 1 && (
                  <div className="hidden md:block absolute top-4 -right-4 w-8 h-0.5 bg-red-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workshop Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Workshop
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  In our state-of-the-art workshop, traditional craftsmanship meets modern technology. Every piece of jewellery is crafted with precision, passion, and attention to detail that has become synonymous with the Kaushil Soni name.
                </p>
                <p>
                  Our master craftsmen, many of whom have been with us for decades, bring their expertise and dedication to every creation. Using the finest materials and cutting-edge techniques, we ensure that each piece meets our exacting standards of quality and beauty.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Workshop"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Craftsmanship"
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;