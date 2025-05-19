// app/login/page.tsx
'use client';
import React from 'react';
import AuthWrapper from '@/src/components/auth/authformwrapper';
import  Button  from '@/src/components/common/button';
import { FiLogIn } from "react-icons/fi";
import InputField from "@/src/components/user/InputField";
import { faEnvelope ,faKey} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Image from 'next/image';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ email?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes('@')) {
      setErrors({ email: 'Please enter a valid email address.' });
    } else {
      setErrors({});
      // Do something with the form data
      console.log('Submitted email:', email);
    }
  };
  return (

    <AuthWrapper
      title="Log in to continue your learning journey"
      footerText={
        <>
          Need to create an account? <a href="/user/auth/signup" className="text-blue-600 underline">signup</a>
        </>
      }
    >
      <Button className="w-full mb-4 flex items-center justify-center " variant="outlined" leftIcon={<Image src="/google.png" alt="Google" width={20} height={20} />}>
       
        Log in using Google
      </Button>

      <div className="text-center text-sm text-gray-500 mb-4">or</div>

      
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <InputField
        name="email"
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={faEnvelope}
        error={errors.email}
        success={!errors.email && email.length > 0}
      />
  <InputField
        name="password"
        placeholder="Enter your passowrd"
        type="password"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={faKey}
        error={errors.email}
        success={!errors.email && email.length > 0}
      />
        <div className="text-right text-sm text-blue-600">
          <a href="/user/auth/forgot-password">Forgot password ?</a>
        </div>
        <Button className="w-full mb-4 flex items-center justify-center " rightIcon={<FiLogIn/>}>Login</Button>
      </form>
    </AuthWrapper>
 
  );
};

export default LoginPage;
