"use client";
import { faEnvelope, faPhone, faUser, faMapMarkerAlt, faBook, faVenusMars, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import InputField from '@/src/components/common/InputField';
import { useState } from 'react';


export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    course: '',
    gender: '',
    phone: '',
    location: '',
    description: '',
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
    
      {/* Hero Section */}
      <section className="bg-[#01589A] text-white text-center py-10">
        <h1 className="text-3xl font-semibold">Check out</h1>
      </section>


      {/* Main Section */}
      <main className="flex flex-col items-center  px-4 py-12  flex-grow">
  
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-4">
            <InputField name="fullName" placeholder="Full name" icon={faUser} value={formData.fullName} onChange={handleChange('fullName')} />
            <InputField name="email" placeholder="Email" icon={faEnvelope} value={formData.email} onChange={handleChange('email')} />
            <InputField name="course" placeholder="Data science" icon={faBook} value={formData.course} onChange={handleChange('course')} />
            <InputField name="gender" placeholder="Gender" icon={faVenusMars} value={formData.gender} onChange={handleChange('gender')} />
            <InputField name="phone" placeholder="Phone" icon={faPhone} value={formData.phone} onChange={handleChange('phone')} />
            <InputField name="location" placeholder="Location" icon={faMapMarkerAlt} value={formData.location} onChange={handleChange('location')} />
            <InputField name="disabled" placeholder="Disabled" icon={faWheelchair} value={formData.description} onChange={handleChange('description')} />
            <textarea className="w-full border border-gray-300 p-2 rounded mt-2" rows={4} placeholder="Description"></textarea>
          </div>

          {/* Payment Section */}
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Complete payment</h2>
            <p className="text-2xl font-bold text-gray-800 mb-4">$ 350.00 USD</p>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Select amount</label>
            <select id="amount" className="w-full border border-gray-300 p-2 rounded mb-4">
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="350" selected>350</option>
              <option value="500">500</option>
            </select>
            <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition">Complete my purchase</button>
          </div>
        </div>
      </main>

    </div>
  );
}
