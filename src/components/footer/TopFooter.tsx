import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import SocialMediaIcons from '../contact/SocialMediaLinks';

const TopFooter: React.FC = () => {
  return (
    <div className="bg-[#046381] py-16 px-2 sm:px-16 flex justify-between items-center flex-wrap gap-4">
      {/* Logo Section */}
      <div className="flex items-center h-24 w-48 gap-2 bg-[#046381]">
        <img src="./imgs/logo.png" alt="Cardioly" className="" />
        <span className="text-2xl font-semibold text-white"></span>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-px h-10 bg-gray-300"></div>

      {/* Clinic Address */}
      <div className="flex items-center gap-3">
        <div className="bg-[#f84558] text-white p-2 rounded-full text-lg">
          <FaMapMarkerAlt />
        </div>
        <div>
          <p className="font-semibold text-white">Our Clinic Address</p>
          <p className="text-sm text-white">456, Lorem Street, USA</p>
        </div>
      </div>

      {/* Phone Number */}
      <div className="flex items-center gap-3">
        <div className="bg-[#f84558] text-white p-2 rounded-full text-lg">
          <FaPhoneAlt />
        </div>
        <div>
          <p className="font-semibold text-white">Phone Number</p>
          <p className="text-sm text-white">(+00)888.666.88</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3">
        <SocialMediaIcons/>
      </div>
    </div>
  );
};

export default TopFooter;
