import { definePreset } from '@pandacss/dev'

const preset = definePreset({
  name: 'core',
  theme: {
    extend: {
      tokens: {
        colors: {
          cobalt: {
            50: {
              value: '#EBEDF9',
            },
          },
        },
      },
    },
  },
})

export default preset
