import { collection, addDoc, updateDoc, deleteDoc, doc, increment } from 'firebase/firestore';
import { db } from '../config/firebase';

// Product schema
export const productSchema = {
  name: '',
  description: '',
  price: 0,
  category: '',
  metal: '',
  purity: '',
  weight: 0,
  images: [],
  stock: 0,
  views: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  featured: false,
  discount: 0,
  rating: 0,
  reviews: [],
  specifications: {
    material: '',
    color: '',
    size: '',
    style: '',
    occasion: '',
    gender: '',
    ageGroup: ''
  }
};

// Add a new product
export const addProduct = async (productData) => {
  try {
    const productWithDefaults = {
      ...productSchema,
      ...productData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const docRef = await addDoc(collection(db, 'products'), productWithDefaults);
    return { id: docRef.id, ...productWithDefaults };
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

// Update a product
export const updateProduct = async (productId, updateData) => {
  try {
    const productRef = doc(db, 'products', productId);
    const updateWithTimestamp = {
      ...updateData,
      updatedAt: new Date()
    };
    await updateDoc(productRef, updateWithTimestamp);
    return { id: productId, ...updateWithTimestamp };
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Delete a product
export const deleteProduct = async (productId) => {
  try {
    await deleteDoc(doc(db, 'products', productId));
    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

// Increment product views
export const incrementProductViews = async (productId) => {
  try {
    const productRef = doc(db, 'products', productId);
    await updateDoc(productRef, {
      views: increment(1)
    });
    return true;
  } catch (error) {
    console.error('Error incrementing product views:', error);
    throw error;
  }
};

// Add a review to a product
export const addProductReview = async (productId, reviewData) => {
  try {
    const productRef = doc(db, 'products', productId);
    const review = {
      ...reviewData,
      createdAt: new Date()
    };
    
    await updateDoc(productRef, {
      reviews: increment(1),
      rating: increment(review.rating)
    });
    
    return review;
  } catch (error) {
    console.error('Error adding product review:', error);
    throw error;
  }
}; 