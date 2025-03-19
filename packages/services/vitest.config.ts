import { defineProject } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineProject({
  test: {
    name: 'Packages —  Services',
    globals: true,
    environment: 'node',
  },
  plugins: [tsconfigPaths()],
})
