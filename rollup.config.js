import babel from '@rollup/plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH
const dist = 'dist'
const bundle = 'bundle'

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: 'cjs',
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: 'esm',
    },
    {
      file: `${dist}/${bundle}.umd.js`,
      format: 'umd',
      name: 'datepickerlt',
      sourcemap: true,
    },
  ],
  plugins: [
    production && terser(),
    resolve(),
    babel({ babelHelpers: 'bundled' }),
  ],
}
