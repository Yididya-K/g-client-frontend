'use client';

import { useState } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface InputFieldProps {
  label?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: IconDefinition;
  type?: string;
  error?: string;
  success?: boolean;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  placeholder,
  value,
  
  onChange,
  icon,
  type = 'text',
  error,
  success,
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const getBorderColor = () => {
    if (disabled) return 'border-gray-400';
    if (error) return 'border-red-500';
    if (success) return 'border-green-500';
    return 'border-gray-300';
  };

  const getFocusColor = () => {
    if (error) return 'focus:ring-red-500 focus:border-red-500';
    if (success) return 'focus:ring-green-500 focus:border-green-500';
    return 'focus:ring-blue-500 focus:border-blue-500';
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div
        className={`relative flex items-center rounded border ${getBorderColor()} bg-white px-3 py-2 transition-all hover:border-blue-500 ${getFocusColor()}`}
      >
        {/* Left icon */}
        <FontAwesomeIcon icon={icon} className="text-gray-400 mr-2  w-4 h-4" />

        {/* Input */}
        <input
          id={name}
          name={name}
          type={type === 'password' && showPassword ? 'text' : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="flex-1 outline-none bg-transparent text-gray-700 disabled:cursor-not-allowed disabled:text-gray-400"
        />

        {/* Right eye toggle (only for password fields) */}
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="focus:outline-none"
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-400" />
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default InputField;
