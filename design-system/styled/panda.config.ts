import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: ['@pandacss/preset-panda', '@thewire/preset'],
  outdir: 'dist',
  jsxFramework: 'react',
})
