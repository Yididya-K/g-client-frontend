'use client';

import { useState } from 'react';
import InputField from '@/src/components/admin/Inputs/inputField'; 
import { Mail, Lock, Eye, EyeOff, User, LogOut, ChevronRight, Image } from 'lucide-react';
import Button from '@/src/components/common/button';

export default function AccountPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  return (
    <div className="min-h-screenp-6">
         <h1 className="text-2xl font-semibold mb-6 ml-10">Account</h1>
      <div className="max-w-4xl mx-auto p-8">
       

        {/* Profile Picture Section */}
        <div className="flex items-center pb-6 ">
          <div className="w-[100px] h-[100px] bg-[#01589A] rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
            JD
          </div>
          <div className="flex-1">
            <p className="font-medium">Profile picture</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-[#01589A] text-white rounded-md hover:bg-blue-700 transition">
            <Image className="w-4 h-4 mr-2" />
            Upload image
          </button>
        </div>

        {/* Full Name Section */}
        <div className=" pb-6 mb-2 ">
          <h2 className="text-md font-medium mb-4">Full name</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-200">
            <InputField placeholder="John"  />
            <InputField placeholder="Doe"  />
          </div>
        </div>

        {/* Email Section */}
        <div className=" pb-6 mb-2">
          <h2 className="text-lg font-medium mb-2">Email</h2>
          <p className="text-gray-600 mb-4">Manage account email address</p>
          <div className='bg-gray-200 p-4'>
          <InputField
            placeholder="johndoe@gmail.com"
           
           
            leftIcon={<Mail className="w-4 h-4" />}
          /></div>
        </div>

        {/* Password Section */}
        <div className=" pb-6 mb-2">
          <h2 className="text-lg font-medium mb-2">Password</h2>
          <p className="text-gray-600 mb-4">Modify your current accounts</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-200">
            <InputField
              
              type={showCurrentPassword ? 'text' : 'password'}
              placeholder="**********"
              leftIcon={<Lock className="w-4 h-4" />}
              rightIcon={
                showCurrentPassword ? (
                  <EyeOff className="w-4 h-4 cursor-pointer" onClick={() => setShowCurrentPassword(false)} />
                ) : (
                  <Eye className="w-4 h-4 cursor-pointer" onClick={() => setShowCurrentPassword(true)} />
                )
              }
            />
            <InputField
              
              type={showNewPassword ? 'text' : 'password'}
              placeholder="**********"
              leftIcon={<Lock className="w-4 h-4" />}
              rightIcon={
                showNewPassword ? (
                  <EyeOff className="w-4 h-4 cursor-pointer" onClick={() => setShowNewPassword(false)} />
                ) : (
                  <Eye className="w-4 h-4 cursor-pointer" onClick={() => setShowNewPassword(true)} />
                )
              }
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-start space-x-4">
          <Button 
          variant='secondary'
           rightIcon={<ChevronRight/>}
           >
            Logout
            
          </Button>
          <Button   rightIcon={<ChevronRight/>}>
            Update
          
          </Button>
        </div>
      </div>
    </div>
  );
}