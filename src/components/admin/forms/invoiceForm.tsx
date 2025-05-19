import { FC, useEffect, useState } from "react";
import SelectField from '../Inputs/SelectField';
import { ChevronRight, Clock, DollarSign, Pencil, User } from "lucide-react";
import DateField from "../Inputs/dateField";
import InputField from "../Inputs/inputField";
import Button from "../../common/button";

interface InvoiceFormProps {
  initialData?: {
    learner: string;
    amount: string;
    date: string;
    status: string;
    details: string;
  };
  onSave: (data: { learner: string; amount: string; date: string; status: string; details: string }) => void;
  onCancel: () => void;
}

const InvoiceForm: FC<InvoiceFormProps> = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    learner: "",
    amount: "",
    date: "",
    status: "Pending",
    details: "",
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className=" p-4">
  
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-gray-200 p-6 rounded-sm  space-y-6">
        {/* Select Learner */}
        <div className="flex items-center  pb-1">
          
          <SelectField
            name="learner"
            value={formData.learner}
            onChange={handleChange}
            options={[
              { value: "John Doe", label: "John Doe" },
              { value: "Jane Smith", label: "Jane Smith" },
              // Add more options as needed
            ]}
            leftIcon={<User />}
           placeholder="Select learner"
            className="w-full outline-none"
            
          ></SelectField>
        </div>

        {/* Amount */}
        <div className="flex items-center  pb-1">
        
          <InputField 
          name="amount"
          placeholder="Enter amount in USD"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          leftIcon={<DollarSign/>}
          required
          
          />
        </div>

        {/* Due Date */}
        <div className="flex items-center pb-1">
       
          <DateField
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full outline-none"
          placeholder="Due date"
        
          />
        </div>

        {/* Status */}
        <div className="flex items-center  pb-1">
          

          <SelectField
            name="status"
            value={formData.status}
            onChange={handleChange}
            options={[
              { value: "Paid", label: "Paid" },
              { value: "Pending", label: "Pending" },
              // Add more options as needed
            ]}
            leftIcon={<Clock />}
           placeholder="Select status"
            className="w-full outline-none"
            
          ></SelectField>
        </div>
        
        {/* Payment Details */}
        <div className="flex items-start  pb-1">
        
         
          <InputField
          name="details"
          value={formData.details}
          onChange={handleChange}
          placeholder="Payment details"
          leftIcon={<Pencil/>}
          
          />
          
        </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2 pt-4">
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            rightIcon={<ChevronRight/>}
          >
            Cancel
          </Button>
          <Button
           
            onClick={handleSubmit}
            rightIcon={<ChevronRight/>}
          >
            {initialData ? "Update Invoice" : "Create Invoice"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;
