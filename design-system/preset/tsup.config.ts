import type { Options } from 'tsup'

export const tsup: Options = {
  splitting: true,
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
  entryPoints: ['src/index.ts'],
  target: 'es2020',
  outDir: 'dist',
  external: ['@thewire/preset'],
  outExtension: (ctx) =>
    ctx.format === 'esm' ? { js: '.mjs' } : { js: '.cjs' },
}
