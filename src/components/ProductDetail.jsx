import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { useLogin } from '../context/LoginContext';
import { incrementProductViews } from '../utils/productUtils';
import { FiShoppingCart } from 'react-icons/fi';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { user } = useLogin();
  const [loading, setLoading] = useState(false);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    if (product) {
      incrementProductViews(product.id);
    }
  }, [product]);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = async () => {
    if (!user) {
      alert('Please login to add items to cart');
      return;
    }

    try {
      setLoading(true);
      await addToCart({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        imageUrl: product.images[0], // Using first image from images array
        quantity: 1
      });
      alert('Product added to cart successfully!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative h-96">
            <img
              src={product.images[0]} 
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <img 
                key={index}
                src={image}
                alt={`${product.name} - ${index + 1}`}
                className="w-full h-20 object-cover rounded cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-900">
              ₹{product.price.toLocaleString()}
            </span>
            {product.discount > 0 && (
              <span className="text-red-500">
                {product.discount}% OFF
              </span>
            )}
          </div>
          
          <div className="space-y-2">
            <p><span className="font-semibold">Category:</span> {product.category}</p>
            <p><span className="font-semibold">Metal:</span> {product.metal}</p>
            <p><span className="font-semibold">Purity:</span> {product.purity}</p>
            <p><span className="font-semibold">Weight:</span> {product.weight}g</p>
          </div>

          <div className="pt-4">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="pt-4">
            <h2 className="text-xl font-semibold mb-2">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key}>
                  <span className="font-semibold">{key}:</span> {value}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button 
              onClick={handleAddToCart}
              disabled={loading}
              className={`bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Adding to Cart...' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 