"use client";
import AuthFormWrapper from '@/src/components/admin/authWrapper';
import InputField from '@/src/components/admin/Inputs/inputField';
import Button from '@/src/components/common/button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';



const OTP: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [email] = useState('admindemo@gmail.com'); // Replace dynamically if needed

  interface FormData {
    otp: string;
  }

  const onSubmit = (data: FormData) => {
    console.log('OTP submitted:', data.otp);
  };

  return (
    <AuthFormWrapper>
  <div className="min-h-screen flex flex-col items-center justify-center px-4 min-w-[556px]">
      {/* Back Button */}
      <Button 
      variant='outlined'
      className="absolute top-6 left-0 md:left-1/3"
     leftIcon={ <ChevronLeft className="h-4 w-4 mr-1" />}>          
       Back
      </Button>

      {/* Content */}
      <div className="w-2/3 md:w-full text-center">
        <p className="text-gray-600 mb-2 text-sm">Enter the verification code we sent to your</p>
        <p className="font-semibold text-black mb-15 text-sm">{email}</p>

        <h1 className="text-2xl font-bold mb-6 text-left">OTP verification</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* OTP Input */}
            <InputField
               {...register('otp', { required: true })}
               
                        placeholder='12345678'
                      />
         
          {/* Submit Button */}
          <Button
            className="w-full flex items-center justify-center"
            type="submit"
            variant="primary"
            rightIcon={ <ChevronRight className="w-5 h-5" />}
          >
            Verify
           
          </Button>
        </form>

        {/* Resend Link */}
        <p className="text-sm text-gray-600 mt-6">
          Didn’t you receive the OTP?{' '}
          <button
            onClick={() => alert('Resending OTP...')}
            className="text-blue-700 hover:underline font-medium"
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
    </AuthFormWrapper>
  );
};


export default OTP;
