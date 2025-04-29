import { useProducts } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function ProductList() {
  const { products, loading, error, filters } = useProducts();
  const navigate = useNavigate();

  // Debug logging
  useEffect(() => {
    console.log('Current filters:', filters);
    console.log('All products:', products);
  }, [filters, products]);

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  );

  if (error) return (
    <div className="text-red-500 text-center p-4">
      {error}
    </div>
  );

  // Filter products based on current filters
  const filteredProducts = products.filter(product => {
    // Debug logging for each product
    console.log('Checking product:', product.name, 'Category:', product.category, 'Against filter:', filters.category);
    
    if (filters.category) {
      // Case-insensitive comparison
      if (product.category.toUpperCase() !== filters.category.toUpperCase()) {
        return false;
      }
    }
    if (filters.metal) {
      // Case-insensitive comparison
      if (product.metal.toUpperCase() !== filters.metal.toUpperCase()) {
        return false;
      }
    }
    if (filters.priceRange) {
      if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) {
        return false;
      }
    }
    return true;
  });

  // Debug logging for filtered results
  console.log('Filtered products:', filteredProducts);

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-600">No products found</h2>
        <p className="text-gray-500 mt-2">Try adjusting your filters or check back later.</p>
        <div className="mt-4 text-sm text-gray-500">
          Current filters: {JSON.stringify(filters, null, 2)}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {filters.category ? filters.category : 'All Products'}
        </h1>
        <div className="text-gray-600">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x300?text=Product+Image';
                }}
              />
              {product.discount > 0 && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">
                  {product.discount}% OFF
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-1">{product.category}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xl font-bold text-gray-900">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-sm text-gray-500">
                  {product.weight}g
                </span>
              </div>
              <button 
                className="mt-4 w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-colors"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList; 