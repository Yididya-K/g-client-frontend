"use client";

import InputField from '@/src/components/admin/Inputs/inputField';
import Button from '@/src/components/common/button';
import { useForm } from 'react-hook-form';
import { Mail } from 'lucide-react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import AuthFormWrapper from '@/src/components/admin/authWrapper';




const ResetPassword: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
      } = useForm<ResetPasswordFormData>();
 

  interface ResetPasswordFormData {
    email: string;
  }

  const onSubmit = (data: ResetPasswordFormData) => {
    console.log('email submitted:', data.email);
  };

  return (
    <AuthFormWrapper>
  <div className="min-h-screen flex flex-col items-center justify-center px-4 min-w-[556px]">
      {/* Back Button */}
      <Button 
      variant='outlined'
      className="absolute top-6 left-0 md:left-1/3"
     leftIcon={ <ChevronLeft className="h-4 w-4 mr-1" />}
     href='/login'>          
       Back
      </Button>

      {/* Content */}
      <div className="w-2/3 md:w-full text-center">
        

        <h1 className="text-2xl font-bold mb-6 text-left">Enter your email address</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Input */}
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
         
          {/* Submit Button */}
          <Button
            className="w-full flex items-center justify-center"
            type="submit"
            variant="primary"
            rightIcon={ <ChevronRight className="w-5 h-5" />}
          >
            Reset Password
           
          </Button>
        </form>

        {/* Resend Link */}
        <p className="text-sm text-gray-600 mt-6">
        Having trouble logging in ?{' '}
          <button
            onClick={() => alert('Resending OTP...')}
            className="text-blue-700 hover:underline font-medium"
          >
            Contact support
          </button>
        </p>
      </div>
    </div>
    </AuthFormWrapper>
  );
};


export default ResetPassword;
