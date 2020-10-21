import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";


export default {
  input: 'main.js',
  output: {
    file: 'service-worker.js',
    format: 'cjs'
  },
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(
    ),
    replace({
      __buildEnv__: 'production',
      __buildDate__: () => new Date(),
      __buildVersion: 15,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    terser()
  ],
};