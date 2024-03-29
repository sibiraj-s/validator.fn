const path = require('node:path');
const fs = require('node:fs/promises');

const gulp = require('gulp');
const rollup = require('rollup');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');
const terser = require('gulp-plugin-terser');

const pkg = require('./package.json');

const outDir = path.resolve(__dirname, 'dist');

const banner = `/*!
 * @module ${pkg.name}
 * @description ${pkg.description}
 * @version ${pkg.version}
 * @link ${pkg.repository}
 * @licence MIT License, https://opensource.org/licenses/MIT
 */
`;

const cleanOutDir = async function () {
  await fs.rm(outDir, { recursive: true, force: true });
};

const compile = async function () {
  const defaultOutputOptions = {
    sourcemap: true,
    globals: {
      lodash: '_',
    },
    banner,
    exports: 'default',
  };

  const bundle = await rollup.rollup({
    input: './index.js',
    plugins: [
      nodeResolve(),
      babel({ babelHelpers: 'bundled' }),
    ],
    external: ['lodash'],
  });

  await bundle.write({
    file: 'dist/validator.fn.cjs',
    format: 'cjs',
    ...defaultOutputOptions,
  });

  await bundle.write({
    file: 'dist/validator.fn.mjs',
    format: 'esm',
    ...defaultOutputOptions,
  });

  await bundle.write({
    name: 'Validator',
    file: 'dist/validator.fn.umd.js',
    format: 'umd',
    ...defaultOutputOptions,
  });

  await bundle.close();
};

const minify = function () {
  return gulp
    .src('dist/*.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(gulp.dest('dist/', { sourcemaps: '.' }));
};

const updatePackageJSON = async function () {
  const targetPkgJsonPath = path.resolve(outDir, 'package.json');
  const jsonStr = await fs.readFile(targetPkgJsonPath, 'utf-8');

  const pkgJson = JSON.parse(jsonStr);

  pkgJson.main = 'validator.fn.cjs';
  pkgJson.module = 'validator.fn.mjs';
  pkgJson.exports = {
    '.': {
      require: './validator.fn.cjs',
      default: './validator.fn.mjs',
    },
  };

  delete pkgJson.scripts;
  delete pkgJson.devDependencies;
  delete pkgJson.private;
  delete pkgJson.engines;

  await fs.writeFile(targetPkgJsonPath, JSON.stringify(pkgJson, null, 2));
};

const copyFiles = function () {
  return gulp.src([
    'README.md',
    'CHANGELOG.md',
    'LICENSE',
    'package.json',
  ]).pipe(gulp.dest(outDir));
};

const build = gulp.series(cleanOutDir, compile, minify, copyFiles, updatePackageJSON);

exports.build = build;
exports.default = build;
