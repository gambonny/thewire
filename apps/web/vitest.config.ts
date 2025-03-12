import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    name: 'Web app',
    globals: true,
    environment: 'node',
  },
})
