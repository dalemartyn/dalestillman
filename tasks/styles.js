const gulp = require('gulp');
const sass = require('gulp-sass');
const touch = require('gulp-touch-cmd');

sass.compiler = require('dart-sass');

const rev = require('gulp-rev');

const src_files = 'src/_assets/sass/**/*.scss';
const entries = 'src/_assets/sass/main.scss';

function styles_dev() {
  return gulp.src(entries, { sourcemaps: true })
    .pipe(sass({
      precision: 8
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css', { sourcemaps: true }))
    .pipe(touch());
}

function styles_build() {
  return gulp.src(entries)
    .pipe(sass({
      precision: 8,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(rev())
    .pipe(gulp.dest('./dist/css'))
    .pipe(rev.manifest('css-manifest.json'))
    .pipe(gulp.dest('./dist/css'));
}

function styles_watch() {
  gulp.watch(src_files, styles_dev);
}

module.exports = {
  dev: styles_dev,
  build: styles_build,
  watch: styles_watch
};
