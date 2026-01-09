import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Copy, Download, Check, Terminal } from 'lucide-react';
import Button from './ui/Button';
import { Language, } from '../types';
import { TRANSLATIONS } from '../constants';

interface StoryViewerProps {
  content: string;
  lang: Language;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ content, lang }) => {
  const [copied, setCopied] = React.useState(false);
  const t = TRANSLATIONS[lang];

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `story-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!content) {
    return (
      <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-retro-dark/40 border-4 border-dashed border-retro-dark/20 bg-retro-paper">
        <Terminal size={64} className="mb-4 opacity-30" />
        <p className="text-xl font-mono uppercase tracking-widest">{t.placeholderStart}</p>
        <div className="mt-4 flex gap-2">
           <span className="animate-pulse w-3 h-3 bg-retro-dark/40 rounded-full"></span>
           <span className="animate-pulse delay-100 w-3 h-3 bg-retro-dark/40 rounded-full"></span>
           <span className="animate-pulse delay-200 w-3 h-3 bg-retro-dark/40 rounded-full"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-retro-paper border-2 border-retro-border shadow-hard-lg overflow-hidden relative">
      {/* Decorative holes for paper effect */}
      <div className="absolute left-2 top-0 bottom-0 w-8 flex flex-col justify-start gap-8 pt-16 pointer-events-none z-10 opacity-10">
         <div className="w-4 h-4 rounded-full bg-retro-dark"></div>
         <div className="w-4 h-4 rounded-full bg-retro-dark"></div>
         <div className="w-4 h-4 rounded-full bg-retro-dark"></div>
         <div className="w-4 h-4 rounded-full bg-retro-dark"></div>
         <div className="w-4 h-4 rounded-full bg-retro-dark"></div>
         <div className="w-4 h-4 rounded-full bg-retro-dark"></div>
         <div className="w-4 h-4 rounded-full bg-retro-dark"></div>
         <div className="w-4 h-4 rounded-full bg-retro-dark"></div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-3 bg-retro-dark border-b-2 border-retro-border z-20">
        <span className="text-sm font-bold text-retro-paper uppercase tracking-widest font-sans flex items-center gap-2">
           <span className="w-3 h-3 bg-retro-orange inline-block"></span>
           {t.preview}
        </span>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={handleCopy} title={t.copy} className="bg-retro-paper border-retro-paper text-retro-dark hover:bg-retro-mustard">
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </Button>
          <Button size="sm" variant="outline" onClick={handleDownload} title={t.download} className="bg-retro-paper border-retro-paper text-retro-dark hover:bg-retro-mustard">
            <Download size={16} />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-12 pl-16 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
        <div className="markdown-body max-w-none font-mono">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <div className="h-16 flex items-center justify-center opacity-20 mt-8">
           <p className="font-sans text-xs uppercase tracking-[0.5em]">- END OF TRANSMISSION -</p>
        </div>
      </div>
    </div>
  );
};

export default StoryViewer;