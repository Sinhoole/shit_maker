export enum Provider {
  GEMINI = 'gemini',
  OPENAI = 'openai',
  CLAUDE = 'claude', // Note: Claude typically needs a proxy for browser usage due to CORS, but we'll implement the structure.
  SILICONFLOW = 'siliconflow', // OpenAI Compatible
  DEEPSEEK = 'deepseek', // DeepSeek Official
  ALIYUN = 'aliyun', // Aliyun DashScope (Qwen)
  CUSTOM = 'custom'
}

export type Language = 'en' | 'zh' | 'ja' | 'ko' | 'ru';

export interface ApiConfig {
  provider: Provider;
  apiKey: string;
  model: string;
  baseUrl?: string;
}

export interface StoryParams {
  // Basic
  genre: string;
  length: 'Short' | 'Medium' | 'Long';
  perspective: 'First Person' | 'Third Person Limited' | 'Third Person Omniscient';
  
  // Core Elements
  characters: string;
  conflict: string;
  climax: string; // New: High point/Climax description
  keywords: string;
  
  // Style
  tone: string;
  writingStyle: string;
  authorMimic: string; // New: Specific author to mimic
  styleExample: string; // New: Sample text to mimic
}

export type GenerationStatus = 'idle' | 'generating' | 'completed' | 'error';