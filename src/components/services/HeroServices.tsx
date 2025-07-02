import React from 'react';

const HeroServices: React.FC = () => {
  return (
    <div className="relative h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('./imgs/hero2.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centered Text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Services</h1>
          <p className="text-lg max-w-xl mx-auto">
            Cardiology - Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroServices;
