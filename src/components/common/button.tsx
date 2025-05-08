// components/common/Button.tsx
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

export type ButtonProps = {
  children: React.ReactNode;
  href?: string; 
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'outlined';
  disabled?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset'; 
};

const variantStyle = {
  primary: 'bg-[#01589A] text-white hover:bg-[#014273]',
  secondary: 'bg-gray-300 text-black hover:bg-gray-400',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  outlined: 'border border-[#01589A] text-[#01589A] bg-transparent hover:bg-blue-100',
};

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  disabled = false,
  className,
  leftIcon,
  rightIcon,
  type = 'button',
}) => {
  const btnClass = classNames(
    'inline-flex items-center gap-2 px-4 py-2 rounded transition duration-200',
    variantStyle[variant],
    {
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  );

  const content = (
    <>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={btnClass}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={btnClass} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
