import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    name: 'Preset',
    globals: true,
    environment: 'node',
  },
})
