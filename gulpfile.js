const path = require('path');
const fs = require('fs');

const gulp = require('gulp');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const through2 = require('through2');
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
  };

  const bundle = await rollup.rollup({
    input: './index.js',
    plugins: [
      resolve(),
      babel(),
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

async function minify() {
  gulp
    .src('dist/*.js')
    .pipe(sourcemap.init())
    .pipe(terser())
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('dist/'));
}

function updatePackageJSON() {
  const transform = through2.obj((file, _, callback) => {
    const modifiedFile = file.clone();
    const pkgJson = JSON.parse(file.contents.toString());

    pkgJson.main = 'validator.fn.js';
    pkgJson.module = 'validator.fn.esm.js';
    pkgJson.browser = 'validator.fn.umd.min.js';

    delete pkgJson.scripts;
    delete pkgJson.devDependencies;
    delete pkgJson.private;
    delete pkgJson.engines;

    modifiedFile.contents = Buffer.from(JSON.stringify((pkgJson), null, 2));
    callback(null, modifiedFile);
  });

  return transform;
}

async function copyFiles() {
  gulp.src('README.md').pipe(gulp.dest(outDir));
  gulp.src('CHANGELOG.md').pipe(gulp.dest(outDir));
  gulp.src('LICENSE').pipe(gulp.dest(outDir));
  gulp.src('package.json')
    .pipe(updatePackageJSON())
    .pipe(gulp.dest(outDir));
}

const build = gulp.series(cleanOutDir, compile, minify, copyFiles);

exports.build = build;
exports.default = build;
