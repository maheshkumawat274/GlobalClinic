import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    src: '/imgs/clinic1.jpeg',
    alt: 'Clinic Image 1',
  },
  {
    src: '/imgs/clinic2.jpeg',
    alt: 'Clinic Image 2',
  },
  {
    src: '/imgs/clinic3.jpeg',
    alt: 'Doctor Image 1',
  },
  {
    src: '/imgs/clinic4.jpeg',
    alt: 'Doctor Image 2',
  },
  {
    src: '/imgs/clinic5.jpeg',
    alt: 'Clinic Image 3',
  },
  {
    src: '/imgs/clinic6.jpeg',
    alt: 'Doctor Image 3',
  },
  {
    src: '/imgs/clinic7.jpeg',
    alt: 'Doctor Image 2',
  },
  {
    src: '/imgs/clinic8.jpeg',
    alt: 'Clinic Image 3',
  },
  {
    src: '/imgs/clinic9.jpeg',
    alt: 'Doctor Image 3',
  },
];

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-16 px-2 md:px-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Inside Our Clinic & Meet the Doctor
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg group bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
