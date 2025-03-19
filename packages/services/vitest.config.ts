import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    name: 'Packages —  Services',
    globals: true,
    environment: 'node',
  },
})
