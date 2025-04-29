import { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Calculate total amount
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Fetch cart items from Firestore
  const fetchCartItems = async () => {
    console.log('Fetching cart items...');
    try {
      const user = auth.currentUser;
      console.log('Current user in fetchCartItems:', user);

      if (!user) {
        console.log('No user found, clearing cart');
        setCartItems([]);
        setLoading(false);
        return;
      }

      const cartDoc = await getDoc(doc(db, 'carts', user.uid));
      console.log('Cart document exists:', cartDoc.exists());
      
      if (cartDoc.exists()) {
        const cartData = cartDoc.data();
        console.log('Cart data:', cartData);
        setCartItems(cartData.items || []);
      } else {
        console.log('Creating new cart document');
        // Initialize empty cart if it doesn't exist
        await setDoc(doc(db, 'carts', user.uid), {
          items: [],
          updatedAt: new Date()
        });
        setCartItems([]);
      }
    } catch (err) {
      console.error('Error fetching cart:', err);
      if (err.code === 'permission-denied') {
        setError('Please log in to access your cart');
      } else {
        setError('Failed to fetch cart items. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Save cart to Firestore
  const saveCart = async (items) => {
    console.log('Saving cart...', items);
    try {
      const user = auth.currentUser;
      console.log('Current user in saveCart:', user);

      if (!user) {
        setError('Please log in to save your cart');
        return;
      }

      const cartRef = doc(db, 'carts', user.uid);
      await setDoc(cartRef, {
        items,
        updatedAt: new Date()
      });
      console.log('Cart saved successfully');
    } catch (err) {
      console.error('Error saving cart:', err);
      if (err.code === 'permission-denied') {
        setError('Please log in to save your cart');
      } else {
        setError('Failed to save cart. Please try again later.');
      }
      throw err; // Re-throw the error to be caught by the caller
    }
  };

  // Add item to cart
  const addToCart = async (product) => {
    console.log('Adding to cart...', product);
    try {
      const user = auth.currentUser;
      console.log('Current user in addToCart:', user);

      if (!user) {
        setError('Please log in to add items to cart');
        return;
      }

      const existingItem = cartItems.find(item => item.id === product.id);
      console.log('Existing item:', existingItem);

      let newItems;
      if (existingItem) {
        newItems = cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...cartItems, { ...product, quantity: 1 }];
      }

      console.log('New cart items:', newItems);
      setCartItems(newItems);
      await saveCart(newItems);
      console.log('Item added to cart successfully');
    } catch (err) {
      console.error('Error adding to cart:', err);
      setError('Failed to add item to cart. Please try again later.');
      throw err; // Re-throw the error to be caught by the caller
    }
  };

  // Remove item from cart
  const removeFromCart = async (productId) => {
    console.log('Removing from cart...', productId);
    try {
      const user = auth.currentUser;
      if (!user) {
        setError('Please log in to remove items from cart');
        return;
      }

      const newItems = cartItems.filter(item => item.id !== productId);
      setCartItems(newItems);
      await saveCart(newItems);
      console.log('Item removed from cart successfully');
    } catch (err) {
      console.error('Error removing from cart:', err);
      setError('Failed to remove item from cart. Please try again later.');
    }
  };

  // Update item quantity
  const updateQuantity = async (productId, quantity) => {
    console.log('Updating quantity...', { productId, quantity });
    try {
      const user = auth.currentUser;
      if (!user) {
        setError('Please log in to update cart');
        return;
      }

      if (quantity < 1) return;
      
      const newItems = cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      );
      setCartItems(newItems);
      await saveCart(newItems);
      console.log('Quantity updated successfully');
    } catch (err) {
      console.error('Error updating quantity:', err);
      setError('Failed to update quantity. Please try again later.');
    }
  };

  // Clear cart
  const clearCart = async () => {
    console.log('Clearing cart...');
    try {
      const user = auth.currentUser;
      if (!user) {
        setError('Please log in to clear cart');
        return;
      }

      setCartItems([]);
      await saveCart([]);
      console.log('Cart cleared successfully');
    } catch (err) {
      console.error('Error clearing cart:', err);
      setError('Failed to clear cart. Please try again later.');
    }
  };

  // Fetch cart items when user changes
  useEffect(() => {
    console.log('Setting up auth state listener');
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('Auth state changed:', user);
      if (user) {
        fetchCartItems();
      } else {
        setCartItems([]);
        setLoading(false);
        setError(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    cartItems,
    loading,
    error,
    total,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 