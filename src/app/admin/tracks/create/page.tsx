"use client";


import TrackForm from "@/src/components/admin/forms/trackForm";
import { useRouter } from "next/navigation";

export default function NewLearnerPage() {
  const router = useRouter();

  return (

    <div className="p-6">

        <div className="p-6 ">
              <div className="flex justify-between items-center mb-4 ">
                <h2 className="text-md font-semibold text-gray-600 ">Track

                   <span className="text-black border-l-2 ml-2 p-2">Create TracK</span>
                </h2>
              </div>
            </div>
      <TrackForm
        onCancel={() => router.push("/learners")}
        onSave={(track) => {
          console.log("Created track:", track);
          router.push("/admin/tracks");
        }}
      />
    </div>
  );
}
