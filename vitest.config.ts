import { defineConfig, coverageConfigDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    workspace: ['packages/*', 'apps/*', 'design-system/*'],
    reporters: process.env.GITHUB_ACTIONS ? ['dot', 'github-actions'] : ['dot'],
    coverage: {
      reportsDirectory: './coverage',
      exclude: ['**/styled-system/**', ...coverageConfigDefaults.exclude],
    },
  },
})
