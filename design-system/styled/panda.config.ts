import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/preset-panda', '@monorepo/preset'],
  // The output directory for your css system
  outdir: 'dist',
})
