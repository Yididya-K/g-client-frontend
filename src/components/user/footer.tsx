import React from 'react';
import Image from 'next/image';
import logo from '../../../public/gclient-logo-white-big.png';

const Footer = () => {
  return (
    <footer className="bg-[#01589A] text-white py-8">
      <div className="w-full flex flex-col items-center">
        {/* Main grid container */}
        <div className="w-full max-w-5xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo Section - Takes half width on md+ */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <div className="mb-4">
              <Image src={logo} alt="GClient Logo" height={200} width={350} /> {/* Bigger logo */}
            </div>
          </div>

          {/* Menu, Contact, Social - share half width */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            {/* Menu */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Menu</h3>
              <ul className="text-sm">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Courses</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p className="text-sm">+233241333224</p>
              <p className="text-sm">New Reiss, Ghana, Accra</p>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Social</h3>
              <ul className="text-sm">
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                <li><a href="#" className="hover:underline">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line + Bottom Info */}
<div className="w-full max-w-5xl mt-6 border-t border-white pt-4 px-4">
  <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-2">
    <p className="text-center md:text-left">© copyright 2025 - G-Client, All rights reserved</p>
    <a href="#" className="hover:underline flex items-center">
      Back to top
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </a>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
