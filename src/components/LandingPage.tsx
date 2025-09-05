'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './landing/HeroSection';
import MenuShowcase from './landing/MenuShowcase';
import FeaturesSection from './landing/FeaturesSection';
import ReservationSection from './landing/ReservationSection';
import TestimonialsSection from './landing/TestimonialsSection';

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <HeroSection />
      <MenuShowcase />
      <FeaturesSection />
      <div id="reservations">
        <ReservationSection />
      </div>
      <TestimonialsSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-orange-600 mb-4">GourmetGo</h3>
              <p className="text-gray-400 mb-6">
                Crafting exceptional dining experiences with passion, quality, and innovation.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">i</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#menu" className="hover:text-orange-600 transition-colors">Menu</a></li>
                <li><a href="#reservations" className="hover:text-orange-600 transition-colors">Reservations</a></li>
                <li><a href="#about" className="hover:text-orange-600 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#delivery" className="hover:text-orange-600 transition-colors">Delivery</a></li>
                <li><a href="#takeout" className="hover:text-orange-600 transition-colors">Takeout</a></li>
                <li><a href="#catering" className="hover:text-orange-600 transition-colors">Catering</a></li>
                <li><a href="#events" className="hover:text-orange-600 transition-colors">Private Events</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <p>📍 123 Culinary Street<br />Food District, City 12345</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>📧 info@gourmetgo.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GourmetGo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
