// app/admin/tracks/[id]/page.tsx
"use client"; // Add this line

import { FC, useEffect, useState } from "react"; // Add useEffect and useState
import Image from "next/image";
import { notFound, useRouter } from "next/navigation"; // Import useRouter
import Button from "@/src/components/common/button"; // Adjust the import path if needed
import {  ChevronRight } from "lucide-react";

// Extend the base Track interface for detail page
interface TrackDetail {
  id: string | number;
  title: string;
  imageUrl: string;
  price: number;
  duration: string;
  instructor: string;
  learnersCount: number;
  slug: string;
  description: string;
  stacks: string[];
  dateCreated: string;
}

const stackBorderColors = [
    'border-blue-500',
    'border-green-500',
    'border-yellow-500',
    'border-red-500',
    'border-purple-500',
    'border-indigo-500',
    'border-pink-500',
  ];

// Placeholder data fetching function - adjusted to return a Promise
const getTrackDetails = async (id: string | number): Promise<TrackDetail | null> => {
  // Simulate fetching data
  const dummyTracks: TrackDetail[] = [
    {
      id: '1',
      title: 'Software Engineering Track',
      imageUrl: '/softwareCourse.jpg',
      price: 380.00,
      duration: '12 weeks',
      instructor: 'Benjamin',
      learnersCount: 150,
      slug: 'software-engineering-track',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      stacks: ['ReactJs', 'NextJs', 'NodeJs', 'Django', 'MongoDB', 'VueJs'],
      dateCreated: '07 Jan, 2025',
    },
    // Add more dummy tracks as needed
  ];

  // Simulate finding the track by ID with a delay
   await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

  const track = dummyTracks.find(t => t.id === String(id));


  return track || null;
};

interface TrackDetailPageProps {
  params: {
    id: string;
  };
}

// Change component to a standard FC and handle loading/fetching inside
const TrackDetailPage: FC<TrackDetailPageProps> = ({ params }) => {
  const router = useRouter(); // Use useRouter for navigation in Client Component
  const [track, setTrack] = useState<TrackDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrack = async () => {
      setLoading(true);
      const trackData = await getTrackDetails(params.id);
      if (!trackData) {
        notFound(); // Still use notFound if data is null
      }
      setTrack(trackData);
      setLoading(false);
    };

    fetchTrack();
  }, [params.id]); // Refetch if the ID changes

  if (loading) {
      // You can return a loading spinner or skeleton here
      return <div className="container mx-auto p-4 md:p-8 bg-gray-100 min-h-screen">Loading...</div>;
  }

  // If after loading, track is still null (should be caught by notFound),
  // although the notFound() call should prevent reaching here if trackData was null.
  // Adding a defensive check just in case, though notFound is the intended path.
   if (!track) {
       return <div className="container mx-auto p-4 md:p-8 bg-gray-100 min-h-screen text-center text-red-600">Error loading track or track not found.</div>;
   }


  return (
    <div className="container mx-auto p-4 md:p-8  min-h-screen">
      {/* Breadcrumbs/Tabs - Based on the image's "Tracks | details" */}
      <div className="flex items-center text-gray-600 mb-6">
        <span onClick={() => router.push('/admin/tracks')} className="hover:underline cursor-pointer">Tracks</span> {/* Make "Tracks" clickable */}
        <span className="mx-2">|</span>
        <span className="font-semibold text-gray-800">details</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column: Image and Course Details */}
        <div className="md:w-1/3 bg-gray-200  p-2 flex flex-col overflow-hidden">
        <div className="bg-white mb-2">
          <div className="relative w-full h-[360px] overflow-hidden mb-4">
            <Image
              src={track.imageUrl}
              alt={track.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
             

          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4 px-2">{track.title}</h1>
          </div>
          <div className="space-y-3 text-gray-700 bg-white px-2">
            <h2 className="text-lg font-semibold mb-6">About Course</h2>
            <div className="flex justify-between border-b border-gray-200 py-4">
              <span>Price:</span>
              <span className="font-semibold text-gray-800">${track.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 py-4">
              <span>Duration:</span>
              <span className="font-semibold text-gray-800">{track.duration}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 py-4">
              <span>Instructor:</span>
              <span className="font-semibold text-gray-800">{track.instructor}</span>
            </div>
            <div className="flex justify-between py-4">
              <span>Date:</span>
              <span className="font-semibold text-gray-800">{track.dateCreated}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Description, Stacks, and Actions */}
        <div className="md:w-2/3 bg-white rounded-lg shadow-md p-6 flex flex-col">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {track.description}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Stacks</h2>
            <div className="flex flex-wrap gap-2 max-w-2/3">
            {track.stacks.map((stack, index) => {

                 const borderColorClass = stackBorderColors[index % stackBorderColors.length];
                return (
                <span
                  key={index}
                  className={`flex text-md rounded-md w-[124px] h-[48px] text-center items-center justify-center border-2 ${borderColorClass} bg-gray-50 text`}
                >
                  {stack}
                </span>
               );
              })}
            </div>
          </div> 
          {/* Action Buttons */}
          <div className=" flex flex-row gap-4">
             {/* Use router.back() or router.push() for navigation in Client Components */}
            <Button
              onClick={() => router.back()} // Use router.back() for "Back"
               variant="secondary"
              leftIcon={<ChevronRight size={20} className="ml-1.5 transform rotate-180" />}
            >
              Back
            </Button>
            <Button
              onClick={() => alert("Update action goes here for track ID: " + track.id)} // Example onClick
             
              rightIcon={<ChevronRight size={20} className="ml-1.5" />}
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackDetailPage;