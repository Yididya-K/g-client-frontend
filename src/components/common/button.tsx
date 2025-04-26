// components/common/Button.tsx
import React from 'react';
import classNames from 'classnames';

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'outlined';
  disabled?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const variantStyle = {
  primary: 'bg-[#01589A] text-white hover:bg-[#014273]',
  secondary: 'bg-gray-300 text-black hover:bg-gray-400',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  outlined: 'border-1 border-[#01589A] text-[#01589A] bg-transparent hover:bg-blue-100 hover:text-[#01589A]',
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className,
  leftIcon,
  rightIcon,
}) => {
  const btnClass = classNames(
    'inline-flex items-center gap-2 px-4 py-2 rounded transition duration-200',
    variantStyle[variant],
    {
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  );

  return (
    <button onClick={onClick} className={btnClass} disabled={disabled}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
