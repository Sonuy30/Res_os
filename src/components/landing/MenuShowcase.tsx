'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Leaf, Flame, Clock } from 'lucide-react';
import Link from 'next/link';

const mockMenuItems = [
  {
    id: 1,
    name: "Truffle Risotto",
    description: "Creamy arborio rice with black truffle, parmesan, and herbs",
    price: 285,
    category: "mains",
    image_url: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=400&h=300&fit=crop",
    is_vegetarian: true,
    is_popular: true,
    calories: 450
  },
  {
    id: 2,
    name: "Seared Salmon",
    description: "Atlantic salmon with roasted vegetables and lemon butter",
    price: 320,
    category: "mains",
    image_url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
    is_vegetarian: false,
    is_popular: true,
    calories: 380
  },
  {
    id: 3,
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla ice cream",
    price: 140,
    category: "desserts",
    image_url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    is_vegetarian: true,
    is_popular: false,
    calories: 320
  },
  {
    id: 4,
    name: "Crispy Calamari",
    description: "Fresh squid rings with spicy marinara sauce",
    price: 160,
    category: "appetizers",
    image_url: "https://images.unsplash.com/photo-1559847844-d9a9c109a22e?w=400&h=300&fit=crop",
    is_vegetarian: false,
    is_popular: true,
    calories: 280
  }
];

const categories = [
  { id: 'all', name: 'All Items', icon: Star },
  { id: 'appetizers', name: 'Appetizers', icon: Flame },
  { id: 'mains', name: 'Main Course', icon: Star },
  { id: 'desserts', name: 'Desserts', icon: Star }
];

export default function MenuShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all' 
    ? mockMenuItems 
    : mockMenuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-600">Signature</span> Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crafted by world-class chefs using the finest ingredients, each dish tells a story of culinary excellence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                    : "border-2 border-orange-200 text-orange-600 hover:bg-orange-50"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            );
          })}
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {item.is_popular && (
                        <Badge className="bg-orange-600 hover:bg-orange-700 text-white border-0">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          Popular
                        </Badge>
                      )}
                      {item.is_vegetarian && (
                        <Badge className="bg-green-600 hover:bg-green-700 text-white border-0">
                          <Leaf className="w-3 h-3 mr-1" />
                          Veggie
                        </Badge>
                      )}
                    </div>

                    {/* Quick Stats */}
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center text-xs text-gray-700">
                        <Clock className="w-3 h-3 mr-1" />
                        {item.calories} cal
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <span className="text-2xl font-bold text-orange-600">
                          ₹{item.price}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      
                      <Link href="/menu">
                        <Button 
                          className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold py-3 mt-4 transition-all duration-300 hover:shadow-lg"
                        >
                          Order Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/menu">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Full Menu
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
