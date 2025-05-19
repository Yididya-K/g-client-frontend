// components/layout/AuthWrapper.tsx
import React from 'react';
import Image from 'next/image';
import authImage from '@/public/auth.png'; // Adjust the path as necessary
interface AuthWrapperProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footerText?: React.ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ title,subtitle, children, footerText }) => {
  return (
    <div className="min-h-2/3 max-h-[972px] flex flex-col justify-between my-16">
      <main className="flex flex-col md:flex-row items-center  flex-grow px-4 py-8 max-w-7xl mx-auto w-full gap-12">
        {/* Image section */}
        <div className="flex justify-center rounded-full w-full md:w-1/2">
          <Image
            src={authImage}
            alt="Learning illustration"
            width={600}
            height={600}
            className="max-w-full h-auto"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 max-w-md">
          <h2 className="text-2xl md:text-4xl font-sans font-semibold text-center mb-12 text-gray-600">{title}</h2>
          {subtitle && <p className="text-sm sm text-center mb-6 text-gray-800">{subtitle}</p>}

          {children}
          {footerText && <div className="mt-6 text-center text-sm text-gray-600">{footerText}</div>}
        </div>
      </main>
    </div>
  );
};

export default AuthWrapper;
