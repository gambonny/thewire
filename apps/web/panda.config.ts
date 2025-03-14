import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  jsxFramework: 'react',
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../design-system/ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: ['@pandacss/preset-panda', '@monorepo/preset'],
  exclude: [],
  importMap: '@monorepo/styled',
  theme: {
    extend: {},
  },
})
