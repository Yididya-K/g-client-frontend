'use client';

import { InputHTMLAttributes, ReactNode, useState } from 'react';
import { XCircle, CheckCircle, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

type Status = 'default' | 'success' | 'error' | 'disabled';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {

  hint?: string;
  status?: Status;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function InputField({

  hint = '',
  status = 'default',
  disabled = false,
  leftIcon,
  rightIcon,
  className,
  ...props
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = clsx({
    'border-blue-600': isFocused,
    'border-blue-300': !isFocused && status === 'default',
    'border-green-500': status === 'success',
    'border-red-500': status === 'error',
    'border-gray-400': status === 'disabled',
  });

  const bgColor = clsx({
    'bg-white': ( status === 'default') && !disabled,
    'bg-blue-50': isFocused ,
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
    

      <div
        className={clsx(
          'flex items-center px-2 py-2 h-[56px] border-b-2 transition',
          bgColor,
          borderColor
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {leftIcon && <span className="mr-2 text-gray-600">{leftIcon}</span>}

        <input
          className={clsx(
            'w-full text-sm bg-transparent outline-none placeholder-gray-500',
            { 'text-gray-400': status === 'disabled' }
          )}
          placeholder="Placeholder"
          disabled={status === 'disabled'}
          {...props}
        />
 {rightIcon && <span className="mr-2 text-gray-600">{rightIcon}</span>}
        {status === 'success' && <CheckCircle className="w-4 h-4 text-green-600" />}
        {status === 'error' && <AlertCircle className="w-4 h-4 text-red-600" />}
        {(status === 'default' || isFocused) && !disabled && (
          <XCircle className="w-4 h-4 text-gray-400 cursor-pointer ml-2" />
        )}
      </div>

      <p className={`text-xs mt-1 ${hintColor}`}>{hint}</p>
    </div>
  );
}
