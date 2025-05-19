'use client';

import { useForm } from 'react-hook-form';
import InputField from '@/src/components/admin/Inputs/inputField';
import AuthFormWrapper from '@/src/components/admin/authWrapper';
import { User, Mail, Phone, Lock } from 'lucide-react';
import Button from '@/src/components/common/button';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm<FormData>({
    mode: 'onBlur',
  });

  const password = watch('password');

  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    contact: string;
  }

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  

  return (
    <AuthFormWrapper>
    
    <div className="absolute top-0 right-0 mt-6 mr-6 md:mt-8 md:mr-8 mb-10 ">
      <p className="text-sm text-gray-700 p-4 flex items-center"> 
        Already have an account?{' '}
        <Button rightIcon={<MdOutlineKeyboardArrowRight className='w-4 h-6' />} className="ml-4" href='/login'>
          Login
        </Button>
      </p>
    </div>
    <div className="flex items-center justify-center font-sans p-4 h-[800px] mt-5">
     
      <div className="p-8 sm:p-10 md:p-12 w-full max-w-screen flex flex-col items-center justify-center "> 
      
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
          Register to get started
        </h1>

       
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-[34px] w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              placeholder='First Name'
              className='md:col-span-1 col-span-2'
              leftIcon={<User className="h-5 w-5 " />}
              status={
                errors.firstName
                  ? 'error'
                  : touchedFields.firstName
                  ? 'success'
                  : 'default'
              }
              hint={typeof errors.firstName?.message === 'string' ? errors.firstName?.message : undefined}
              {...register('firstName', { required: 'First name is required' })}
            />
            <InputField
              placeholder='Last Name'
              className='md:col-span-1 col-span-2'
              leftIcon={<User className="h-5 w-5 " />}
              status={
                errors.lastName
                  ? 'error'
                  : touchedFields.lastName
                  ? 'success'
                  : 'default'
              }
              hint={typeof errors.lastName?.message === 'string' ? errors.lastName?.message : undefined}
              {...register('lastName', { required: 'Last name is required' })}
            />

            <InputField
              placeholder="Email"
              leftIcon={<Mail className="h-5 w-5 " />}
              type="email"
              className='col-span-2'
              status={
                errors.email
                  ? 'error'
                  : touchedFields.email
                  ? 'success'
                  : 'default'
              }
              hint={typeof errors.email?.message === 'string' ? errors.email?.message : undefined}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: 'Invalid email format',
                },
              })}
            />

            <InputField
              placeholder='Password'
              leftIcon={<Lock className="h-5 w-5 " />}
              type="password"
              className='md:col-span-1 col-span-2'
              status={
                errors.password
                  ? 'error'
                  : touchedFields.password
                  ? 'success'
                  : 'default'
              }
              hint={typeof errors.password?.message === 'string' ? errors.password?.message : undefined}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Minimum 6 characters',
                },
              })}
            />
            <InputField
              placeholder='Confirm Password'
              className='md:col-span-1 col-span-2'
              leftIcon={<Lock className="h-5 w-5 " />}
              type="password"
              status={
                errors.confirmPassword || (touchedFields.confirmPassword && password !== watch('confirmPassword')) // Added condition for mismatch visual cue
                  ? 'error'
                  : touchedFields.confirmPassword
                  ? 'success'
                  : 'default'
              }
              hint={
                typeof errors.confirmPassword?.message === 'string'
                  ? errors.confirmPassword.message
                  : touchedFields.confirmPassword && password !== watch('confirmPassword')
                  ? 'Passwords do not match'
                  : undefined
              }
              {...register('confirmPassword', {
                required: 'Confirm your password',
                validate: (value) => value === password || 'Passwords do not match',
              })}
            />


            <InputField
              placeholder='Contact'
              className='col-span-2'
              leftIcon={<Phone className="h-5 w-5 " />}
              type="tel"
              status={
                errors.contact
                  ? 'error'
                  : touchedFields.contact
                  ? 'success'
                  : 'default'
              }
              hint={typeof errors.contact?.message === 'string' ? errors.contact.message : undefined}
              {...register('contact', {
                required: 'Contact is required',
                pattern: {
                  value: /^[0-9]{10,14}$/, // Example: Allows 10 to 14 digits
                  message: 'Enter a valid phone number (10-14 digits)',
                },
              })}
            />
          </div>
          <Button
            type="submit"
            variant='secondary'
            rightIcon={<MdOutlineKeyboardArrowRight className='w-4 h-6' />}
            className="w-full font-semibold py-3 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-150 ease-in-out flex items-center justify-center group"
          >
            Create account
          </Button>
        </form>

        {/* Footer text is now naturally centered because the parent div centers its content */}
        <p className="mt-8 text-xs text-gray-600 text-center">
          By confirming your email, you agree to our{' '}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-700 underline">
            Terms of Service
          </a>
        </p>
        <p className="text-xs text-gray-600 text-center">
          and that you have read and understood our{' '}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-700 underline">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  </AuthFormWrapper>
  );
};

export default RegistrationForm;
