import React from 'react';
import Image from 'next/image';
import nextStepImage from '@/public/nextStep.png'; 
const techStackList = [
  { name: 'React.js', borderColor: 'border-red-500' },
  { name: 'Next.js', borderColor: 'border-green-500' },
  { name: 'Node.js', borderColor: 'border-yellow-500' },
  { name: 'Django', borderColor: 'border-blue-500' },
  { name: 'MongoDB', borderColor: 'border-purple-500' },
  { name: 'Vue.js', borderColor: 'border-pink-500' },
  { name: 'AWS', borderColor: 'border-teal-500' },
  { name: 'Azure', borderColor: 'border-orange-500' },
  { name: 'PowerBI', borderColor: 'border-lime-500' },
  { name: 'Python', borderColor: 'border-indigo-500' },
  { name: 'Excel', borderColor: 'border-cyan-500' },
  { name: 'Tableau', borderColor: 'border-amber-500' },
];

const NextStepSection = () => {
  return (
    <section className="bg-[#01589A] py-16 h-3/4">
      <div className="container  px-4 grid md:grid-cols-2 gap-8 items-center ">
        {/* Text Content */}
        <div className='sm:mx-20'>
            <div className='mb-20'>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 ">What will be next step</h2>
          <p className="text-gray-300 mb-8">
            Discover our diverse stack of solutions, including software development, data science, and cloud tools. Sign up today and kickstart your journey!
          </p>
          </div>
          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 item-center">
          {techStackList.map((tech) => (
            <div
              key={tech.name}
              className={`hover:scale-[1.02] hover:shadow-xl  rounded-lg p-2 flex items-center hover: justify-center text-white font-medium border-2 ${tech.borderColor}`}
            >
              {tech.name}
            </div>
          ))}
        </div>
        </div>
        <div>
            <Image 
            src={nextStepImage} 
            alt='Next Step Image'
            width={600}
            height={500}
            />
        </div>

        
        
      </div>
    </section>
  );
};

export default NextStepSection;
