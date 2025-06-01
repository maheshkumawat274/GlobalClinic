
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppBtn: React.FC = () => {
    const phoneNumber = "919711070476"; 
    const message = "Hello! I have a query."; 
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-[50px] right-5 bg-[#046381] text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-20"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={32} />
          </a>
        </div>
    );
};

export default WhatsAppBtn;