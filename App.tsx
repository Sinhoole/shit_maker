import React, { useState, useEffect } from 'react';
import { Settings, Hexagon, Globe, Info } from 'lucide-react';
import ApiConfigModal from './components/ApiConfigModal';
import AboutModal from './components/AboutModal';
import StoryForm from './components/StoryForm';
import StoryViewer from './components/StoryViewer';
import { DEFAULT_API_CONFIG, DEFAULT_STORY_PARAMS, TRANSLATIONS } from './constants';
import { ApiConfig, StoryParams, GenerationStatus, Language } from './types';
import { generateStory } from './services/llmService';

const App: React.FC = () => {
  const [apiConfig, setApiConfig] = useState<ApiConfig>(DEFAULT_API_CONFIG);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [storyParams, setStoryParams] = useState<StoryParams>(DEFAULT_STORY_PARAMS);
  const [generatedContent, setGeneratedContent] = useState('');
  const [status, setStatus] = useState<GenerationStatus>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  // Default to Chinese ('zh') as requested
  const [lang, setLang] = useState<Language>('zh');

  // Load config from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('storyforge_config');
    if (saved) {
      try {
        setApiConfig(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved config", e);
      }
    } else {
      setIsConfigOpen(true);
    }
  }, []);

  const handleSaveConfig = (newConfig: ApiConfig) => {
    setApiConfig(newConfig);
    localStorage.setItem('storyforge_config', JSON.stringify(newConfig));
  };

  const handleGenerate = async () => {
    if (!apiConfig.apiKey) {
      setErrorMsg("Please configure your API Key in Settings.");
      setIsConfigOpen(true);
      return;
    }

    if (!apiConfig.model) {
      setErrorMsg("Please select a Model in Settings.");
      setIsConfigOpen(true);
      return;
    }

    setStatus('generating');
    setGeneratedContent('');
    setErrorMsg(null);

    await generateStory(
      apiConfig, 
      storyParams, 
      lang,
      {
        onChunk: (text) => {
          setGeneratedContent(prev => prev + text);
        },
        onError: (err) => {
          setErrorMsg(err.message);
          setStatus('error');
        },
        onComplete: () => {
          setStatus('completed');
        }
      }
    );
  };

  const toggleLanguage = () => {
    const langs: Language[] = ['zh', 'en', 'ja', 'ko', 'ru'];
    const currentIndex = langs.indexOf(lang);
    const nextIndex = (currentIndex + 1) % langs.length;
    setLang(langs[nextIndex]);
  };

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen flex flex-col font-mono text-retro-dark">
      {/* Decorative Top Border */}
      <div className="h-3 w-full bg-gradient-to-r from-retro-orange via-retro-mustard to-retro-teal border-b-4 border-retro-border"></div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b-4 border-retro-border bg-retro-paper shadow-hard">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-retro-dark p-2 border-2 border-retro-border shadow-hard-sm">
              <Hexagon size={32} className="text-retro-mustard" strokeWidth={3} />
            </div>
            <div>
               <h1 className="text-2xl font-black uppercase tracking-tighter text-retro-dark font-sans leading-none">
                {t.appTitle}
              </h1>
              <p className="text-xs font-bold tracking-[0.3em] text-retro-orange">OMNI-CORP V3.1</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-retro-paper border-2 border-retro-border shadow-hard-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2 font-bold"
              title="Switch Language"
            >
              <Globe size={20} strokeWidth={2.5} />
              <span className="text-sm uppercase">{lang}</span>
            </button>
            <button 
              onClick={() => setIsAboutOpen(true)}
              className="px-4 py-2 bg-retro-paper border-2 border-retro-border shadow-hard-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2 font-bold text-retro-teal"
              title="About"
            >
              <Info size={20} strokeWidth={2.5} />
            </button>
            <button 
              onClick={() => setIsConfigOpen(true)}
              className="px-4 py-2 bg-retro-mustard border-2 border-retro-border shadow-hard-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2 font-bold"
            >
              <Settings size={20} strokeWidth={2.5} />
              <span className="hidden sm:inline text-sm">{t.apiSettings}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 h-full">
          
          {/* Left Panel: Controls */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
             {/* Halftone header decoration */}
            <div className="bg-retro-dark h-8 w-full border-2 border-retro-border flex items-center px-2 halftone-pattern">
               <span className="text-retro-paper text-xs font-bold font-sans tracking-widest">INPUT_PARAMETERS //</span>
            </div>
            
            <div className="lg:sticky lg:top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 custom-scrollbar pb-10">
              <StoryForm 
                params={storyParams} 
                onChange={setStoryParams} 
                onGenerate={handleGenerate}
                isGenerating={status === 'generating'}
                lang={lang}
              />
              {errorMsg && (
                <div className="mt-4 p-4 bg-retro-orange text-retro-paper border-2 border-retro-border shadow-hard font-bold text-sm flex items-center gap-2">
                  <span className="text-2xl">!</span> {errorMsg}
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Viewer */}
          <div className="lg:col-span-7 xl:col-span-8 min-h-[500px] lg:h-[calc(100vh-8rem)] lg:sticky lg:top-24 flex flex-col gap-2">
             <div className="flex justify-between items-end mb-2">
                <div className="bg-retro-dark px-4 py-1 border-2 border-retro-border inline-block shadow-hard-sm">
                   <span className="text-retro-mustard text-xs font-bold font-sans tracking-widest">OUTPUT_TERMINAL</span>
                </div>
                <div className="flex gap-1">
                   <div className="w-16 h-2 bg-retro-border"></div>
                   <div className="w-8 h-2 bg-retro-border"></div>
                   <div className="w-4 h-2 bg-retro-border"></div>
                </div>
             </div>
             <StoryViewer content={generatedContent} lang={lang} />
          </div>

        </div>
      </main>

      <ApiConfigModal 
        isOpen={isConfigOpen} 
        onClose={() => setIsConfigOpen(false)} 
        config={apiConfig}
        onSave={handleSaveConfig}
        lang={lang}
      />

      <AboutModal 
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        lang={lang}
      />
    </div>
  );
};

export default App;