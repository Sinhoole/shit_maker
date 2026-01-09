import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  className = '', 
  disabled,
  ...props 
}) => {
  // Retro styling: Hard borders, hard shadows, uppercase, bold font
  const baseStyles = "inline-flex items-center justify-center border-2 border-retro-border font-bold uppercase tracking-wider transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Primary: Orange
    primary: "bg-retro-orange text-retro-paper shadow-hard hover:bg-[#ff8a6a]",
    // Secondary: Mustard
    secondary: "bg-retro-mustard text-retro-dark shadow-hard hover:bg-[#fccf55]",
    // Outline: Transparent with dark border
    outline: "bg-transparent text-retro-dark border-retro-dark shadow-hard hover:bg-white",
    // Ghost: Minimal
    ghost: "bg-transparent text-retro-dark border-transparent hover:bg-black/5"
  };

  const sizes = {
    sm: "px-3 py-1 text-xs shadow-hard-sm",
    md: "px-6 py-3 text-sm shadow-hard",
    lg: "px-8 py-4 text-base shadow-hard"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;