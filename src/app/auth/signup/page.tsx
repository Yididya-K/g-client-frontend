// app/signup/page.tsx
'use client';
import React from 'react';
import AuthWrapper from '@/src/components/auth/authformwrapper';
import  Button  from '@/src/components/common/button';
import { FiLogIn } from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import InputField from "@/src/components/common/InputField";
import { faEnvelope ,faLock,faUser} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


const SignupPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      const [errors, setErrors] = useState<{ [key: string]: string }>({});
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // validation logic here
        console.log( formData);
      };
  return (
    <AuthWrapper
      title="Signup to get started"
      footerText={
        <>
          Already have an account? <a href="/login" className="text-blue-600 underline">login</a>
        </>
      }
    >
      <Button className="w-full mb-4 flex items-center justify-center " variant="outlined" leftIcon={<FontAwesomeIcon icon={faGoogle} />}>
       
        Signup using Google
      </Button>

      <div className="text-center text-sm text-gray-500 mb-4">or</div>

      
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <InputField
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            icon={faUser}
            error={errors.firstName}
          />
          <InputField
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            icon={faUser}
            error={errors.lastName}
          />
      
      <InputField
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        icon={faEnvelope}
        error={errors.email}
      />
      <InputField
        name="password"
        placeholder="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        icon={faLock}
        error={errors.password}
      />
   
        <InputField
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          icon={faLock}
          error={errors.confirmPassword}
        />
        <div className="text-right text-sm text-blue-600">
          <a href="#">Forgot password ?</a>
        </div>
        <Button className="w-full mb-4 flex items-center justify-center " rightIcon={<FiLogIn/>}>Sign up</Button>
      </form>
    </AuthWrapper>
  );
};

export default SignupPage;
