'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

interface CharmProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const charmProducts: CharmProduct[] = [
  {
    id: 1,
    name: "Blue Rose Protection Pendant",
    price: 88,
    description: "A beautiful blue rose pendant infused with protective energy. Perfect for daily wear and spiritual protection.",
    image: "/charms/blue-rose-pendant.jpg",
    category: "Pendants"
  },
  {
    id: 2,
    name: "Numerology Crystal Set",
    price: 128,
    description: "A complete set of crystals aligned with numerological energies. Includes 9 crystals representing numbers 1-9.",
    image: "/charms/crystal-set.jpg",
    category: "Crystal Sets"
  },
  {
    id: 3,
    name: "Feng Shui Wealth Bracelet",
    price: 68,
    description: "Traditional feng shui bracelet designed to attract wealth and prosperity. Made with authentic jade and gold accents.",
    image: "/charms/wealth-bracelet.jpg",
    category: "Bracelets"
  },
  {
    id: 4,
    name: "Sacred Geometry Ring",
    price: 158,
    description: "Sterling silver ring featuring sacred geometry patterns. Enhances spiritual connection and inner wisdom.",
    image: "/charms/geometry-ring.jpg",
    category: "Rings"
  },
  {
    id: 5,
    name: "Chakra Balancing Necklace",
    price: 98,
    description: "Seven-stone chakra necklace for energy balancing and spiritual alignment. Each stone represents a different chakra.",
    image: "/charms/chakra-necklace.jpg",
    category: "Necklaces"
  },
  {
    id: 6,
    name: "Lucky Number Charm",
    price: 48,
    description: "Personalized charm featuring your lucky number based on numerological calculations. Available in gold or silver.",
    image: "/charms/lucky-number.jpg",
    category: "Charms"
  }
];

export default function CharmsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<CharmProduct[]>([]);

  const categories = ['All', 'Pendants', 'Crystal Sets', 'Bracelets', 'Rings', 'Necklaces', 'Charms'];

  const filteredProducts = selectedCategory === 'All' 
    ? charmProducts 
    : charmProducts.filter(product => product.category === selectedCategory);

  const addToCart = (product: CharmProduct) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4" style={{ fontFamily: 'Sacramento, cursive' }}>
            Mystical Charms & Accessories
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Lora, serif' }}>
            Discover our collection of spiritually charged jewelry and accessories. Each piece is carefully selected and blessed to enhance your spiritual journey and bring positive energy into your life.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-black font-bold'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                style={{ fontFamily: 'Lora, serif' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-64 bg-gradient-to-br from-yellow-400/20 to-purple-600/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-yellow-400/30 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold" style={{ fontFamily: 'Sacramento, cursive' }}>
                        {product.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2" style={{ fontFamily: 'Lora, serif' }}>
                    {product.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-4" style={{ fontFamily: 'Lora, serif' }}>
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-yellow-400" style={{ fontFamily: 'Lora, serif' }}>
                      ${product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                      style={{ fontFamily: 'Lora, serif' }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-md rounded-lg p-4 text-white">
          <p className="font-bold" style={{ fontFamily: 'Lora, serif' }}>
            Cart: {cart.length} items
          </p>
          <p className="text-yellow-400" style={{ fontFamily: 'Lora, serif' }}>
            Total: ${cart.reduce((sum, item) => sum + item.price, 0)}
          </p>
          <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-1 px-3 rounded transition-colors duration-300">
            Checkout
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/80" style={{ fontFamily: 'Lora, serif' }}>
            All items are blessed and charged with positive energy. Free shipping on orders over $100.
          </p>
          <p className="text-white/60 mt-2" style={{ fontFamily: 'Lora, serif' }}>
            by Kandela Gytha Dharanawati, 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

