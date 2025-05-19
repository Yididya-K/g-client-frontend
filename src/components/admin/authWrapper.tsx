'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

interface AuthFormWrapperProps {
  children: React.ReactNode;
}

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({ children }) => {
  const pathname = usePathname();

  // Choose image based on route
  const imageSrc =
    pathname === '/otp-verification'
      ? '/otp-left-section.png' 
      : '/left-section2.png';         

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <Image
        src={imageSrc}
        alt="Illustration"
        className="w-1/3 h-screen hidden md:flex object-cover"
        width={534}
        height={1080}
      />

      {/* Right Side (Form Section) */}
      <div className="w-full bg-white flex items-center justify-center p-8">
        {children}
      </div>
    </div>
  );
};

export default AuthFormWrapper;
