import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    name: 'App —  Web',
    globals: true,
    environment: 'node',
  },
})
