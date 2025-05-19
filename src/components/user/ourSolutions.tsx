import React from 'react'

import { HiOutlineCloud } from "react-icons/hi2";
import { TbDatabaseCog } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa6";


interface SolutionCardProps {
  title: string;
  description: string;
  price: string;
  previewText?: string; // Make previewText optional
  icon: React.ReactNode;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, price, previewText = "Preview", icon }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md h-[304px] w-[325px] rounded-xl p-6 shadow-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/20">
      <div className="mb-4 text-[#01589A]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold  mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
     
      <div className="flex items-center justify-between mt-4">
      <p className="text-lg font-bold  mt-4"> <span className='text-gray-400'>Price :</span> {price}</p>
      {previewText && ( // Conditionally render the preview button
        <a href='' className=' text-[#01589A] underline'>
          {previewText}
        </a>
      )}
      </div>
    </div>
  );
};

const OurSolutions = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold  mb-4">Our Solutions</h2>
          <p className="text-gray-700 max-w-[1031px] mx-auto">
            Create your account quickly with just your email or social media login, then explore a wide range of solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-[1031px] items-center justify-center align-middle mx-auto">
          <SolutionCard
            title="Software Development"
            description="Unlock your potential with comprehensive training in modern software development."
            price="$350"
            icon={<FaLaptopCode className="w-20 h-20" />}
          />
          <SolutionCard
            title="Data Science Mastery"
            description="Equip yourself with the skills to analyze, interpret, and leverage data, becoming an expert."
            price="$350"
            icon={<TbDatabaseCog className="w-20 h-20" />}
          />
          <SolutionCard
            title="Cloud Computing Expertise"
            description="Gain hands-on experience in cloud architecture, preparing you to manage scalable solutions."
            price="$350"
            icon={<HiOutlineCloud className="w-20 h-20" />}
          />
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
