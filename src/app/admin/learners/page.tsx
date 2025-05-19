"use client";
import { useRouter } from "next/navigation";
import InputField from "@/src/components/admin/Inputs/inputField";

import Button from "@/src/components/common/button";
import { Plus, Search } from "lucide-react";
import { FC, useState } from "react";
import SelectField from "@/src/components/admin/Inputs/SelectField";
import LearnerTable from "@/src/components/admin/tables/learnerTable";

interface Learners {
  id: number;
  learner: string;
  course: string;
  amount: string;
  date: string;
  gender: "Male" | "Female";
  avatarUrl: string;
}

const learners: Learners[] = Array(6)
  .fill({
    id: 1,
    learner: "John Doe",
    course: "Software Development",
    amount: "$450.00",
    date: "Nov 17, 2024",
    gender: "Male",
    avatarUrl: "https://placehold.co/40x40/FACC15/FFFFFF?text=JD",
  })
  .map((item, i) => ({
    ...item,
    id: i + 1,
    status: i % 3 === 0 ? "Male" : "Female", // alternate status
  }));

const LearnerList: FC = () => {

  const [selectedlearner, setSelectedLearner] = useState<Learners | null>(null);

  const handleCreate = () => {
    setSelectedLearner(null);
 
  };

  const handleEdit = (invoice: Learners) => {
    setSelectedLearner(invoice);
  
  };

  const handleCancel = () => {
   
    setSelectedLearner(null);
  };
  const router = useRouter();
  const handleSave = (formData: {
    learner: string;
    amount: string;
    date: string;
    status: string;
    details: string;
  }) => {
    const learnerData: Learners = {
      id: selectedlearner ? selectedlearner.id : learners.length + 1,
      learner: formData.learner,
      course: selectedlearner ? selectedlearner.course : "new.email@example.com", // Replace with actual logic
      amount: formData.amount,
      date: formData.date,
      gender: formData.status as "Male" | "Female",
      avatarUrl: selectedlearner
        ? selectedlearner.avatarUrl
        : "https://placehold.co/40x40/FACC15/FFFFFF?text=NA", // Replace with actual logic
    };

    if (selectedlearner) {
      // update logic here
      console.log("Updating invoice:", learnerData);
    } else {
      // create logic here
      console.log("Creating invoice:", learnerData);
    }
    handleCancel();
  };
  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Learners</h2>
      </div>

      <div className="flex items-center mb-4 gap-4">
        <InputField
          type="text"
          placeholder="Search Learners"
          leftIcon={<Search className="h-4 w-4 " />}
          className="flex-1 min-w-2/3"
        />
        <SelectField
            placeholder="Sort by"
            options={[
              { value: "name", label: "Name" },
              { value: "date", label: "Date" },
              { value: "gender", label: "Gender" },
            ]}
        />
        <Button
          onClick={() => router.push("/admin/learners/create")}
          className="flex-shrink-0"
          rightIcon={<Plus className="h-4 w-4 ml-2" />}

        >
          Create learner
        </Button>
      </div>

      <LearnerTable data={learners} resultsPerPageOptions={[5, 10, 25]} />

    </div>
  );
};

export default LearnerList;
