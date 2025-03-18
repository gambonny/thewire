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
          text: {
            default: { value: '{colors.white}' }, // Default text color
            muted: { value: '{colors.gray.400}' }, // Muted text
          },
          border: {
            default: { value: '{colors.white}' }, // Default border color
            subtle: { value: '{colors.gray.600}' }, // Subtle border
          },
          background: {
            default: { value: '{colors.gray.900}' }, // Main background
            surface: { value: '{colors.green.800}' }, // Panels, cards, form containers
            overlay: { value: 'rgba(0, 0, 0, 0.5)' }, // Modal overlays, backdrops
            muted: { value: '{colors.gray.700}' }, // Subtle background variations
          },
        },
      },
    },
  },
})

export default preset
