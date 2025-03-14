import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    name: 'design-system/ui',
    globals: true,
    environment: 'node',
  },
})
