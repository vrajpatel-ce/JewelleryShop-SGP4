import { addProduct } from './productUtils';

const testProducts = [
  {
    name: "Diamond Studded Gold Necklace",
    description: "Beautiful diamond studded necklace perfect for special occasions",
    price: 125000,
    category: "WOMEN",
    metal: "GOLD",
    purity: "22 CARAT",
    weight: 25.5,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1599643478509-15c9aeb0a12f?ixlib=rb-4.0.3"
    ],
    stock: 5,
    views: 0,
    featured: true,
    discount: 10,
    rating: 4.5,
    specifications: {
      material: "Gold with Diamond",
      color: "Yellow Gold",
      style: "Traditional",
      occasion: "Wedding",
      gender: "Women",
      ageGroup: "Adult"
    }
  },
  {
    name: "Traditional Gold Bangles Set",
    description: "Set of 4 traditional gold bangles with intricate designs",
    price: 85000,
    category: "WOMEN",
    metal: "GOLD",
    purity: "22 CARAT",
    weight: 30.0,
    images: [
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3"
    ],
    stock: 3,
    views: 0,
    featured: true,
    discount: 5,
    rating: 4.8,
    specifications: {
      material: "Pure Gold",
      color: "Yellow Gold",
      style: "Traditional",
      occasion: "Festival",
      gender: "Women",
      ageGroup: "Adult"
    }
  },
  {
    name: "Pearl and Gold Earrings",
    description: "Elegant pearl earrings with gold setting",
    price: 45000,
    category: "WOMEN",
    metal: "GOLD",
    purity: "18 CARAT",
    weight: 12.5,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3"
    ],
    stock: 8,
    views: 0,
    featured: false,
    discount: 0,
    rating: 4.2,
    specifications: {
      material: "Gold with Pearl",
      color: "White and Gold",
      style: "Modern",
      occasion: "Party",
      gender: "Women",
      ageGroup: "Adult"
    }
  }
];

export const addTestProducts = async () => {
  try {
    for (const product of testProducts) {
      await addProduct(product);
    }
    console.log('Test products added successfully!');
  } catch (error) {
    console.error('Error adding test products:', error);
  }
}; 