"use client";
import AuthFormWrapper from '@/src/components/admin/authWrapper';
import InputField from '@/src/components/admin/Inputs/inputField';
import Button from '@/src/components/common/button';

import { FaArrowRight } from 'react-icons/fa6';
import { Mail, Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';



const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
      } = useForm<LoginFormData>();
    
      interface LoginFormData {
        email: string;
        password: string;
      }

      const onSubmit = (data: LoginFormData) => {
        console.log('Login Data:', data);
      };
  return (
    <AuthFormWrapper>
   {/* Top navigation */}
  <div className="absolute top-0 right-0 mt-6 mr-6 md:mt-8 md:mr-8">
    <p className="text-sm text-gray-700 p-4">
    Need to create an account?{' '}
      <Button rightIcon={<FaArrowRight />} className="ml-4" href='/register'>
        Signup 
      </Button>
    </p>
  </div>
    <div className=" flex  items-center justify-center  font-sans p-4  ">
      {/* Form card */}
      <div className="bg-white p-8 sm:p-10 md:p-12 w-full  items-center justify-center ">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-left">
          Login into your account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-[556px]">
          {/* Email field */}
          <InputField
           
            placeholder="Enter your email"
            leftIcon={<Mail className="h-5 w-5" />}
            type="email"
            status={
              errors.email
                ? 'error'
                : touchedFields.email
                ? 'success'
                : 'default'
            }
            hint={typeof errors.email?.message === 'string' ? errors.email.message : undefined}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: 'Invalid email format',
              },
            })}
          />

          {/* Password field */}
          <div>
          <InputField
            
            placeholder="Enter your password"
            leftIcon={<Lock className="h-5 w-5" />}
            type="password"
            status={
              errors.password
                ? 'error'
                : touchedFields.password
                ? 'success'
                : 'default'
            }
            hint={typeof errors.password?.message === 'string' ? errors.password.message : undefined}
            {...register('password', {
              required: 'Password is required',
            })}
          />
            <div className="text-left">
              <a href="/forgot-password" className="text-sm font-medium text-blue-800 hover:text-blue-800 hover:underline ">
                Forgot password?
              </a>
            </div>
          </div>


          {/* Submit button */}
          <div className="pt-4"> {/* Added some padding-top for spacing */}
            <button
              type="submit"
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-150 ease-in-out flex items-center justify-center group"
            >
              Login
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 text-gray-600 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </form>

      
       
      </div>
    </div>
    </AuthFormWrapper>
  );
};


export default LoginForm;
