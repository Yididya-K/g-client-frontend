import React from "react";
import Button from "@/src/components/common/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUsers,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineArrowCircleUp } from "react-icons/md";
library.add(faGraduationCap, faUsers, faClock);

import Image from "next/image";
import { TbLogin2 } from "react-icons/tb";
import { IoArrowDown } from "react-icons/io5";


// StatsSection Component

const StatsSection: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl my-4">
            We are proud
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            We take pride in our achievements and commitment to excellence. Join
            us in celebrating innovation, growth, and success.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-y-8 md:divide-x md:divide-[#679BC2]">
          <div className="text-center md:pr-8">
            <div className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="w-[84px] h-[80px] text-[#4182B3] mx-auto mb-4"
              />
            </div>
            <p className="mt-4 text-5xl font-bold text-[#01589A]">4+</p>
            <p className="mt-1 text-lg text-gray-500">Courses</p>
          </div>
          <div className="text-center md:px-8">
            <div className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={faUsers}
                className="w-[84px] h-[80px] text-[#4182B3] mx-auto mb-4"
              />
            </div>
            <p className="mt-4 text-5xl font-bold text-[#01589A]">200+</p>
            <p className="mt-1 text-lg text-gray-500">Course students</p>
          </div>
          <div className="text-center md:pl-8">
            <div className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={faClock}
                className="w-[84px] h-[84px] text-b mx-auto mb-4 text-[#4182B3]"
              />
            </div>
            <p className="mt-4 text-5xl font-bold text-[#01589A]">250+</p>
            <p className="mt-1 text-lg text-gray-500">Hours of content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// TimeToStartSection Component
const TimeToStartSection: React.FC = () => {
  return (
    <section className="relative w-full h-[200px] flex items-center justify-center text-white">
      {/* Background Image */}
      <Image
        src="/timetoinvest.jpg" 
        alt="Invest background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="z-0"
      />

      {/* Overlay for blue tint */}
      <div className="absolute inset-0 bg-[#01589ACC] bg-opacity-80 "></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            It’s time to start investing in yourself
          </h2>
          <p className=" text-md md:text-lg mb-2">
            Online courses open the opportunity for learning to almost anyone,
            regardless of their scheduling commitments.
          </p>
        </div>
        <Button className="border border-white  ">Get started</Button>
      </div>
    </section>
  );
};

// OnBoarding Component
const OnBoarding: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start justify-center max-w-6xl mx-auto py-12 px-4">
      {/* Left Side - Steps */}
      <div className="flex flex-col gap-10 w-[508px] h-[616px] md:w-1/2 relative">
        {/* Step 1 */}
        <div className="bg-white rounded transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-xl p-6 relative z-10 sm:w-[508px] sm:h-[152px] hover:border-l-4 hover:border-[#01589A]">
          <div className="flex items-start gap-4">
            <TbLogin2 className="text-[#01589ACC] text-8xl" />
            <div>
              <h3 className="text-lg font-semibold">
                Sign Up and Choose Your Course
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Create your account quickly with just your email or social media
                login, then explore a wide range of courses.
              </p>
            </div>
          </div>
        </div>

        {/* Arrow 1 */}
        <div className="w-full flex justify-center -mt-6 h-[20px]">
          <IoArrowDown className="text-[#01589A] text-5xl" />
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-xl p-6 relative z-10 w-[508px] h-[152px] hover:border-l-4  hover:border-[#01589A]">
          <div className="flex items-start gap-4">
            <MdOutlineArrowCircleUp className="text-[#01589ACC] text-8xl" />
            <div>
              <h3 className="text-lg font-semibold">Onboarding</h3>
              <p className="text-gray-600 text-sm mt-1">
                Get started seamlessly with a smooth onboarding experience.
                Learn the essentials and set yourself up for success from day
                one.
              </p>
            </div>
          </div>
        </div>

        {/* Arrow 2 */}
        <div className="w-full flex justify-center -mt-6">
          <IoArrowDown className="text-[#01589A] text-5xl" />
        </div>

        {/* Step 3 */}
        <div className="bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl rounded shadow-xl p-6 relative z-10 w-[508px] h-[152px] hover:border-l-4  hover:border-[#01589A]">
          <div className="flex items-start gap-4">
            <FaGraduationCap className="text-[#01589ACC] text-8xl" />
            <div>
              <h3 className="text-lg font-semibold">Start Learning</h3>
              <p className="text-gray-600 text-sm mt-1">
                Start your learning journey with practical, hands-on experience.
                Develop the skills needed to build, implement, and manage
                effective solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Image Placeholder */}
      <div className="hidden md:block w-1/2">
     
        <Image
          src="/onboarding.png"
          alt="Learning process illustration"
          className=" object-contain shadow-2xl rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          width={508} 
          height={616} 
        />
      </div>
    </div>
  );
};


// weAreProudSection Component
const weAreProudSection = () => {
  return (
    <section>
      <StatsSection />
      <TimeToStartSection />
      <OnBoarding />
    </section>
  );
};

export default weAreProudSection;
