

"use client";
import InputField from "@/src/components/user/InputField";
import { useState } from "react";
import { faUser,faPhone,faMapMarkerAlt,faLock} from '@fortawesome/free-solid-svg-icons';
import Button from "@/src/components/common/button";



const Settings = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    location: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Saved data:", formData);
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="flex flex-col md:flex-row p-6 gap-10">
      {/* Left Panel */}
      <div className="flex flex-col items-center w-full md:w-1/4">
        <div className="w-[217px] h-[217px] bg-gray-200 rounded-full mb-4" />
        <div className="text-center">
          <h2 className="font-bold">John Doe</h2>
          <p className="text-sm text-gray-600">Learner</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 rounded-lg w-[775px] h-[314px] align-middle items-center p-20">
            
         <InputField
        name="firstName"
        placeholder="Enter your first name"
        type="name"
        value={formData.firstName}
        onChange={handleChange}
        icon={faUser}
       
      />

<InputField
        name="lastName"
        placeholder="Enter your last name"
        type="name"
        value={formData.lastName}
        onChange={handleChange}
        icon={faUser}
      />
          
            <InputField
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              icon={faPhone}
            />
            <InputField
              icon={faMapMarkerAlt}
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 p-20 rounded-lg h-[208px] items-center align-middle">
            <InputField
              icon={faLock}
              name="newPassword"
              type="password"
              placeholder="New password"
              value={formData.newPassword}
              onChange={handleChange}
            />
            <InputField
              icon={faLock}
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between mt-4 gap-4">
          <Button
            onClick={handleSave}
            className="flex items-center gap-2"
          >
            Save changes 
          </Button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
