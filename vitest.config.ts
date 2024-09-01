import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
      exclude: [
        '**/node_modules/**', 
        '**/dist/**',
        '**/postcss.config.js',
        '**/tailwind.config.js',
        '**/vite.config.ts',
        '**/eslint.config.js',
        '**/vitest.config.ts',
        'src/vite-env.d.ts',
        '**/types.ts',
        '**/i18n.js',
      ],
    },
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/postcss.config.js',
      '**/tailwind.config.js',
      '**/vite.config.ts',
      '**/eslint.config.js',
      '**/vitest.config.ts',
      'src/vite-env.d.ts',
      '**/types.ts',
      '**/i18n.js',
    ],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/')
    },
  },
})
