import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-white px-5 md:px-20 pt-20 pb-5 text-sm text-gray-600">
      {/* Main Grid Layout */}
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 mb-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-1 mb-5">
            <img src={assets.logo} alt="Logo" className="w-24" />
            <span className="text-pink-400 text-3xl leading-none">.</span>
          </div>
          <p className="max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-gray-800 font-semibold mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About us</li>
            <li className="hover:underline cursor-pointer">Delivery</li>
            <li className="hover:underline cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <p className="text-gray-800 font-semibold mb-5">GET IN TOUCH</p>

          <ul className='flex flex-col gap-2 text-gray-600'>
              <li>+1-212-456-7890</li>
              <li>greatstackdev@gmail.com</li>
          </ul>

        </div>
      </div>

      <hr className="my-5 border-gray-300" />

      {/* Copyright */}
      <p className="text-center text-gray-500">
        Copyright 2024 © GreatStack.dev – All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
