// components/DateField.tsx
'use client';

import { InputHTMLAttributes } from 'react';
import { CheckCircle, AlertCircle, CalendarDays } from 'lucide-react'; // Calendar icon
import clsx from 'clsx';

type Status = 'default' | 'success' | 'error' | 'disabled';

interface DateFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  hint?: string;
  status?: Status;
  label?: string;
 
 
}

export default function DateField({
  hint = '',
  status = 'default',
  disabled = false,
  label,
  
  className,
  value, // Value might need parsing/formatting depending on source
  onChange, // onChange might receive a Date object or event
  ...props
}: DateFieldProps) {

  // Reuse styling logic
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

  // Native date input styling is tricky. You might hide the default icon.
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
       
         <CalendarDays className="w-4 h-4 text-gray-600 mr-2" />

         <input
            type="date" // Use type="date" for native browser picker
             className={clsx(
              'w-full text-sm bg-transparent outline-none appearance-none', 
               'placeholder-gray-500', 
              { 'text-gray-400 cursor-not-allowed': status === 'disabled' }
            )}
            disabled={status === 'disabled'}
            value={value as string | number | readonly string[] | undefined}
            onChange={onChange}
            {...props} // Spread other input props like min, max etc.
          />

          {/* Status Icons on the right */}
          {status === 'success' && <CheckCircle className="w-4 h-4 text-green-600 ml-2" />}
          {status === 'error' && <AlertCircle className="w-4 h-4 text-red-600 ml-2" />}
      </div>

      <p className={`text-xs mt-1 ${hintColor}`}>{hint}</p>
    </div>
  );
}