import React from 'react';
import { StoryParams, Language } from '../types';
import { 
  GENRE_OPTIONS, 
  TONE_OPTIONS, 
  STYLE_OPTIONS, 
  LENGTH_OPTIONS, 
  PERSPECTIVE_OPTIONS,
  TRANSLATIONS
} from '../constants';
import Input from './ui/Input';
import Select from './ui/Select';
import Textarea from './ui/Textarea';
import Button from './ui/Button';
import { Zap } from 'lucide-react';

interface StoryFormProps {
  params: StoryParams;
  onChange: (params: StoryParams) => void;
  onGenerate: () => void;
  isGenerating: boolean;
  lang: Language;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  colorClass: string;
}

const Section: React.FC<SectionProps> = ({ title, children, colorClass }) => (
  <div className="bg-retro-paper border-2 border-retro-border shadow-hard mb-6 relative group hover:translate-x-[1px] hover:translate-y-[1px] transition-transform">
    <div className={`border-b-2 border-retro-border px-4 py-2 flex items-center justify-between ${colorClass}`}>
      <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-retro-border">{title}</h3>
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full border border-retro-border bg-retro-paper"></div>
        <div className="w-2 h-2 rounded-full border border-retro-border bg-retro-paper"></div>
      </div>
    </div>
    <div className="p-4 space-y-4">
      {children}
    </div>
  </div>
);

const StoryForm: React.FC<StoryFormProps> = ({ params, onChange, onGenerate, isGenerating, lang }) => {
  const t = TRANSLATIONS[lang];
  
  const update = (key: keyof StoryParams, value: string) => {
    onChange({ ...params, [key]: value });
  };

  const getOptions = (options: { value: string; label: { en: string; zh: string } }[]) => {
    return options.map(opt => ({
      value: opt.value,
      label: opt.label[lang]
    }));
  };

  return (
    <div className="space-y-2 pb-12">
      <Section title={t.sectionBasic} colorClass="bg-retro-mustard">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select 
            label={t.fieldGenre} 
            options={getOptions(GENRE_OPTIONS)} 
            value={params.genre} 
            onChange={(e) => update('genre', e.target.value)} 
          />
          <Select 
            label={t.fieldLength} 
            options={getOptions(LENGTH_OPTIONS)} 
            value={params.length} 
            onChange={(e) => update('length', e.target.value)} 
          />
          <Select 
            label={t.fieldPerspective} 
            options={getOptions(PERSPECTIVE_OPTIONS)} 
            value={params.perspective} 
            onChange={(e) => update('perspective', e.target.value)} 
          />
        </div>
      </Section>

      <Section title={t.sectionCore} colorClass="bg-retro-orange">
        <Input 
          label={t.fieldCharacters} 
          placeholder={t.phCharacters}
          value={params.characters}
          onChange={(e) => update('characters', e.target.value)}
        />
        <Input 
          label={t.fieldConflict} 
          placeholder={t.phConflict}
          value={params.conflict}
          onChange={(e) => update('conflict', e.target.value)}
        />
        <Textarea 
          label={t.fieldClimax} 
          placeholder={t.phClimax}
          value={params.climax}
          onChange={(e) => update('climax', e.target.value)}
          rows={3}
        />
        <Input 
          label={t.fieldKeywords} 
          placeholder={t.phKeywords}
          value={params.keywords}
          onChange={(e) => update('keywords', e.target.value)}
        />
      </Section>

      <Section title={t.sectionStyle} colorClass="bg-retro-teal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select 
            label={t.fieldTone} 
            options={getOptions(TONE_OPTIONS)} 
            value={params.tone} 
            onChange={(e) => update('tone', e.target.value)} 
          />
          <Select 
            label={t.fieldStyle} 
            options={getOptions(STYLE_OPTIONS)} 
            value={params.writingStyle} 
            onChange={(e) => update('writingStyle', e.target.value)} 
          />
        </div>
        <Input 
          label={t.fieldAuthor}
          placeholder={t.phAuthor}
          value={params.authorMimic}
          onChange={(e) => update('authorMimic', e.target.value)}
        />
        <Textarea 
          label={t.fieldStyleExample}
          placeholder={t.phStyleExample}
          value={params.styleExample}
          onChange={(e) => update('styleExample', e.target.value)}
          rows={4}
        />
      </Section>

      <Button 
        onClick={onGenerate} 
        disabled={isGenerating} 
        isLoading={isGenerating}
        size="lg"
        className="w-full text-xl"
        variant="primary"
      >
        {!isGenerating && <Zap className="mr-3" strokeWidth={3} />}
        {isGenerating ? t.generating : t.generate}
      </Button>
    </div>
  );
};

export default StoryForm;