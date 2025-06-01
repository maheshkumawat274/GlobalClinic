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
      className="flex flex-col md:flex-row items-center overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 h-96 object-cover"
      />
      <div className="p-2 sm:p-6 md:w-1/2 flex justify-center items-center">
        <div>
          <h1 className="text-2xl sm:text-5xl font-bold text-[#046381] mb-4">{title}</h1>
          <p className="text-gray-600 text-justify">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
