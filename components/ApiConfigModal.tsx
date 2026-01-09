import React, { useState, useEffect } from 'react';
import { ApiConfig, Provider, Language } from '../types';
import { PROVIDER_OPTIONS, MODEL_SUGGESTIONS, TRANSLATIONS, PROVIDER_URLS } from '../constants';
import Button from './ui/Button';
import Input from './ui/Input';
import Select from './ui/Select';
import { Settings, X, Save, AlertTriangle, ExternalLink } from 'lucide-react';

interface ApiConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ApiConfig;
  onSave: (config: ApiConfig) => void;
  lang: Language;
}

const ApiConfigModal: React.FC<ApiConfigModalProps> = ({ isOpen, onClose, config, onSave, lang }) => {
  const [localConfig, setLocalConfig] = useState<ApiConfig>(config);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    setLocalConfig(config);
  }, [config, isOpen]);

  useEffect(() => {
    setSuggestions(MODEL_SUGGESTIONS[localConfig.provider] || []);
  }, [localConfig.provider]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(localConfig);
    onClose();
  };

  const isCustomOrSilicon = localConfig.provider === Provider.SILICONFLOW || localConfig.provider === Provider.CUSTOM;

  const providerOptions = PROVIDER_OPTIONS.map(opt => ({
    value: opt.value,
    label: opt.label[lang]
  }));

  const purchaseUrl = PROVIDER_URLS[localConfig.provider];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-retro-dark/80 backdrop-grayscale">
      <div className="bg-retro-paper border-4 border-retro-border shadow-hard-lg w-full max-w-md overflow-hidden relative">
        
        {/* Striped header pattern */}
        <div className="h-2 w-full bg-repeating-linear-gradient-45 from-retro-border from-10px to-retro-mustard to-20px"></div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-retro-border bg-retro-paper">
          <h2 className="text-xl font-black uppercase text-retro-dark flex items-center gap-2 font-sans">
            <Settings size={24} className="text-retro-orange" strokeWidth={3} />
            {t.configTitle}
          </h2>
          <button onClick={onClose} className="text-retro-dark hover:text-retro-orange transition-colors border-2 border-transparent hover:border-retro-dark p-1">
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 bg-retro-paper">
          
          <Select
            label={t.providerLabel}
            options={providerOptions}
            value={localConfig.provider}
            onChange={(e) => setLocalConfig({ ...localConfig, provider: e.target.value as Provider, model: '' })}
          />

          <div className="relative">
             <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold uppercase tracking-widest text-retro-dark/70">{t.apiKeyLabel}</label>
                {purchaseUrl && (
                  <a 
                    href={purchaseUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-bold text-retro-teal hover:text-retro-orange flex items-center gap-1 uppercase tracking-wider transition-colors"
                  >
                    {t.getKey} <ExternalLink size={10} />
                  </a>
                )}
             </div>
             <Input
               type="password"
               placeholder="sk-..."
               value={localConfig.apiKey}
               onChange={(e) => setLocalConfig({ ...localConfig, apiKey: e.target.value })}
               autoComplete="off"
             />
          </div>

          <div className="flex flex-col gap-1 w-full">
             <label className="text-xs font-bold uppercase tracking-widest text-retro-dark/70 mb-1">{t.modelLabel}</label>
             <div className="relative">
                <input
                  list="model-suggestions"
                  className="w-full bg-retro-paper border-2 border-retro-border text-retro-dark px-3 py-2 placeholder-retro-dark/40 focus:outline-none focus:bg-white focus:border-retro-orange focus:shadow-hard-sm transition-all rounded-none font-mono"
                  value={localConfig.model}
                  onChange={(e) => setLocalConfig({ ...localConfig, model: e.target.value })}
                  placeholder={t.modelHelp}
                />
                <datalist id="model-suggestions">
                  {suggestions.map(model => (
                    <option key={model} value={model} />
                  ))}
                </datalist>
             </div>
             <p className="text-xs text-retro-dark/50 mt-1 font-mono">{t.modelHelp}</p>
          </div>

          {isCustomOrSilicon && (
            <Input
              label={t.baseUrlLabel}
              placeholder={t.phBaseUrl}
              value={localConfig.baseUrl || ''}
              onChange={(e) => setLocalConfig({ ...localConfig, baseUrl: e.target.value })}
            />
          )}

          <div className="bg-retro-mustard/20 p-3 border-2 border-retro-mustard flex gap-3 items-start mt-2">
            <AlertTriangle className="text-retro-mustard shrink-0 mt-0.5" size={20} />
            <p className="text-xs text-retro-dark/80 leading-relaxed font-bold">
              {t.securityNote}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t-2 border-retro-border bg-retro-paper flex justify-end gap-3">
          <Button variant="ghost" onClick={onClose} className="hover:bg-retro-dark hover:text-white">{t.cancel}</Button>
          <Button onClick={handleSave} className="gap-2" variant="primary">
            <Save size={16} />
            {t.saveConfig}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApiConfigModal;