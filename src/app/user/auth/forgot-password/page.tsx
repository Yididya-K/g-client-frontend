'use client';

import { useState } from 'react';
import InputField from '@/src/components/common/InputField';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Button from "@/src/components/common/button"; // your button
import AuthWrapper from '@/src/components/auth/authformwrapper';
import { FiArrowRight } from "react-icons/fi";



const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: ''
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
    title="Forgot Password"
    subtitle=' Enter you email address to reset password '
    
  >
    <form onSubmit={handleSubmit} className="space-y-4">
 
        <InputField
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          icon={faEnvelope}
        />
      
      <Button className="w-full mb-4 flex items-center justify-center " rightIcon={<FiArrowRight/>}>
    Send OTP
      </Button>
    </form>
    </AuthWrapper>
 
  );
};

export default ForgotPassword;
