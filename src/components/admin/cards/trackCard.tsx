// components/TrackCard.tsx
"use client";

import Image from "next/image";

import { FC } from "react";
import { ChevronRight } from "lucide-react"; // For the button icon
import Button from "../../common/button";

export interface Track {
  id:number;
  title: string;
  imageUrl: string;
  price: number;
  duration: string; // e.g., "12 weeks"
  instructor: string;
  learnersCount: number;
  // slug is useful for creating SEO-friendly URLs
  slug: string;
}

interface TrackCardProps {
  track: Track;
}

const TrackCard: FC<TrackCardProps> = ({ track }) => {
  return (
    <div className="bg-[#F5F5F5] p-2 overflow-hidden flex flex-col h-[607px] ">
      <div className="relative w-full h-[360px]">
        <Image
          src={track.imageUrl}
          alt={track.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
         <h3 className="text-xl font-semibold text-gray-800 mb-3 truncate">
          {track.title}
        </h3>
      </div>
      <div className="p-5 flex flex-col flex-grow bg-white">
       

        <div className="space-y-2.5 text-md  text-gray-600 ">
          <div className="flex justify-between border-b-2 border-b-gray-200  py-2 ">
            <span>Price:</span>
            <span className="font-semibold text-gray-800">
              ${track.price.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between border-b-2 border-b-gray-200  py-2">
            <span>Duration:</span>
            <span className="font-semibold text-gray-800">
              {track.duration}
            </span>
          </div>
          <div className="flex justify-between border-b-2 border-b-gray-200  py-2">
            <span>Instructor:</span>
            <span className="font-semibold text-gray-800">
              {track.instructor}
            </span>
          </div>
          <div className="flex justify-between   py-2">
            <span>Learners:</span>
            <span className="font-semibold text-gray-800">
              +{track.learnersCount}
            </span>
          </div>
        </div>

        <div className="mt-auto">
          {/* The button will link to a detail page, e.g., /tracks/[slug] or /tracks/[id] */}
          <Button
            href={`/admin/tracks/${track.id}`} 
            className="group inline-flex items-start justify-start mt-3.5 "
            rightIcon={<ChevronRight
                size={20}
                className="ml-1.5 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
              />}
          >
            View more
            
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;