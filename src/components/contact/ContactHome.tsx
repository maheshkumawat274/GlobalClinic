// import ContactForm from './ContactForm'; // adjust the path as needed

// const ContactSection = () => {
//   return (
//     <section className="py-16 bg-[#046381]">
//       <div className='text-center'>
//         <h1 className='text-4xl md:text-5xl font-bold text-white leading-tight'>Book Your Appointment Today!</h1>
//       </div>
//       <div className="container px-2  md:px-16 mx-auto flex flex-col md:flex-row items-center gap-10 ">
        
//         {/* Left: Doctor Image */}
//         <div className="md:w-1/2 w-full flex justify-center items-center">
//           <img
//             src='./imgs/checkup.jpg'
//             alt="Doctor"
//             className="w-full max-w-sm md:max-w-full rounded-xl"
//           />
//         </div>

//         {/* Right: Contact Form */}
//         <div className="md:w-1/2 w-full flex justify-center items-center">
//           <ContactForm/>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import React from "react";
import ContactForm from "./ContactForm";

const ContactHome: React.FC = () => {
  return (
    <div className="bg-[#046381] py-16 px-2 md:px-16 ">
      <div className="w-full mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="text-white">
          <h1 className="uppercase text-4xl font-bold tracking-wide mb-2">_Contact Us_</h1>
          <h2 className="text-lg leading-snug mb-4">
             Connect with our expert cardiology team for appointments, emergency heart care, or consultation. We're committed to your heart health with timely support and top-notch facilities.
          </h2>

          {/* Facilities Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-[#1c2233] text-white px-6 py-3 rounded flex items-center gap-2">
              🚑 EMERGENCY
            </button>
            <button className="bg-white text-black px-6 py-3 rounded flex items-center gap-2">
              🩺 FACILITIES
            </button>
            <button className="bg-white text-black px-6 py-3 rounded flex items-center gap-2">
              📷 REACTION
            </button>
          </div>

          {/* Image + Text */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center">
            <img
              src="./imgs/treatment.webp"
              alt="Doctor Consultation"
              className="rounded-md h-48 sm:h-24 w-72"
            />
            <p className="text-white text-sm">
              Be Right Path for your Start Up with Business Consulting with challenges it presents may seem
              daunting, but we help you approach change with confidence.
            </p>
          </div>

          {/* Bottom Icons Section */}
          <div className="flex flex-col sm:flex-row gap-8 mt-10 text-center text-black">
            <div className="bg-white p-4 rounded w-full">
              <div className="text-2xl">🖥️</div>
              <p className="text-sm mt-2">Have any Question?</p>
              <p className="font-bold">Book an appointment</p>
            </div>
            <div className="bg-white p-4 rounded w-full">
              <div className="text-2xl">📞</div>
              <p className="text-sm mt-2">Have care Requirement?</p>
              <p className="font-bold">Call the hospital</p>
            </div>
          </div>
        </div>

        {/* Right Section - Appointment Form */}
        <div className=" rounded">
          <h3 className="text-2xl text-white font-semibold text-center mb-4">Make An Appointment</h3>
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
