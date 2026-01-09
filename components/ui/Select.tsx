import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[] | string[];
}

const Select: React.FC<SelectProps> = ({ label, options, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-xs font-bold uppercase tracking-widest text-retro-dark/70 mb-1">{label}</label>}
      <div className="relative">
        <select
          className={`w-full appearance-none bg-retro-paper border-2 border-retro-border text-retro-dark px-3 py-2 pr-8 focus:outline-none focus:bg-white focus:border-retro-orange focus:shadow-hard-sm transition-all rounded-none font-mono ${className}`}
          {...props}
        >
          {options.map((opt, idx) => {
            const value = typeof opt === 'string' ? opt : opt.value;
            const text = typeof opt === 'string' ? opt : opt.label;
            return <option key={idx} value={value}>{text}</option>;
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-retro-dark border-l-2 border-retro-border bg-retro-mustard">
           <ChevronDown size={16} strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};

export default Select;