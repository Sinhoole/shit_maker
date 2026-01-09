import React from 'react';
import { X, Cpu, Book, User, Github, Globe, Info } from 'lucide-react';
import Button from './ui/Button';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-retro-dark/80 backdrop-grayscale">
      <div className="bg-retro-paper border-4 border-retro-border shadow-hard-lg w-full max-w-lg overflow-hidden relative flex flex-col max-h-[90vh]">
        
        {/* Striped header pattern */}
        <div className="h-2 w-full bg-repeating-linear-gradient-45 from-retro-border from-10px to-retro-mustard to-20px shrink-0"></div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-retro-border bg-retro-paper shrink-0">
          <h2 className="text-xl font-black uppercase text-retro-dark flex items-center gap-2 font-sans">
            <Info size={24} className="text-retro-teal" strokeWidth={3} />
            {t.aboutTitle}
          </h2>
          <button onClick={onClose} className="text-retro-dark hover:text-retro-orange transition-colors border-2 border-transparent hover:border-retro-dark p-1">
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 bg-retro-paper overflow-y-auto custom-scrollbar">
          
          {/* Tech Stack */}
          <div className="border-2 border-retro-border p-4 shadow-hard-sm bg-retro-bg">
            <h3 className="flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wider text-retro-dark border-b-2 border-retro-dark/10 pb-2 mb-3">
              <Cpu size={18} /> {t.aboutTech}
            </h3>
            <p className="font-mono text-sm text-retro-dark leading-relaxed">
              {t.techList}
            </p>
          </div>

          {/* Usage Guide */}
          <div className="border-2 border-retro-border p-4 shadow-hard-sm bg-retro-bg">
            <h3 className="flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wider text-retro-dark border-b-2 border-retro-dark/10 pb-2 mb-3">
              <Book size={18} /> {t.aboutGuide}
            </h3>
            <p className="font-mono text-sm text-retro-dark leading-relaxed whitespace-pre-line">
              {t.guideText}
            </p>
          </div>

          {/* Author */}
          <div className="border-2 border-retro-border p-4 shadow-hard-sm bg-retro-bg">
            <h3 className="flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wider text-retro-dark border-b-2 border-retro-dark/10 pb-2 mb-3">
              <User size={18} /> {t.aboutAuthor}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-bold text-retro-dark">
                <span className="w-2 h-2 bg-retro-orange rounded-full"></span>
                Ta0X1
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://blog.taoxi.ink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold uppercase text-retro-dark border-2 border-retro-border px-3 py-2 hover:bg-retro-teal hover:text-retro-paper transition-all shadow-hard-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                >
                  <Globe size={16} /> {t.blog}
                </a>
                <a 
                  href="https://github.com/Sinhoole" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold uppercase text-retro-dark border-2 border-retro-border px-3 py-2 hover:bg-retro-mustard transition-all shadow-hard-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                >
                  <Github size={16} /> {t.repo}
                </a>
              </div>
            </div>
          </div>
          
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t-2 border-retro-border bg-retro-paper flex justify-end shrink-0">
          <Button onClick={onClose} variant="primary">
            {t.close}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;