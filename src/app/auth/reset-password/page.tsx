'use client';

import { useState } from 'react';
import InputField from '@/src/components/common/InputField';
import {  faLock } from '@fortawesome/free-solid-svg-icons';
import Button from "@/src/components/common/button"; 
import { FiArrowRight } from 'react-icons/fi';
import AuthWrapper from '@/src/components/auth/authformwrapper';



const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
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
    title="Reset Password"
   subtitle=' Enter your new password to reset password '
    
  >
    <form onSubmit={handleSubmit} className="space-y-4">
     
          <InputField
            name="password"
            placeholder="New password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            icon={faLock}
          />
          <InputField
            name="confirmPassword"
            placeholder="Confirm new password"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            icon={faLock}
          />
     
     <Button className="w-full mb-4 flex items-center justify-center " rightIcon={<FiArrowRight/>}>
      Reset Password
      </Button>
    </form>
    </AuthWrapper>
  );
};

export default ResetPassword;
