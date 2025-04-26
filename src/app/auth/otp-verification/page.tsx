'use client';

import { useState } from 'react';
import InputField from '@/src/components/common/InputField';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import Button from "@/src/components/common/button"; // your button
import AuthWrapper from '@/src/components/auth/authformwrapper';
import { FiCheck } from "react-icons/fi";


const OtpVerification = () => {
  const [formData, setFormData] = useState({
    otp: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <AuthWrapper
    title="OTP Verification"
    subtitle=' Verify your accounts using the six digit 
sent to test@gmail.com '
    
  >
    <form onSubmit={handleSubmit} className="space-y-4">
 
    <InputField
          name="otp"
          placeholder="Enter OTP Code"
          value={formData.otp}
          onChange={handleChange}
          icon={faKey}
        />
      
      <Button className="w-full mb-4 flex items-center justify-center " rightIcon={<FiCheck/>}>
      Verify
      </Button>
    </form>
    </AuthWrapper>
  );
};

export default OtpVerification;
