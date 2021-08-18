import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'

const input = ['lib/index.js']

export default [
  {
    input,
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: 'runtime',
        include: ['lib/**/*.d.ts'],
      }),
      terser(),
    ],
    output: {
      file: `dist/umd/typetags.min.js`,
      format: 'umd',
      name: 'typetags',
      esModule: false,
      exports: 'named',
      sourcemap: true,
    },
  },
  {
    input,
    plugins: [nodeResolve()],
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
      {
        dir: 'dist/cjs',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
    ],
  },
]
