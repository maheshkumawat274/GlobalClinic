import React from 'react';
import { motion } from 'framer-motion';

const AboutDrAjeet: React.FC = () => {
  return (
    <div className="min-h-screen py-10 px-2 md:px-16 flex items-center justify-center">
      <motion.div
        className=" w-full flex flex-col md:flex-row gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Image Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src="./imgs/contact.jpg" // Replace with actual image path
            alt="Dr. Ajeet Singh"
            className="w-full object-cover"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h1 className="text-3xl md:text-6xl font-bold text-[#046381] mb-2">Dr. Ajeet Singh</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">Your Trusted Heart Specialist 🧑‍⚕️</h2>

          <p className="text-gray-600 text-md md:text-xl italic mb-6">
            “Dr. Ajeet Singh is a highly experienced cardiologist with over 15 years of service in the field. He specializes in non-invasive cardiac care, preventive cardiology, and complex diagnosis. His mission is to provide holistic heart care rooted in empathy, science, and technology.”
          </p>

          <div className="mb-4">
            <h2 className="font-semibold texl-xl md:text-2xl text-gray-800">Qualifications:</h2>
            <ul className="list-disc list-inside text-gray-600 texl-md sm:text-xl mt-1">
              <li>MBBS, MD (Medicine), DM (Cardiology)</li>
              <li>Fellowship in Interventional Cardiology</li>
              <li>Member: Indian Heart Association, Cardiology Society of India</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl sm:text-2xl text-gray-800">Philosophy:</h2>
            <p className="text-gray-600 text-md md:text-xl mt-1">"Treat the heart, but never forget the human behind it."</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutDrAjeet;
