// components/LearnerDetailSidebar.tsx
"use client";

import { FC } from "react";
import { X } from "lucide-react";
import clsx from "clsx";

// Re-using the Learners interface from your table
interface Learners {
  id: number;
  learner: string;
  course: string;
  amount: string;
  date: string;
  gender: "Male" | "Female";
  avatarUrl: string;
  email?: string; // Added email based on image
  contact?: string; // Added contact based on image
  location?: string; // Added location based on image
  bio?: string; // Added bio based on image
}

interface LearnerDetailSidebarProps {
  learner: Learners | null;
  isOpen: boolean;
  onClose: () => void;
}

const LearnerDetailSidebar: FC<LearnerDetailSidebarProps> = ({
  learner,
  isOpen,
  onClose,
}) => {
  if (!learner) return null;

  // Fallback values if specific data isn't available for a learner
  const learnerEmail = learner.email || `${learner.learner.toLowerCase().replace(/\s+/g, ".")}@example.com`;
  const learnerContact = learner.contact || "+23341000012"; // Example from image
  const learnerLocation = learner.location || "Accra, Ghana"; // Example from image
  const learnerBio = learner.bio || "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";


  return (
    <>
      {/* Overlay */}
      <div
  className={clsx(
    "fixed inset-0 z-40 bg-black/50 transition-opacity duration-500",
    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
  )}
  onClick={onClose}
/>

<div
  className={clsx(
    "fixed top-0 right-0 z-50 h-full w-full max-w-md  bg-white shadow-xl transition-transform ease-in-out ",
    isOpen ? "translate-x-0 duration-500" : "translate-x-full"
  )}
>
        {/* Header */}
        <div className="bg-[#004AAD] h-[200px] text-white relative"> {/* Using the blue from previous context */}
            
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200"
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
          </div>
          <div className="flex flex-col items-center pt-8 pb-4  ">
            <img
              src={learner.avatarUrl}
              alt={learner.learner}
              className="w-[250px] h-[250px] -mt-[140px] z-10 rounded-full border-4 border-white object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold">{learner.learner}</h2>
            <p className="text-sm ">{learnerEmail}</p>
          </div>
        

        {/* Content */}
        <div className="p-6 space-y-5 text-sm border-t border-t-gray-300 mx-6 ">
          <div className="flex gap-5">
            <span className="font-medium text-gray-500">Program</span>
            <span className="text-gray-800 ">{learner.course}</span>
          </div>
          <div className="flex gap-6">
            <span className="font-medium text-gray-500">Gender</span>
            <span className="text-gray-800">{learner.gender}</span>
          </div>
          <div className="flex gap-6">
            <span className="font-medium text-gray-500">Contact</span>
            <span className="text-gray-800">{learnerContact}</span>
          </div>
          <div className="flex gap-6">
            <span className="font-medium text-gray-500">Location</span>
            <span className="text-gray-800">{learnerLocation}</span>
          </div>
          <div className="flex gap-10">
            <span className="font-medium text-gray-500">Paid</span>
            <span className="text-gray-800 font-semibold">{learner.amount}</span>
          </div>
          <div className="flex gap-12">
            <h4 className="font-medium text-gray-500 mb-1">Bio</h4>
            <p className="text-gray-700 leading-relaxed">
              {learnerBio}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnerDetailSidebar;