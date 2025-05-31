// components/MapSection.tsx
import React from 'react';
import 'aos/dist/aos.css';

const MapSection: React.FC = () => {
  return (
    <section className="w-full h-screen bg-gray-100 flex flex-col justify-center items-center px-4 py-8">
      <div data-aos="fade-up" className="w-full max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
          📍 Find Us on Google Maps
        </h2>

        <div className="w-full h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-blue-200">
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7014.383100356567!2d77.50847859262544!3d28.473777453006928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea7c2575f0e1%3A0x89957f10e82859a1!2sAlpha%20Plaza!5e0!3m2!1sen!2sin!4v1748667811855!5m2!1sen!2sin" 
            width="100%"
            height="100%"
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
