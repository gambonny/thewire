import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/preset-panda', '@monorepo/preset'],
  outdir: 'dist',
})
