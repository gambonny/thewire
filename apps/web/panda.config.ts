import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  jsxFramework: 'react',
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../design-system/ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: ['@pandacss/preset-panda', '@thewire/preset'],
  exclude: [],
  importMap: '@thewire/styled',
  theme: {
    extend: {},
  },
})
