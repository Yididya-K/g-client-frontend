import { FC, useEffect, useState } from "react";
import SelectField from "../Inputs/SelectField";
import {
  ChevronRight,
  Accessibility,
  MapPin,
  Phone,
  User,
  CircleDollarSign,
  VenusAndMars,
  Mail,
  GraduationCap,
  Pencil
} from "lucide-react";

import InputField from "../Inputs/inputField";
import Button from "../../common/button";
import ImageUpload from "../Inputs/ImageUpload";

interface LearnerFormProps {
  initialData?: {
    firstName: string;
    lastName: string;
    email: string;
    program: string;
    gender: string;
    location: string;
    phone: string;
    disabled: string;
    amount: string;
    details: string;
  };
  onSave: (data: LearnerFormProps["initialData"]) => void;
  onCancel: () => void;
}

const LearnerForm: FC<LearnerFormProps> = ({
  initialData,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState<
    NonNullable<LearnerFormProps["initialData"]>
  >({
    firstName: "",
    lastName: "",
    email: "",
    program: "",
    gender: "",
    location: "",
    phone: "",
    disabled: "",
    amount: "",
    details: "",
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-gray-100 p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            name="firstName"
            placeholder="First name"
            leftIcon={<User />}
            value={formData.firstName}
            onChange={handleChange}
          />
          <InputField
            name="lastName"
            placeholder="Last name"
            leftIcon={<User />}
            value={formData.lastName}
            onChange={handleChange}
          />
          <div className="col-span-2">
            <InputField
              name="email"
              placeholder="Email"
              type="email"
              leftIcon={<Mail />}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <SelectField
            name="program"
            value={formData.program}
            onChange={handleChange}
            options={[{ value: "Program A", label: "Program A" }]}
            leftIcon={<GraduationCap />}
            placeholder="Select program"
          />
          <SelectField
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
            leftIcon={<VenusAndMars />}
            placeholder="Gender"
          />
          <InputField
            name="location"
            placeholder="Location"
            leftIcon={<MapPin />}
            value={formData.location}
            onChange={handleChange}
          />
          <InputField
            name="phone"
            placeholder="Phone"
            leftIcon={<Phone />}
            value={formData.phone}
            onChange={handleChange}
          />
          <div className="col-span-2 gap-4">
            <SelectField
              name="disabled"
              value={formData.disabled}
              onChange={handleChange}
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              leftIcon={<Accessibility />}
              placeholder="Disabled"
              className="mb-4"
            />
            <InputField
              name="amount"
              placeholder="Amount"
              type="number"
              value={formData.amount}
              onChange={handleChange}
              leftIcon={<CircleDollarSign />}
              className="w-full"
            />
          </div>
          <div className="flex items-center col-span-2">
           
            <ImageUpload
              type="file"
             
            />
          </div>
          <div className="col-span-2">
            <InputField
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Description"
              className="w-fulltext-sm"
              leftIcon={<Pencil />}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 pt-4">
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            rightIcon={<ChevronRight />}
          >
            Cancel
          </Button>
          <Button type="submit" rightIcon={<ChevronRight />}>
            {initialData ? "Update Learner" : "Create Learner"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LearnerForm;
