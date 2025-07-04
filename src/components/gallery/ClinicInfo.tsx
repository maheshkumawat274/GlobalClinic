import React from 'react';
import { motion } from 'framer-motion';

const ClinicInfoSection: React.FC = () => {
  return (
    <section className="py-16 px-2 md:px-16">
      <div className="container mx-auto px-4">
        
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#046381] mb-4 relative inline-block">
            Experience World-Class Heart Care
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-1 bg-[#046381] mt-2"></span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Our advanced facility and compassionate care ensure your heart is in expert hands.
          </p>
        </motion.div>

        {/* Content with Images */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Side Images */}
          <motion.div
            className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="./imgs/clinic1.jpeg"
              alt="Clinic Interior"
              className="rounded-xl shadow-xl object-cover h-64 w-full hover:scale-105 transition duration-500"
            />
            <img
              src="./imgs/clinic6.jpeg"
              alt="Doctor"
              className="rounded-xl shadow-xl object-cover h-64 w-full hover:scale-105 transition duration-500"
            />
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            className="md:w-1/2 bg-white rounded-xl shadow-xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#046381] mb-4">
              Our Modern Clinic & Dedicated Care
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              From cutting-edge diagnostic technology to a warm, welcoming environment, every aspect of our clinic is designed with your heart health in mind.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              With over 15 years of expertise, Dr. Ajeet Singh leads with compassion and precision, ensuring every patient receives personalized, world-class care.
            </p>
            <p className="text-gray-700 text-lg">
              Trust us to care for your heart — because your health is our top priority.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClinicInfoSection;
