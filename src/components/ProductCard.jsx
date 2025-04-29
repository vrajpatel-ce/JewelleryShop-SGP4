import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useLogin } from '../context/LoginContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { user } = useLogin();

  const handleAddToCart = async () => {
    console.log('Add to Cart clicked');
    console.log('Current user:', user);
    console.log('Product to add:', product);

    if (!user) {
      alert('Please login to add items to cart');
      return;
    }

    try {
      // Ensure product has all required fields
      const productToAdd = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: 1
      };

      console.log('Adding product to cart:', productToAdd);
      await addToCart(productToAdd);
      console.log('Product added to cart successfully');
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-red-600">₹{product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 