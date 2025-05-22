import React from 'react';
import { motion } from 'framer-motion';

const Address: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Visit Our Center</h1>
            <p className="text-xl text-blue-100">
              Connect with us at our peaceful Brahma Kumaris center in Tiruchirapalli
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Address and Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Location</h2>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Brahma Kumaris Tiruchirapalli Center</h3>
                  <p className="text-gray-700 mb-4">
                    No:3, Shanthi Kutir, Periya Chetti Street,<br />
                    Woraiyur, Tiruchirapalli - 620003<br />
                    Tamil Nadu, India
                  </p>
                  
                  <div className="border-t border-blue-100 pt-4 mt-4">
                    <h4 className="font-medium text-gray-800 mb-2">Contact Information:</h4>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Phone:</span> +91 431 2761234
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Email:</span> trichy@brahmakumaris.org
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">Hours of Operation</h3>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="divide-y divide-gray-200">
                    <div className="flex justify-between py-3 px-4">
                      <span className="text-gray-700">Monday - Friday</span>
                      <span className="text-gray-700">5:30 AM - 8:30 PM</span>
                    </div>
                    <div className="flex justify-between py-3 px-4">
                      <span className="text-gray-700">Saturday</span>
                      <span className="text-gray-700">5:30 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between py-3 px-4">
                      <span className="text-gray-700">Sunday</span>
                      <span className="text-gray-700">5:30 AM - 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] mb-8 relative">
                  {/* This is a placeholder for a map. In a real application, you would integrate with Google Maps or another mapping service */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600 text-center px-4">Map location would display here.<br />Please use the address to find us on Google Maps.</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Directions</h3>
                  <p className="text-gray-700 mb-4">
                    Our center is located in the Woraiyur area of Tiruchirapalli, about 4 km from the 
                    Tiruchirapalli Junction railway station and 7 km from the Tiruchirapalli International Airport.
                  </p>
                  
                  <h4 className="font-medium text-gray-800 mb-2">From Railway Station:</h4>
                  <p className="text-gray-700 mb-4">
                    Take an auto-rickshaw or taxi directly to Shanthi Kutir, Periya Chetti Street, Woraiyur. 
                    The journey takes approximately 15 minutes.
                  </p>
                  
                  <h4 className="font-medium text-gray-800 mb-2">From Airport:</h4>
                  <p className="text-gray-700">
                    Pre-paid taxis are available at the airport. The journey to our center takes approximately 
                    25 minutes depending on traffic conditions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Inquiry Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
              <p className="text-gray-600">
                Have questions or want to learn more about our center and activities? Send us a message.
              </p>
            </div>
            
            <form className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email address"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your phone number"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message or inquiry"
                ></textarea>
              </div>
              
              <div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300"
                  type="submit"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Address;