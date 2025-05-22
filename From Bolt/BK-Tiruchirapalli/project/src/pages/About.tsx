import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Brahma Kumaris</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              A spiritual movement dedicated to personal transformation and world renewal
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">The Brahma Kumaris</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Prajapita Brahma Kumaris Ishwariya Vishwa Vidyalaya, (Brahma Kumaris in short) is a unique 
                  Vishwa Vidyalaya (university) and a well known spiritual value based educational institution. 
                  Through its teachings, the institution has gained global acceptance and unique international 
                  recognition. The institution believes in the parenthood of God and the brotherhood of man and 
                  is open to the people of the entire globe irrespective of their caste, creed, age and social, 
                  economic or political status.
                </p>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-6">History</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Prajapita Brahmakumaris Ishwariya Vishwa Vidyalaya was established in Sindh Hyderabad (now in Pakistan) 
                  in the year 1937. The institution has a very unique, unexpected and interesting beginning in an atmosphere 
                  of incredible divinity. The process of the establishment of the institution and the divine force behind it 
                  can be clearly understood when we get glimpses of some extraordinary events that unfolded in the life of an 
                  ordinary man called Dada Lekhraj, who himself had the least idea of what was to follow later.
                </p>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Academy For A Better World</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Academy for a Better World is an Institution of higher learning, established by the Brahma Kumaris 
                  Ishwariya Vishwa Vidyalaya with World Renewal Spiritual Trust and Raj Yoga Education & Research foundation.
                </p>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-6">With UN</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Our global spiritual perspective highlights and affirms the ideals and principles underlying the work and 
                  spirit of the United Nations. Speaking with the authority of an increasingly large segment of civil society 
                  concerned with human and social values, we support UN programmes over a wide range of developmental, 
                  humanitarian and other issues. Our special competence brings a unique ethical and spiritual approach to 
                  world concerns and enables this approach to be clearly expressed within the broad forum of UN circles.
                </p>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Wings</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Prajapita Brahma Kumaris Ishwariya Vishwa Vidyalaya and the sister organisations RajYoga Education and 
                  Research Foundation and Brahma Kumaris Academy for the Better World have set up various Wings and 
                  Departments or Faculties that conduct courses for various sections of society. Seminars, workshops and 
                  conferences are held in order share with them the applications of spirituality, the art and experience 
                  of Meditation for achieving excellence in their fields, overcome work related stresses and inspire them 
                  to have for themselves, a code of conduct to follow. It brings various important personalities in respective 
                  fields on a common platform for broad exchange of ideas and infuse fresh thinking towards solving various 
                  problems plaguing different sections of the society. Each Wing or Department does various kinds of services 
                  with a spirit of dedication. The services and facilities of the institution are free and no fee is charged.
                </p>
              </motion.div>
            </div>
            
            {/* Values Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Core Values</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Peace</h3>
                  <p className="text-gray-600">
                    We believe in cultivating inner peace as the foundation for creating a peaceful world.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Love</h3>
                  <p className="text-gray-600">
                    Unconditional love and respect for all beings is at the core of our philosophy.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Spiritual Empowerment</h3>
                  <p className="text-gray-600">
                    We empower individuals through spiritual knowledge and meditation practices.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Global Unity</h3>
                  <p className="text-gray-600">
                    We promote unity in diversity and believe in the global family of humanity.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;