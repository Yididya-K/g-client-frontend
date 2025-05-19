// components/SelectField.tsx
'use client';

import { ReactNode, SelectHTMLAttributes } from 'react';
import { CheckCircle, AlertCircle, ChevronDown } from 'lucide-react'; // Maybe a dropdown icon
import clsx from 'clsx';

type Status = 'default' | 'success' | 'error' | 'disabled';

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  hint?: string;
  status?: Status;
  label?: string; 
  leftIcon?: ReactNode;
  options: { value: string | number; label: string }[]; 
  placeholder?: string; 
}

export default function SelectField({
  hint = '',
  status = 'default',
  disabled = false,
  label,
  options,
  leftIcon,
  className,
  ...props
}: SelectFieldProps) {

  // Reuse some styling logic based on status
  const borderColor = clsx({
    'border-blue-300': status === 'default',
    'border-green-500': status === 'success',
    'border-red-500': status === 'error',
    'border-gray-400': status === 'disabled',
  });

  const bgColor = clsx({
    'bg-white': ( status === 'default') && !disabled,
    'bg-green-50': status === 'success',
    'bg-red-50': status === 'error',
    'bg-gray-200': status === 'disabled',
  });

  const hintColor = clsx({
    'text-gray-500': status === 'default' || status === 'disabled',
    'text-green-600': status === 'success',
    'text-red-600': status === 'error',
  });


  return (
    <div className={clsx('w-full', className)}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}

      <div
        className={clsx(
          'relative flex items-center px-2 py-2 h-[56px] border-b-2 transition',
          bgColor,
          borderColor,
          { 'cursor-not-allowed': status === 'disabled' }
        )}
      >
        {leftIcon && <span className="mr-2 text-gray-600">{leftIcon}</span>}
         <select
            className={clsx(
              'w-full text-sm bg-transparent outline-none appearance-none cursor-pointer', 
              { 'text-gray-400 cursor-not-allowed': status === 'disabled' }
            )}
            disabled={status === 'disabled'}
            {...props}
          >
           
            {props.placeholder && <option value="" disabled>{props.placeholder}</option>}
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700">
             <ChevronDown className="h-4 w-4" />
          </div>


          {/* Status Icons on the right */}
          {status === 'success' && <CheckCircle className="w-4 h-4 text-green-600 ml-2" />}
          {status === 'error' && <AlertCircle className="w-4 h-4 text-red-600 ml-2" />}
      </div>

      <p className={`text-xs mt-1 ${hintColor}`}>{hint}</p>
    </div>
  );
}