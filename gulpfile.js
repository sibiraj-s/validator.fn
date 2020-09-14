const path = require('path');
const fs = require('fs');

const gulp = require('gulp');
const rollup = require('rollup');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');
const terser = require('gulp-plugin-terser');
const sourcemap = require('gulp-sourcemaps');

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

async function cleanOutDir() {
  await fs.promises.rmdir(outDir, { recursive: true });
}

async function compile() {
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
    file: 'dist/validator.fn.js',
    format: 'cjs',
    ...defaultOutputOptions,
  });

  await bundle.write({
    file: 'dist/validator.fn.esm.js',
    format: 'esm',
    ...defaultOutputOptions,
  });

  await bundle.write({
    name: 'Validator',
    file: 'dist/validator.fn.umd.js',
    format: 'umd',
    ...defaultOutputOptions,
  });
}

function minify() {
  return gulp
    .src('dist/*.js')
    .pipe(sourcemap.init())
    .pipe(terser())
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('dist/'));
}

async function updatePackageJSON() {
  const targetPkgJsonPath = path.resolve(outDir, 'package.json');
  const jsonStr = await fs.promises.readFile(targetPkgJsonPath, 'utf-8');

  const pkgJson = JSON.parse(jsonStr);

  pkgJson.main = 'validator.fn.js';
  pkgJson.module = 'validator.fn.esm.js';
  pkgJson.browser = 'validator.fn.umd.min.js';

  delete pkgJson.scripts;
  delete pkgJson.devDependencies;
  delete pkgJson.private;
  delete pkgJson.engines;

  await fs.promises.writeFile(targetPkgJsonPath, JSON.stringify((pkgJson), null, 2));
}

function copyFiles() {
  return gulp.src([
    'README.md',
    'CHANGELOG.md',
    'LICENSE',
    'package.json',
  ]).pipe(gulp.dest(outDir));
}

const build = gulp.series(cleanOutDir, compile, minify, copyFiles, updatePackageJSON);

exports.build = build;
exports.default = build;
