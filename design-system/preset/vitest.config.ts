import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    name: 'Design System —  Preset',
    globals: true,
    environment: 'node',
  },
})
