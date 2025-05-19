import { FC, useEffect, useState } from "react";

import {
  ChevronRight,
  
  User,
  CircleDollarSign,
    Clock,
  GraduationCap,
  Pencil
} from "lucide-react";

import InputField from "../Inputs/inputField";
import Button from "../../common/button";
import ImageUpload from "../Inputs/ImageUpload";

interface TrackFormProps {
  initialData?: {
    course: string;
    price: number;
    instractor: string;
    Duration: { start: number; end: number };
    imageUrl: string;
    description: string;
  };
  onSave: (data: TrackFormProps["initialData"]) => void;
  onCancel: () => void;
}

const TrackForm: FC<TrackFormProps> = ({
  initialData,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState<
    NonNullable<TrackFormProps["initialData"]>
  >({
    course: "",
    price: 0,
    instractor: "",
    Duration: {
      start: 0,
      end: 0,
    },
    imageUrl: "",
    description: "",
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
            name="course"
            placeholder="Course title"
            leftIcon={<GraduationCap />}
            value={formData.course}
            onChange={handleChange}
          />
          <InputField
            name="price"
            placeholder="Price"
            leftIcon={<CircleDollarSign />}
            value={formData.price}
            onChange={handleChange}
          />
          <div className="col-span-2">
            <InputField
              name="Instractor"
              placeholder="Instractor"
              leftIcon={<User />}
              value={formData.instractor}
              onChange={handleChange}
            />
          </div>
          
            <div className="col-span-2">
                <InputField
                name="Duration"
                placeholder="Duration"
                leftIcon={<Clock />}
                value={`${formData.Duration.start} - ${formData.Duration.end}`}
                onChange={handleChange}
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
              value={formData.description}
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
            {initialData ? "Update Track" : "Create Track"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TrackForm;
