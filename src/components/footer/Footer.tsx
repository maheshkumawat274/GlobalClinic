import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIcons from "../contact/SocialMediaLinks";

const Footer: React.FC = () => {
  return (
    <>
     <section className="w-full bg-[#046381] py-4 px-2 pt-10 pb-10 flex items-center justify-center">
        <div className="flex items-center text-white font-bold text-lg sm:text-4xl">
          Need Help ? Chat with Dr. Ajeet Singh!
          <a
            href="https://wa.me/919711070476"
            className="ml-4 px-6 py-2 bg-white text-[#046381] rounded-full hover:scale-105 shadow transition font-bold"
          >
            WHATSAPP
          </a>
        </div>
      </section>
       <footer className="w-full bg-[#046381] text-white py-14 px-2 sm:px-14 flex flex-col md:flex-row justify-between items-start text-sm border-t border-[#12130f] gap-4">
        <div className="mb-4 md:mb-0 md:w-1/3">
          <h1 className="text-5xl lg-text-6xl md:text-4xl sm:text-5xl font-bold">Global Heart Clinic</h1>
          <div className="py-14">
            <SocialMediaIcons/>
          </div>
          <div className="text-lg sm:text-xl text-white">
            Experience world-class cardiology care with Dr. Ajeet Singh at Global Heart Clinic
          </div>
        </div>
        <div className="mb-4 md:mb-0 md:w-1/3 flex justify-start sm:justify-center">
          <div>
            <h4 className="font-bold mb-1 text-2xl sm:text-3xl">Usefull Links</h4>
          <ul className="text-lg">
            <li>
            <Link to='/about'>
            <a className="hover:underline">
                About Us
              </a>
            </Link>
            </li>
            <li>
              
              <Link to='/services'>
              <a className="hover:underline">
                Services
              </a></Link>
            </li>
            <li>
              <Link to='blogs'>
              <a className="hover:underline">
                Blogs
              </a>
              </Link>
            </li>
            <li>
              <Link to='/contact'>
              <a className="hover:underline">
                Contact Us
              </a></Link>
            </li>
          </ul>
          </div>
        </div>
        <div className="md:w-1/3">
          <h2 className="font-bold mb-1 text-2xl sm:text-3xl">Contact</h2>
          <div className="text-lg">
          <div>UG-20 alpha plaza,sector alpha 1, Greater Noida 201310</div>
          <div>+918252587182</div>
          <div>info@globalheartclinic.com</div>
          </div>
        </div>
      </footer>
      <hr className="text-white"/>
      <div className=" text-md py-8 text-center bg-[#046381] text-white px-2">
        <span>
          Designed with{" "}
          <a href="https://maheshweb.online/" className="underline text-sm">
            Creative mahesh
          </a>{" "}
          &copy; Copyright 2025 All Rights Reserved
        </span>
      </div>
    </>
  );
};

export default Footer;