import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  // FaYoutube,
  // FaTwitter,
  // FaPinterest,
  // FaTelegramPlane,
  FaWhatsapp
} from "react-icons/fa";
// import { SiQuora, SiThreads } from "react-icons/si";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import AnimatedBtn from "../btns/Animatedbtn";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* --- Top Header --- */}
      <div className="bg-[#EDEDE9] text-sm py-2 px-6 justify-evenly items-center hidden md:flex ">
        <div className="flex space-x-4 text-[#046381]">
          <p className="flex items-center hover:underline">Book Online  <span className="px-4">➨</span>  You can request appointment in 24 hours</p>
        </div>
        <nav aria-label="Social Media Links" className="flex space-x-8 text-[#3647AD]">
          <a
            href="tel:+919711070476"
            className="flex items-center hover:underline"
          >
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
          {/* <a href="#" aria-label="YouTube"><FaYoutube /></a>
          <a href="https://x.com/NexifyD" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://www.threads.com/@nexifydigital.in" aria-label="Threads"><SiThreads /></a>
          <a href="#" aria-label="Quora"><SiQuora /></a>
          <a href="#" aria-label="Pinterest"><FaPinterest /></a>
          <a href="#" aria-label="Telegram"><FaTelegramPlane /></a> */}
          <a 
          href="https://wa.me/919711070476" // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </nav>
      </div>

      {/* --- Main Header --- */}
      <div
        className={`bg-[#046381] px-4 flex justify-between items-center shadow transition-all duration-300 ${
          isScrolled ? "fixed top-0 w-full z-20" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 h-24 w-48">
          <Link to="/" className="flex items-center gap-2" aria-label="Global Heart Clinic">
            <img
              src="./imgs/logo.png"
              alt="Global Heart Clinic logo"
              className=""
            />
          </Link>
        </div>


        {/* Navigation - Desktop */}
        <nav className="hidden md:flex gap-8 text-[12px] md:text-[18px]" aria-label="Primary Navigation">
          <ul className="flex gap-7 text-white">
            <li><Link className="hover:border-b-2 border-white" to="/">Home</Link></li>
            <li><Link className="hover:border-b-2 border-white" to="/about">AboutUs </Link></li>
            <li><Link className="hover:border-b-2 border-white" to="/services">Services</Link></li>
            <li><Link className="hover:border-b-2 border-white" to="/blogs">Blogs</Link></li>
            <li><Link className="hover:border-b-2 border-white" to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <div>
            <AnimatedBtn/>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Mobile Menu"
            className="text-3xl text-[#046381]"
          >
            <HiMenu className="text-white"/>
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Drawer --- */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-full bg-[#046381] text-white transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile Navigation Menu"
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-white/20">
          <div className="flex items-center gap-3 h-24 w-48">
          <Link to="/" className="flex items-center gap-2" aria-label="Global Heart Clinic">
            <img
              src="./imgs/logo.png"
              alt="Global Heart Clinic logo"
              className=""
            />
          </Link>
        </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Mobile Menu"
            className="text-white text-3xl"
          >
            <IoClose />
          </button>
        </div>

        {/* Mobile Nav Items */}
        <nav className="flex flex-col gap-4 px-6 py-6 font-medium text-lg">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
         <div>
           <AnimatedBtn/>
         </div>
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