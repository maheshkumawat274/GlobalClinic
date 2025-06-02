
import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AnimatedBtn from "../btns/Animatedbtn";
import './header.css'
import { usePopup } from "../../context/UsePop";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

   const { openPopup } = usePopup();
    const handleClick = () => {
    openPopup();
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* Top Header */}
      <div className="bg-[#EDEDE9] text-sm py-2 px-6 justify-evenly items-center hidden md:flex">
        <div className="flex space-x-4 text-[#046381]">
          <p className="flex items-center hover:underline">
            Book Online <span className="px-4">➨</span> You can request
            appointment in 24 hours
          </p>
        </div>
        <nav
          aria-label="Social Media Links"
          className="flex space-x-8 text-[#3647AD]"
        >
          <a href="tel:+919711070476" className="flex items-center hover:underline">
            <FaPhoneAlt className="mr-2" />
            +91-9711070476
          </a>
          <a
            href="mailto:info@globalheartclinic.com"
            className="flex items-center hover:underline"
          >
            <FaEnvelope className="mr-2" />
            info@globalheartclinic.com
          </a>
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/globalhealthclinic2015/" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/drajeetaje1234/" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/ajeet-singh-8a582266/" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://wa.me/919711070476" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </nav>
      </div>

      {/* Main Header */}
      <div className={`bg-[#046381] px-4 flex justify-between items-center shadow transition-all duration-300 ${isScrolled ? "fixed top-0 w-full z-20" : ""}`}>
        <div className="flex items-center gap-3 h-24 w-48">
          <Link to="/" className="flex items-center gap-2" aria-label="Global Heart Clinic">
            <img src="/imgs/logo.png" alt="Global Heart Clinic logo" />
          </Link>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex gap-8 text-[12px] md:text-[18px] relative" aria-label="Primary Navigation">
          <ul className="flex gap-3 lg:gap-7 text-white items-center">
            <li><Link className="hover:border-b-2 border-white" to="/">Home</Link></li>
            <li><Link className="hover:border-b-2 border-white" to="/about">About Us</Link></li>
            <li
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link to='/services'>
              <span className="hover:border-b-2 border-white cursor-pointer flex items-center gap-1">
                Services <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
              </span>
              </Link>
              {isServicesOpen && (
                <ul className="absolute top-full left-0 bg-white text-black shadow-xl rounded-md w-72 z-50 border-t-38 border-[#046381] animate-slideDown">
                  {[
                    ["Preventive Checkups", "/services/preventive-checkups"],
                    ["ECG and ECHO", "/services/ecg-echo"],
                    ["TMT Test", "/services/tmt-test"],
                    ["Hypertension & Cholesterol", "/services/hypertension"],
                    ["Emergency Cardiac", "/services/emergency-cardiac"],
                    ["Post-Heart Attack", "/services/post-heart-attack"],
                    ["Diabetic Heart", "/services/diabetic-heart"],
                  ].map(([text, path]) => (
                    <li key={path}>
                      <Link
                        to={path}
                        className="block px-4 py-2 border-b-1 border-[#046381]   hover:bg-[#046381] hover:text-white hover:px-8 transition-all duration-200 ease-in-out"
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* <li><Link className="hover:border-b-2 border-white" to="/blogs">Blogs</Link></li> */}
            <li><Link className="hover:border-b-2 border-white" to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        {/* CTA Button - Desktop */}
        <div onClick={handleClick} className="hidden md:block">
          <AnimatedBtn />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Mobile Menu"
            className="text-3xl text-white"
          >
            <HiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <aside className={`fixed top-0 left-0 z-40 h-full w-full bg-[#046381] text-white transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`} aria-label="Mobile Navigation Menu">
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
          <div className="flex items-center gap-3 h-24 w-48">
            <Link to="/" className="flex items-center gap-2" aria-label="Global Heart Clinic">
              <img src="/imgs/logo.png" alt="Global Heart Clinic logo" />
            </Link>
          </div>
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close Mobile Menu" className="text-white text-3xl"><IoClose /></button>
        </div>

        <nav className="flex flex-col gap-4 px-6 py-6 font-medium text-lg">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>

          {/* Services Dropdown in Mobile */}
          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between w-full"
            >
              <Link to='/services'>
              <span>Services</span>
              </Link>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  isMobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isMobileServicesOpen && (
              <ul className="mt-2 ml-4 space-y-2 text-sm">
                {[
                  ["Preventive Checkups", "/services/preventive-checkups"],
                  ["ECG and ECHO", "/services/ecg-echo"],
                  ["TMT Test", "/services/tmt-test"],
                  ["Hypertension & Cholesterol", "/services/hypertension"],
                  ["Emergency Cardiac", "/services/emergency-cardiac"],
                  ["Post-Heart Attack", "/services/post-heart-attack"],
                  ["Diabetic Heart", "/services/diabetic-heart"],
                ].map(([text, path]) => (
                  <li key={path}>
                    <Link
                      to={path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1 hover:underline"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</Link> */}
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          <div onClick={handleClick}><AnimatedBtn /></div>
        </nav>
      </aside>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-white opacity-30 z-30"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default Header;
