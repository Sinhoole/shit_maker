import { GoogleGenAI } from "@google/genai";
import { ApiConfig, StoryParams, Provider, Language } from '../types';

interface StreamCallbacks {
  onChunk: (text: string) => void;
  onError: (error: Error) => void;
  onComplete: () => void;
}

const constructPrompt = (params: StoryParams, language: Language): string => {
  const langMap: Record<Language, string> = {
    en: 'English',
    zh: 'Simplified Chinese (简体中文)',
    ja: 'Japanese (日本語)',
    ko: 'Korean (한국어)',
    ru: 'Russian (Русский)'
  };
  
  const langInstruction = langMap[language];
  
  return `
Write a short story based on the following specifications:

**Basic Information**
- Genre: ${params.genre}
- Length: ${params.length}
- Perspective: ${params.perspective}

**Core Elements**
- Characters: ${params.characters || 'Open to interpretation'}
- Core Conflict: ${params.conflict || 'Open to interpretation'}
- Keywords/Themes: ${params.keywords || 'Open to interpretation'}

**Climax / Pivotal Moment (IMPORTANT)**
- The story MUST include the following climax scene, described in vivid detail: 
  ${params.climax ? params.climax : 'Build towards a natural, high-stakes climax.'}

**Style & Tone**
- Tone: ${params.tone}
- Writing Style: ${params.writingStyle}
- **Author Mimicry**: ${params.authorMimic ? `Mimic the writing style of ${params.authorMimic}.` : 'None'}
- **Style Reference**: ${params.styleExample ? `Strictly analyze and mimic the sentence structure, vocabulary, and rhythm of the following example text for the story narration:\n"${params.styleExample}"` : 'None'}

**Instructions**
1. Write ONLY the story. Do not add introductory or concluding remarks (like "Here is the story").
2. Use Markdown formatting for emphasis where appropriate.
3. Title the story at the very beginning using a Markdown H1 header (# Title).
4. Write the story in ${langInstruction}.
5. Pay special attention to the requested Climax. It should be the most detailed part of the story.
  `.trim();
};

export const generateStory = async (
  config: ApiConfig,
  params: StoryParams,
  language: Language,
  callbacks: StreamCallbacks
) => {
  const prompt = constructPrompt(params, language);
  const { onChunk, onError, onComplete } = callbacks;

  try {
    if (config.provider === Provider.GEMINI) {
      // Use Google GenAI SDK
      if (!config.apiKey) throw new Error("Gemini API Key is required.");
      
      const ai = new GoogleGenAI({ apiKey: config.apiKey });
      
      // Use the model specified in config, fallback to flash if empty
      const modelId = config.model || 'gemini-3-flash-preview';
      
      const responseStream = await ai.models.generateContentStream({
        model: modelId,
        contents: [{ parts: [{ text: prompt }] }],
      });

      for await (const chunk of responseStream) {
        if (chunk.text) {
          onChunk(chunk.text);
        }
      }
      onComplete();

    } else {
      // OpenAI Compatible Logic (OpenAI, SiliconFlow, DeepSeek, Aliyun, Custom)
      if (!config.apiKey && config.provider === Provider.OPENAI) throw new Error("API Key is required.");
      
      let baseUrl = config.baseUrl;
      if (!baseUrl) {
        if (config.provider === Provider.OPENAI) baseUrl = 'https://api.openai.com/v1';
        else if (config.provider === Provider.SILICONFLOW) baseUrl = 'https://api.siliconflow.cn/v1';
        else if (config.provider === Provider.DEEPSEEK) baseUrl = 'https://api.deepseek.com';
        else if (config.provider === Provider.ALIYUN) baseUrl = 'https://dashscope.aliyuncs.com/compatible-mode/v1';
        else baseUrl = 'https://api.openai.com/v1'; // Default Fallback
      }
      // Remove trailing slash
      baseUrl = baseUrl.replace(/\/$/, '');

      const response = await fetch(`${baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.apiKey}`,
        },
        body: JSON.stringify({
          model: config.model,
          messages: [
            { role: 'system', content: `You are a creative writing expert specializing in engaging fiction. Output in ${language}.` },
            { role: 'user', content: prompt }
          ],
          stream: true,
          temperature: 0.8, 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `API Error: ${response.status} ${response.statusText}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder('utf-8');

      if (!reader) throw new Error("Response body is null");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataStr = line.slice(6);
            if (dataStr === '[DONE]') continue;
            try {
              const data = JSON.parse(dataStr);
              const content = data.choices?.[0]?.delta?.content;
              if (content) {
                onChunk(content);
              }
            } catch (e) {
              console.warn("Failed to parse stream chunk", e);
            }
          }
        }
      }
      onComplete();
    }
  } catch (error) {
    console.error("Generation Error:", error);
    onError(error instanceof Error ? error : new Error(String(error)));
  }
};