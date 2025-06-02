import React from "react";
import ContactForm from "../components/contact/ContactForm";
import { usePopup } from "./UsePop";
import { FaHeartbeat, FaUserMd, FaStethoscope, FaTimes } from "react-icons/fa";

const Popup: React.FC = () => {
  const { isOpen, closePopup } = usePopup();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Centered Popup */}
      <div className="absolute inset-0 flex justify-center items-center z-50 p-4">
        <div className="relative bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row">
          
          {/* Close Button (Top-Right) */}
          <button
            onClick={closePopup}
            className="absolute top-2 right-2 text-gray-500 hover:text-[#046381]  text-2xl z-50 cursor-pointer"
            aria-label="Close"
          >
            <FaTimes />
          </button>

          {/* Left Section - Info Cards */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 flex justify-center items-center">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold mb-4 text-[#046381] ">Book a Cardiology Appointment</h1>
            <div className="space-y-4">

              {/* Card 1 */}
              <div className="flex items-start bg-white border rounded-lg p-3 shadow-sm hover:shadow-md transition">
                <FaHeartbeat className="text-[#046381]  text-xl mt-1 mr-3" />
                <div>
                  <h2 className="font-semibold text-gray-800">Heart Checkup</h2>
                  <p className="text-sm text-gray-600">Routine heart health check for early diagnosis and prevention.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start bg-white border rounded-lg p-3 shadow-sm hover:shadow-md transition">
                <FaStethoscope className="text-blue-500 text-xl mt-1 mr-3" />
                <div>
                  <h2 className="font-semibold text-gray-800">Consult Specialist</h2>
                  <p className="text-sm text-gray-600">Talk to top cardiologists for personalized care and advice.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-start bg-white border rounded-lg p-3 shadow-sm hover:shadow-md transition">
                <FaUserMd className="text-green-500 text-xl mt-1 mr-3" />
                <div>
                  <h2 className="font-semibold text-gray-800">Advanced Treatment</h2>
                  <p className="text-sm text-gray-600">Access critical intervention procedures and expert care.</p>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full md:w-1/2 pt-4 bg-white flex justify-center items-center">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Popup;
