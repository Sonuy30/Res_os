'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Users, Phone, Mail, CheckCircle } from 'lucide-react';
import { Reservation } from '@/entities/Reservation';

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    party_size: '',
    reservation_date: '',
    reservation_time: '',
    special_requests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const timeSlots = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', 
    '14:00', '14:30', '18:00', '18:30', '19:00', '19:30', 
    '20:00', '20:30', '21:00', '21:30'
  ];

  const partySizes = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await Reservation.create({
        ...formData,
        party_size: parseInt(formData.party_size)
      });
      setIsSuccess(true);
      setFormData({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        party_size: '',
        reservation_date: '',
        reservation_time: '',
        special_requests: ''
      });
    } catch (error) {
      console.error('Error creating reservation:', error);
    }

    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                </motion.div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Reservation Confirmed!
                </h2>
                <p className="text-gray-600 mb-8">
                  Thank you for your reservation. We'll send you a confirmation email shortly with all the details.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-semibold"
                >
                  Make Another Reservation
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Reserve Your <span className="text-orange-600">Perfect</span> Table
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your dining experience with our easy reservation system. Choose your preferred time and let us prepare something special for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-orange-600" />
                  Book Your Table
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="customer_name" className="text-sm font-semibold text-gray-700">
                        Full Name
                      </Label>
                      <Input
                        id="customer_name"
                        value={formData.customer_name}
                        onChange={(e) => handleInputChange('customer_name', e.target.value)}
                        placeholder="John Doe"
                        required
                        className="border-gray-200 focus:border-orange-500 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="customer_email" className="text-sm font-semibold text-gray-700">
                        Email Address
                      </Label>
                      <Input
                        id="customer_email"
                        type="email"
                        value={formData.customer_email}
                        onChange={(e) => handleInputChange('customer_email', e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="border-gray-200 focus:border-orange-500 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="customer_phone" className="text-sm font-semibold text-gray-700">
                        Phone Number
                      </Label>
                      <Input
                        id="customer_phone"
                        value={formData.customer_phone}
                        onChange={(e) => handleInputChange('customer_phone', e.target.value)}
                        placeholder="(123) 456-7890"
                        required
                        className="border-gray-200 focus:border-orange-500 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="party_size" className="text-sm font-semibold text-gray-700">
                        Party Size
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('party_size', value)} value={formData.party_size}>
                        <SelectTrigger className="border-gray-200 focus:border-orange-500 rounded-xl">
                          <SelectValue placeholder="Select party size" />
                        </SelectTrigger>
                        <SelectContent>
                          {partySizes.map(size => (
                            <SelectItem key={size} value={String(size)}>{size} person{size > 1 ? 's' : ''}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="reservation_date" className="text-sm font-semibold text-gray-700">
                        Date
                      </Label>
                      <Input
                        id="reservation_date"
                        type="date"
                        value={formData.reservation_date}
                        onChange={(e) => handleInputChange('reservation_date', e.target.value)}
                        required
                        className="border-gray-200 focus:border-orange-500 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reservation_time" className="text-sm font-semibold text-gray-700">
                        Time
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('reservation_time', value)} value={formData.reservation_time}>
                        <SelectTrigger className="border-gray-200 focus:border-orange-500 rounded-xl">
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map(time => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-2">
                    <Label htmlFor="special_requests" className="text-sm font-semibold text-gray-700">
                      Special Requests (Optional)
                    </Label>
                    <Textarea
                      id="special_requests"
                      value={formData.special_requests}
                      onChange={(e) => handleInputChange('special_requests', e.target.value)}
                      placeholder="e.g. birthday celebration, dietary restrictions"
                      className="border-gray-200 focus:border-orange-500 rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? 'Confirming...' : 'Confirm Reservation'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Restaurant Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Restaurant Information</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Opening Hours</h4>
                    <div className="space-y-1 text-gray-600">
                      <p><strong>Mon - Fri:</strong> 11:00 AM - 10:00 PM</p>
                      <p><strong>Sat - Sun:</strong> 10:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
                    <div className="space-y-1 text-gray-600">
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                      <p><strong>Email:</strong> info@gourmetgo.com</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Dining Policies</h4>
                    <ul className="space-y-1 text-gray-600 text-sm list-disc list-inside">
                      <li>Reservations are held for 15 minutes.</li>
                      <li>Parties of 8 or more require a deposit.</li>
                      <li>Please inform us of any allergies.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
                alt="Restaurant interior"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Elegant Atmosphere</h4>
                  <p className="text-sm opacity-90">Experience fine dining in our beautifully crafted space</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
