import React from 'react';
import { useLogin } from '../context/LoginContext';
import { FiMail, FiPhone, FiMapPin, FiCalendar, FiEdit2, FiShoppingBag, FiHeart, FiClock } from 'react-icons/fi';

const Profile = () => {
  const { user, handleSignOut } = useLogin();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Please log in to view your profile</h2>
        </div>
      </div>
    );
  }

  // Dummy data for demonstration
  const recentOrders = [
    { id: 1, item: 'Diamond Ring', date: '2024-03-01', status: 'Delivered', price: '$999' },
    { id: 2, item: 'Gold Necklace', date: '2024-02-28', status: 'In Transit', price: '$799' },
    { id: 3, item: 'Silver Bracelet', date: '2024-02-25', status: 'Processing', price: '$299' },
  ];

  const wishlistItems = [
    { id: 1, name: 'Sapphire Earrings', price: '$599', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Pearl Necklace', price: '$449', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Ruby Ring', price: '$899', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
          <div className="relative px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="-mt-24 relative">
                <img
                  src={user.photoURL || 'https://via.placeholder.com/150'}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-50">
                  <FiEdit2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="mt-6 sm:mt-0 sm:ml-6 text-center sm:text-left flex-1">
                <h1 className="text-2xl font-bold text-gray-900">{user.displayName || 'User'}</h1>
                <p className="text-gray-500 flex items-center justify-center sm:justify-start mt-1">
                  <FiMail className="mr-2" /> {user.email}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Premium Member</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Verified Buyer</span>
                </div>
              </div>
              <div className="mt-6 sm:mt-0">
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <FiShoppingBag className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Total Orders</p>
                <h3 className="text-xl font-bold text-gray-900">24</h3>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                <FiHeart className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Wishlist Items</p>
                <h3 className="text-xl font-bold text-gray-900">12</h3>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-pink-100 text-pink-600">
                <FiClock className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Member Since</p>
                <h3 className="text-xl font-bold text-gray-900">2023</h3>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <FiMapPin className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Saved Addresses</p>
                <h3 className="text-xl font-bold text-gray-900">3</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders and Wishlist */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Orders</h2>
              <div className="space-y-4">
                {recentOrders.map(order => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div>
                      <h3 className="font-medium text-gray-900">{order.item}</h3>
                      <p className="text-sm text-gray-500 flex items-center">
                        <FiCalendar className="mr-2" /> {order.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-medium text-gray-900">{order.price}</p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'}`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                View All Orders →
              </button>
            </div>
          </div>

          {/* Wishlist */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Wishlist</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {wishlistItems.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                View Full Wishlist →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 