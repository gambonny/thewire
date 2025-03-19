import baseConfig from './eslint.config.js'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  ...baseConfig,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    ...reactPlugin.configs.flat.recommended,
    ...reactHooks.configs['recommended-latest'],
  },
]
