import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // 1. path 모듈 가져오기

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') }, // 2. @를 src로 매핑
    ],
  },
})
