import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-xs font-bold uppercase tracking-widest text-retro-dark/70 mb-1">{label}</label>}
      <input
        className={`w-full bg-retro-paper border-2 border-retro-border text-retro-dark px-3 py-2 placeholder-retro-dark/40 focus:outline-none focus:bg-white focus:border-retro-orange focus:shadow-hard-sm transition-all rounded-none font-mono ${className}`}
        {...props}
      />
      {error && <span className="text-retro-orange text-xs font-bold mt-1 bg-retro-dark/10 p-1 inline-block">{error}</span>}
    </div>
  );
};

export default Input;