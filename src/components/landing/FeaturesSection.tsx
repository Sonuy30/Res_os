'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Clock, 
  MapPin, 
  Gift, 
  Heart, 
  Smartphone, 
  Calendar,
  TrendingUp,
  Shield
} from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: "Smart Ordering",
    description: "Order seamlessly with our intuitive mobile-first interface and real-time kitchen updates.",
    color: "orange",
    delay: 0.1
  },
  {
    icon: Clock,
    title: "Order Tracking",
    description: "Track your order in real-time from kitchen to table with live status updates.",
    color: "blue",
    delay: 0.2
  },
  {
    icon: Calendar,
    title: "Table Reservations",
    description: "Book your perfect dining experience with our smart reservation system.",
    color: "green",
    delay: 0.3
  },
  {
    icon: Heart,
    title: "Order History",
    description: "Access your dining history and easily reorder your favorite dishes.",
    color: "pink",
    delay: 0.4
  },
  {
    icon: Gift,
    title: "Loyalty Rewards",
    description: "Earn points with every order and unlock exclusive rewards and discounts.",
    color: "purple",
    delay: 0.5
  },
  {
    icon: TrendingUp,
    title: "Personalized Menu",
    description: "Get customized recommendations based on your preferences and dining history.",
    color: "indigo",
    delay: 0.6
  },
  {
    icon: MapPin,
    title: "Multi-Location",
    description: "Order from any of our locations with consistent quality and service.",
    color: "teal",
    delay: 0.7
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Safe and secure payment processing with multiple payment options.",
    color: "gray",
    delay: 0.8
  }
];

const colorClasses = {
  orange: {
    bg: "bg-orange-50",
    icon: "text-orange-600",
    card: "hover:border-orange-200"
  },
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    card: "hover:border-blue-200"
  },
  green: {
    bg: "bg-green-50",
    icon: "text-green-600",
    card: "hover:border-green-200"
  },
  pink: {
    bg: "bg-pink-50",
    icon: "text-pink-600",
    card: "hover:border-pink-200"
  },
  purple: {
    bg: "bg-purple-50",
    icon: "text-purple-600",
    card: "hover:border-purple-200"
  },
  indigo: {
    bg: "bg-indigo-50",
    icon: "text-indigo-600",
    card: "hover:border-indigo-200"
  },
  teal: {
    bg: "bg-teal-50",
    icon: "text-teal-600",
    card: "hover:border-teal-200"
  },
  gray: {
    bg: "bg-gray-50",
    icon: "text-gray-600",
    card: "hover:border-gray-200"
  }
};

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-orange-600">Our Platform</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience dining reimagined with cutting-edge technology and personalized service that puts you first.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
              >
                <Card className={`group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${colors.card}`}>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                      </motion.div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-orange-600 to-amber-600 border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center text-white">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Dining Experience?
                </h3>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Join thousands of satisfied customers who have discovered the future of restaurant dining.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
