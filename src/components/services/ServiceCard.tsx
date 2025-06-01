import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image, description }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 h-64 object-cover"
      />
      <div className="p-6 md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 text-justify">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
