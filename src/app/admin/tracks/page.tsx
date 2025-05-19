"use client";
import { useRouter } from "next/navigation";
import InputField from "@/src/components/admin/Inputs/inputField";

import Button from "@/src/components/common/button";
import { Plus, Search } from "lucide-react";
import { FC } from "react";
import TrackCard, { Track } from "@/src/components/admin/cards/trackCard";

const sampleTracks: Track[] = [
    {
      id: 1,
      title: "Software Engineer Path",
      imageUrl: "/node.jpg", // Replace with actual image path or URL
      price: 380.0,
      duration: "12 weeks",
      instructor: "Benjamin",
      learnersCount: 200,
      slug: "software-engineer-path",
    },
    {
      id: 2,
      title: "Cloud Computing Expertise",
      imageUrl: "/cloudCourse.jpg", // Replace with actual image path or URL
      price: 380.0,
      duration: "12 weeks",
      instructor: "Williams",
      learnersCount: 200,
      slug: "cloud-computing-expertise",
    },
    {
      id: 3,
      title: "Data Science Mastery",
      imageUrl: "/datascienceCourse.jpg", // Replace with actual image path or URL
      price: 380.0,
      duration: "12 weeks",
      instructor: "Enoch",
      learnersCount: 200,
      slug: "data-science-mastery",
    },
    // Add more tracks as needed
  ];
  
  interface TrackListProps {
    tracks?: Track[]; // Make tracks optional if you fetch them here
  }

  const TrackList: FC<TrackListProps> = ({ tracks = sampleTracks }) => {


  const router = useRouter();
  
  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Tracks</h2>
      </div>

      <div className="flex items-center mb-4 gap-4">
        <InputField
          type="text"
          placeholder="Search track"
          leftIcon={<Search className="h-4 w-4 " />}
          className="flex-1 min-w-0"
        />
        <Button
          onClick={() => router.push("/admin/tracks/create")}
          className="flex-shrink-0"
          rightIcon={<Plus className="h-4 w-4 ml-2" />}

        >
          Create Track
        </Button>
      </div>
        <div className="mt-15">
      {tracks.length === 0 ? (
        <p className="text-center text-gray-500">No tracks available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      )}
      </div>

    </div>
  );
};

export default TrackList;
