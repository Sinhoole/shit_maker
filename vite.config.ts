import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel 部署通常使用根路径，或者你可以直接省略 base 选项（默认为 '/'）
  base: '/', 
});