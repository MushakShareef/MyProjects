import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <img 
            src="/rajayoga2.png" 
            alt="Meditation background" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
              e.currentTarget.onerror = null;
            }}
          />
        </motion.div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Brahma Kumaris</h1>
            <p className="text-xl md:text-2xl mb-8">Spiritual wisdom for a better world</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-800 px-6 py-3 rounded-md font-medium shadow-lg hover:bg-blue-50 transition-colors duration-300"
            >
              Learn Meditation
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Brahma Kumaris</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Prajapita Brahma Kumaris Ishwariya Vishwa Vidyalaya (also called Brahma Kumaris in short) 
              is a unique Vishwa Vidyalaya (university) and a well-known spiritual value-based educational 
              institution which has gained global acceptance and unique international recognition.
            </p>
            
            <div className="mt-10 grid md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-lg shadow-sm"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Spiritual Education</h3>
                <p className="text-gray-600">Discover the power of meditation and spiritual knowledge</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-lg shadow-sm"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Community</h3>
                <p className="text-gray-600">Join a worldwide community dedicated to peace and positive change</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-blue-50 p-6 rounded-lg shadow-sm"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Inner Peace</h3>
                <p className="text-gray-600">Experience the transformative power of meditation and mindfulness</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Center Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="/centre01.jpg" 
                  alt="Brahma Kumaris Center" 
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                    e.currentTarget.onerror = null;
                  }}
                />
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-blue-100 rounded-lg -z-10"></div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 md:pl-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Center in Tiruchirapalli</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Tiruchirapalli center of Brahma Kumaris offers a peaceful haven for spiritual growth and meditation. 
                Established with the vision of creating a better world through positive change, our center provides various 
                courses, workshops, and meditation sessions for the local community.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our dedicated team of practitioners is committed to sharing the timeless wisdom of Raja Yoga meditation 
                and spiritual knowledge to help individuals discover inner peace and personal transformation.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                Visit Our Center
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us for these transformative events and experiences designed to help you discover inner peace and spiritual wisdom.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-blue-100 relative">
                <div className="absolute inset-0 flex items-center justify-center text-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">June 15, 2025 • 6:00 PM</div>
                <h3 className="text-xl font-bold mb-2">Introduction to Meditation</h3>
                <p className="text-gray-600 mb-4">
                  Learn the basics of Raja Yoga meditation and how it can transform your life and bring inner peace.
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-blue-100 relative">
                <div className="absolute inset-0 flex items-center justify-center text-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">June 22, 2025 • 10:00 AM</div>
                <h3 className="text-xl font-bold mb-2">Spiritual Wisdom Workshop</h3>
                <p className="text-gray-600 mb-4">
                  A deep dive into spiritual wisdom and its practical application in daily life for happiness.
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-blue-100 relative">
                <div className="absolute inset-0 flex items-center justify-center text-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">June 30, 2025 • 5:30 PM</div>
                <h3 className="text-xl font-bold mb-2">Community Meditation Session</h3>
                <p className="text-gray-600 mb-4">
                  Join our community for a powerful group meditation session focused on world peace.
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
            >
              View All Events
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;