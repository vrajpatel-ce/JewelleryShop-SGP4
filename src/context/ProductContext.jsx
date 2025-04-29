import { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import { db } from '../config/firebase';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: null,
    metal: null,
    priceRange: null,
    sortBy: 'newest'
  });

  // Product categories based on your navigation
  const categories = {
    JEWELLERY: [
      'CHAIN', 'JEWELLERY SET', 'JHUMKA',
      'NECKLACE', 'RINGS', 'LOCKET',
      'BANGLES', 'EARRINGS', 'HARAM',
      'BRACELETS', 'PENDANT', 'KADA',
      'NOSE STUDS', 'ANKLETS', 'PAYAL',
      'CHOKER SET', 'PEARL', 'SECOND STUD',
      'DAILY WEAR', 'STUDS', 'VADDANAM', 'MOTI SET'
    ],
    METALS: [
      'GOLD', 'DIAMOND', 'SILVER',
      'PLATINUM', 'GEMSTONE', 'WHITE GOLD', 'ROSE GOLD'
    ],
    WEDDING: [
      'BRIDAL SET', 'MANGALSUTRA', 'COUPLE RINGS',
      'ENGAGEMENT RINGS', 'BRIDAL NATH', 'MAANG TIKKA', 'ANNIVERSARY'
    ],
    FOR: [
      'BABY', 'KIDS', 'GIRLS', 'BOYS',
      'MEN', 'WOMEN', 'BRIDE', 'GROOM'
    ],
    PURITY: [
      '18 CARAT', '20 CARAT', '22 CARAT', '24 CARAT'
    ]
  };

  // Fetch products with filters
  const fetchProducts = async () => {
    try {
      setLoading(true);
      let q = collection(db, 'products');

      // Create a new array for query constraints
      const queryConstraints = [];

      // Add filters to query constraints
      if (filters.category) {
        queryConstraints.push(where('category', '==', filters.category));
      }
      if (filters.metal) {
        queryConstraints.push(where('metal', '==', filters.metal));
      }
      if (filters.priceRange) {
        queryConstraints.push(
          where('price', '>=', filters.priceRange.min),
          where('price', '<=', filters.priceRange.max)
        );
      }

      // Add sorting
      switch (filters.sortBy) {
        case 'price-low':
          queryConstraints.push(orderBy('price', 'asc'));
          break;
        case 'price-high':
          queryConstraints.push(orderBy('price', 'desc'));
          break;
        case 'newest':
          queryConstraints.push(orderBy('createdAt', 'desc'));
          break;
        case 'popular':
          queryConstraints.push(orderBy('views', 'desc'));
          break;
        default:
          queryConstraints.push(orderBy('createdAt', 'desc'));
      }

      // Apply all constraints to the query
      if (queryConstraints.length > 0) {
        q = query(q, ...queryConstraints);
      }

      console.log('Fetching products with filters:', filters);
      const querySnapshot = await getDocs(q);
      const productsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log('Fetched products:', productsData);

      setProducts(productsData);
      setError(null);
    } catch (err) {
      console.error('Error fetching products:', err);
      // If there's an index error, try fetching without filters
      if (err.message.includes('index')) {
        try {
          const simpleQuery = query(collection(db, 'products'));
          const snapshot = await getDocs(simpleQuery);
          const productsData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setProducts(productsData);
          setError(null);
        } catch (fallbackErr) {
          setError('Failed to fetch products. Please try again later.');
        }
      } else {
        setError('Failed to fetch products. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Update filters
  const updateFilters = (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }));
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      category: null,
      metal: null,
      priceRange: null,
      sortBy: 'newest'
    });
  };

  // Fetch products when filters change
  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const value = {
    products,
    loading,
    error,
    filters,
    categories,
    updateFilters,
    resetFilters,
    fetchProducts
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}; 