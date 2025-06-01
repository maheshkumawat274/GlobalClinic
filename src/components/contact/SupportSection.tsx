 // Replace with your image path

import { Link } from "react-router-dom";

const SupportSection = () => {
  return (
    <div className=" text-white px-2 py-12 md:px-16 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="md:w-1/2 flex justify-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">Have any Question?</h1>
          <p className="text-lg mb-6 text-gray-700">
            Our Client care managers are on call 24/7 to answer your questions.
          </p>
          <Link to='/contact'>
            <button className="text-[#0C1E3C] px-12 py-3 rounded hover:bg-[#046381] hover:text-white transition-all duration-300 border-2 border-[#046381] cursor-pointer">
            Contact Us
          </button>
          </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src='/imgs/checkup.jpg'
            alt="Support"
            className="w-80 max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
