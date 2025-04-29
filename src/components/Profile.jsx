import React from 'react';
import { useLogin } from '../context/LoginContext';
import { useCart } from '../context/CartContext';
import { FiUser, FiMail, FiCalendar, FiMapPin, FiShoppingBag, FiHeart, FiEdit2, FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';

const Profile = () => {
  const { user, handleSignOut } = useLogin();
  const { cartItems, total, removeFromCart, updateQuantity } = useCart();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Please log in to view your profile</h2>
          <p className="text-gray-600">You need to be logged in to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="h-40 bg-gradient-to-r from-red-500 to-red-700 relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="relative">
                <img
                  src={user.photoURL || 'https://via.placeholder.com/150'}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  <FiEdit2 className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
          <div className="pt-16 pb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800">{user.displayName || 'User'}</h1>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <p className="text-gray-600 flex items-center">
                <FiMail className="mr-2" />
                {user.email}
              </p>
              <span className="text-gray-300">•</span>
              <p className="text-gray-600 flex items-center">
                <FiCalendar className="mr-2" />
                Member since {new Date(user.metadata.creationTime).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Shopping Cart Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">Your Cart</h2>
          </div>
          {cartItems.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-gray-600">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-full hover:bg-gray-100"
                            disabled={item.quantity <= 1}
                          >
                            <FiMinus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <FiPlus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-800">₹{(item.price * item.quantity).toFixed(2)}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 mt-2"
                        >
                          <FiTrash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-medium text-gray-800">Total:</span>
                  <span className="text-xl font-bold text-gray-900">₹{total.toFixed(2)}</span>
                </div>
                <button
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                  onClick={() => {
                    // TODO: Implement checkout functionality
                    console.log('Proceeding to checkout...');
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">Recent Orders</h2>
          </div>
          <div className="divide-y divide-gray-100">
            <div className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-800">Gold Chain</h4>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-800">₹45,000</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                    Delivered
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-800">Diamond Ring</h4>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-800">₹75,000</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mt-1">
                    Processing
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-gray-100">
            <button className="text-red-600 hover:text-red-700 font-medium">
              View All Orders →
            </button>
          </div>
        </div>

        {/* Sign Out Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 