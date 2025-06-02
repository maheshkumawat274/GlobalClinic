import React from 'react';
import Herobtn from '../btns/Herobtn';
import { usePopup } from '../../context/UsePop';

const HeroSection: React.FC = () => {
  const { openPopup } = usePopup();
  const handleClick = () => {
  openPopup();
};
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('./imgs/hero.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-2 md:px-16 text-white">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Your Heart Health, Our Mission.</h1>
          <h2 className="text-lg md:text-xl mb-6">
            Experience world-class cardiology care with Dr. Ajeet Singh at Global Heart Clinic.
          </h2>
          <div onClick={handleClick} className="flex flex-col sm:flex-row gap-4">
            {/* <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition">
              Book Appointment
            </button> */}
            <Herobtn/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
