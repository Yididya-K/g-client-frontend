"use client";
import AuthFormWrapper from '@/src/components/admin/authWrapper';
import InputField from '@/src/components/admin/Inputs/inputField';
import Button from '@/src/components/common/button';
import { useForm } from 'react-hook-form';

import { ChevronRight, ChevronLeft,Lock } from 'lucide-react';




interface ResetPasswordFormData {
    password: string;
    confirmPassword: string;
  }
  
  const ResetPassword: React.FC = () => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors, touchedFields },
    } = useForm<ResetPasswordFormData>();
  
    const password = watch('password');
  
    const onSubmit = (data: ResetPasswordFormData) => {
      console.log('Password reset submitted:', data);
      // Call API to reset password
    };
  

  return (
    <AuthFormWrapper>
  <div className="min-h-screen flex flex-col items-center justify-center px-4 min-w-[556px]">
      {/* Back Button */}
      <Button 
      variant='outlined'
      className="absolute top-6 left-6 md:left-1/3"
     leftIcon={ <ChevronLeft className="h-4 w-4 mr-1" />}>          
       Back
      </Button>

      {/* Content */}
      <div className="w-2/3 md:w-full text-center">
        

        <h1 className="text-2xl font-bold mb-6 text-left">Create New Password</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Password Input */}
          <InputField
              placeholder="New password"
              type="password"
              leftIcon={<Lock className="h-5 w-5" />}
              status={
                errors.password
                  ? 'error'
                  : touchedFields.password
                  ? 'success'
                  : 'default'
              }
              hint={
                typeof errors.password?.message === 'string'
                  ? errors.password.message
                  : undefined
              }
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />

            {/* Confirm Password */}
            <InputField
              placeholder="Confirm new password"
              type="password"
              leftIcon={<Lock className="h-5 w-5" />}
              status={
                errors.confirmPassword
                  ? 'error'
                  : touchedFields.confirmPassword
                  ? 'success'
                  : 'default'
              }
              hint={
                typeof errors.confirmPassword?.message === 'string'
                  ? errors.confirmPassword.message
                  : touchedFields.confirmPassword &&
                    password !== watch('confirmPassword')
                  ? 'Passwords do not match'
                  : undefined
              }
              {...register('confirmPassword', {
                required: 'Confirm your password',
                validate: (value: string) =>
                  value === password || 'Passwords do not match',
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
