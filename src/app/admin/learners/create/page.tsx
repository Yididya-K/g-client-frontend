"use client";

import LearnerForm from "@/src/components/admin/forms/learnerForm";
import { useRouter } from "next/navigation";

export default function NewLearnerPage() {
  const router = useRouter();

  return (

    <div className="p-6">

        <div className="p-6 ">
              <div className="flex justify-between items-center mb-4 ">
                <h2 className="text-md font-semibold text-gray-600 ">Learner

                   <span className="text-black border-l-2 ml-2 p-2">Create Learner</span>
                </h2>
              </div>
            </div>
      <LearnerForm
        onCancel={() => router.push("/learners")}
        onSave={(invoice) => {
          console.log("Created Invoice:", invoice);
          router.push("/learners");
        }}
      />
    </div>
  );
}
