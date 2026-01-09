import React, { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Copy, Download, Check, Terminal, Image as ImageIcon } from 'lucide-react';
import Button from './ui/Button';
import { Language, } from '../types';
import { TRANSLATIONS } from '../constants';
import html2canvas from 'html2canvas';

interface StoryViewerProps {
  content: string;
  lang: Language;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ content, lang }) => {
  const [copied, setCopied] = useState(false);
  const [generatingImg, setGeneratingImg] = useState(false);
  // Generate random issue number once per session/mount
  const [issueNo] = useState(() => Math.floor(Math.random() * 10000) + 1000); 
  const contentRef = useRef<HTMLDivElement>(null);
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

  const handleShareImage = async () => {
    if (!contentRef.current) return;
    
    setGeneratingImg(true);
    try {
      // Create a canvas from the content div
      // scale: 2 improves quality for high DPI screens
      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        backgroundColor: '#fdf6e3', // match the retro-paper color
        useCORS: true,
        logging: false,
        onclone: (clonedDoc: Document) => {
           // You can manipulate the cloned document here if needed before screenshot
           const el = clonedDoc.getElementById('story-content-area');
           if (el) {
             // Reduced top padding to move title up (Visual adjustment)
             el.style.padding = '20px 40px 50px 40px'; 
             // Ensure it looks like a long paper even if content is short
             el.style.minHeight = 'auto'; 
             el.style.height = 'auto';
           }
        }
      });

      const image = canvas.toDataURL('image/png');
      
      const a = document.createElement('a');
      a.href = image;
      a.download = `story-forge-daily-${new Date().getTime()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error("Failed to generate image", err);
      alert("Failed to generate image. Please try again.");
    } finally {
      setGeneratingImg(false);
    }
  };

  if (!content) {
    return (
      <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-retro-dark/40 border-4 border-dashed border-retro-dark/20 bg-retro-paper old-paper-texture">
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

  const currentDate = new Date().toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
  });

  return (
    <div className="h-full flex flex-col bg-retro-paper border-2 border-retro-border shadow-hard-lg overflow-hidden relative">
      
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-retro-dark border-b-2 border-retro-border z-20 shrink-0">
        <span className="hidden sm:flex text-sm font-bold text-retro-paper uppercase tracking-widest font-sans items-center gap-2">
           <span className="w-3 h-3 bg-retro-orange inline-block"></span>
           {t.preview}
        </span>
        <div className="flex gap-3 w-full sm:w-auto justify-end">
           {/* High contrast buttons: Primary (Orange) for better visibility */}
          <Button 
            size="sm" 
            variant="primary" 
            onClick={handleCopy} 
            title={t.copy} 
            className="flex items-center gap-1 border-white/20"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            <span className="hidden sm:inline font-black text-xs">{t.copy}</span>
          </Button>
          
          <Button 
            size="sm" 
            variant="primary" 
            onClick={handleShareImage} 
            title={t.shareImage}
            disabled={generatingImg}
            isLoading={generatingImg}
            className="flex items-center gap-1 border-white/20"
          >
            <ImageIcon size={18} />
            <span className="hidden sm:inline font-black text-xs">{t.shareImage}</span>
          </Button>

          <Button 
            size="sm" 
            variant="primary" 
            onClick={handleDownload} 
            title={t.download}
            className="flex items-center gap-1 border-white/20"
          >
            <Download size={18} />
            <span className="hidden sm:inline font-black text-xs">TXT</span>
          </Button>
        </div>
      </div>

      {/* Content Wrapper for Scroll */}
      <div className="flex-1 overflow-y-auto custom-scrollbar old-paper-texture">
        
        {/* Content Ref for html2canvas - styled to look like a newspaper page */}
        <div 
            ref={contentRef} 
            id="story-content-area"
            className="p-8 md:p-12 min-h-full max-w-4xl mx-auto old-paper-texture relative"
        >
           {/* Newspaper Masthead */}
           <div className="border-b-4 border-retro-border mb-4 pb-2 text-center">
              <div className="flex justify-between items-end border-b-2 border-retro-border pb-1 mb-1 font-mono text-xs font-bold uppercase tracking-wider text-retro-dark/70">
                 <span>VOL. {issueNo}</span>
                 <span>{currentDate}</span>
                 <span>PRICE: FREE</span>
              </div>
              <h1 className="font-sans text-5xl md:text-6xl font-black uppercase text-retro-dark tracking-tighter leading-none mb-1">
                THE FORGE DAILY
              </h1>
              <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.5em] text-retro-orange pb-2">
                 <span>Truth</span>
                 <span>•</span>
                 <span>Fiction</span>
                 <span>•</span>
                 <span>Entropy</span>
              </div>
           </div>

           {/* Story Body */}
           <div className="markdown-body max-w-none font-serif text-retro-ink columns-1">
             <ReactMarkdown>{content}</ReactMarkdown>
           </div>
           
           {/* Newspaper Footer */}
           <div className="h-16 flex flex-col items-center justify-center opacity-40 mt-12 border-t-2 border-double border-retro-dark pt-4">
              <p className="font-sans text-xs uppercase tracking-[0.2em] font-bold">Generated by Story Forge AI</p>
              <p className="font-mono text-[10px] mt-1">NO. {issueNo} - ALL RIGHTS RESERVED BY THE MACHINE SPIRIT</p>
           </div>
           
           {/* Visual Noise/Texture Overlay (Optional decoration) */}
           <div className="absolute top-4 right-4 w-16 h-16 border-4 border-retro-orange rounded-full flex items-center justify-center opacity-20 -rotate-12 pointer-events-none">
              <span className="font-sans font-black text-retro-orange text-xs uppercase">APPROVED</span>
           </div>

        </div>

      </div>
    </div>
  );
};

export default StoryViewer;