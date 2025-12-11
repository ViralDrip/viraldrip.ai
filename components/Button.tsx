import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold tracking-tight transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand/20 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1 active:translate-y-0";
  
  const variants = {
    primary: "bg-brand hover:bg-brand-dark text-white shadow-lg shadow-brand/30 border border-transparent hover:shadow-brand/40",
    secondary: "bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-600/30 border border-transparent",
    outline: "bg-white border-2 border-slate-200 text-slate-700 hover:border-brand hover:text-brand hover:shadow-md",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-brand"
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-5 text-lg"
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};