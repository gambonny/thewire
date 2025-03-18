import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    force: true,
    exclude: ['@thewire/preset'], // Forces Vite to use direct disk imports
  },
  server: {
    watch: {
      ignored: ['!../../design-system/preset/dist/**'],
      usePolling: true,
    },
    fs: {
      strict: false,
      allow: ['../..'],
    },
  },
  resolve: {
    alias: {
      '@thewire/preset': path.resolve(
        __dirname,
        '../../design-system/preset/dist/index.mjs',
      ),
    },
  },
})
