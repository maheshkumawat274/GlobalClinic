import React from 'react';
import ContactForm from './ContactForm';
import 'aos/dist/aos.css';
import SocialMediaIcons from './SocialMediaLinks';

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-[#046381] py-16 px-4 md:px-10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-1 items-center">
        {/* Left - Contact Info Card */}
        <div
          data-aos="fade-right"
          className=" space-y-6 flex justify-center "
        >
          <div>
            <h2 className="text-4xl font-bold bg-clip-text text-white mb-8">
            Contact Us
          </h2>

          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-3 bg-white p-4 w-80 sm:w-96 rounded-lg ">
              <span className="text-[#046381] text-xl">📍</span>
              <div>
                <h3 className="font-semibold text-lg">Clinic Address</h3>
                <p>Global Heart Clinic, <br/> UG-20 alpha plaza,sector alpha 1,<br/> Greater Noida 201310</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 w-80 sm:w-96 rounded-lg ">
              <span className="text-[#046381] text-xl">📞</span>
              <div>
                <h3 className="font-semibold text-lg">Phone Number</h3>
                <a
                  href="tel:+919711070476"
                  className="text-[#046381] underline hover:text-[#33606e] transition"
                >
                  +91 9711070476
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 w-80 sm:w-96 rounded-lg ">
              <span className="text-[#046381] text-xl">📧</span>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a
                  href="mailto:info@globalheartclinic.com"
                  className="text-[#046381] underline hover:text-[#33606e] transition"
                >
                  info@globalheartclinic.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-4 w-80 sm:w-96 rounded-lg ">
              <span className="text-[#046381] text-xl">📅</span>
              <div>
                <h3 className="font-semibold text-lg">Timings</h3>
                <p>
                  Mon–Sat: 9 AM – 7 PM <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div>
              <SocialMediaIcons/>
            </div>
          </div>
            </div>
        </div>

        {/* Right - Form */}
        <div
          data-aos="fade-left"
          className="bg-white rounded-2xl shadow-xl py-6 border border-purple-100"
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
