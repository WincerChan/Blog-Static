import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: 'main.js',
  output: {
    file: 'sw.js',
    format: 'iife'
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
      __buildVersion: 15
    })
  ],
};