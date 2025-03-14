import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    name: 'Design System —  UI',
    globals: true,
    environment: 'node',
  },
})
