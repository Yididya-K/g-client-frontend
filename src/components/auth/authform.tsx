'use client';

import { useState } from 'react';
import InputField from '@/src/components/user/InputField'; 
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from "@/src/components/common/button"; // your button

interface AuthFormProps {
  type: 'login' | 'signup';
}

const AuthForm = ({ type }: AuthFormProps) => {
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
    // add your validation logic here
    console.log(type.toUpperCase(), formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {type === 'signup' && (
        <>
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
        </>
      )}
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
      {type === 'signup' && (
        <InputField
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          icon={faLock}
          error={errors.confirmPassword}
        />
      )}
      <Button type="submit" className="w-full">
        {type === 'login' ? 'Login' : 'Sign Up'}
      </Button>
    </form>
  );
};

export default AuthForm;
