'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content: "The ordering system is incredibly intuitive, and the food quality is consistently outstanding. I love being able to track my order in real-time!",
    rating: 5,
    delay: 0.1
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Perfect for business lunches. The reservation system works flawlessly, and the personalized recommendations always hit the spot.",
    rating: 5,
    delay: 0.2
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Local Resident",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "The loyalty program is amazing! I've earned so many rewards, and the staff always remembers my preferences. Truly exceptional service.",
    rating: 5,
    delay: 0.3
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-orange-600">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their dining experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: testimonial.delay }}
              viewport={{ once: true }}
            >
              <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-orange-50">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Quote Icon */}
                    <div className="flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center"
                      >
                        <Quote className="w-6 h-6 text-orange-600" />
                      </motion.div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center space-x-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: testimonial.delay + (i * 0.1), duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="text-gray-700 text-center leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center space-x-4">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover shadow-md"
                      />
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">15K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50K+</div>
              <div className="text-gray-600">Orders Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
