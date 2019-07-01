import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

const banner = `/*!
 * @module ${pkg.name}
 * @description ${pkg.description}
 * @version ${pkg.version}
 * @link ${pkg.repository}
 * @licence MIT License, https://opensource.org/licenses/MIT
 */
`;

export default {
  input: './index.js',
  output: {
    name: 'Validator',
    file: 'dist/validator.fn.js',
    format: 'umd',
    banner,
    sourcemap: true,
    globals: {
      lodash: '_',
    },
  },
  plugins: [resolve(), babel()],
  external: ['lodash'],
};
