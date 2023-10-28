import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import {deleteAsync} from 'del';
import postcss from 'gulp-postcss';
import csso from 'postcss-csso';
import cssurl from 'postcss-url';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';
import squoosh from 'gulp-libsquoosh';
import svgo from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';

// Styles
export const styles = () => {
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      cssurl({
        filter: '**/svg/url/*.svg',
        url: 'inline',
        optimizeSvgEncode: true
      }),
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// JS
const scripts = () => {
  return gulp.src('source/js/*.js')
    .pipe(concat('app.js'))
    .pipe(terser())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(browser.stream());
}

// HTML
const html = () => {
  return gulp.src('source/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'))
}

// Images
const compressImages = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(squoosh())
    .pipe(gulp.dest('build/img'));
}

const copyImages = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(gulp.dest('build/img'));
}

const convertToWebp = () => {
  return gulp.src('source/img/content/**/*.{jpg,png}')
    .pipe(squoosh({
      webp: {}
    }))
    .pipe(gulp.dest('build/img/content'));
}

// SVG
const svg = () => {
  return gulp.src(['source/img/**/*.svg', '!source/img/decoration/svg/sprite/*.svg', '!source/img/decoration/svg/url/*.svg'])
    .pipe(svgo())
    .pipe(gulp.dest('build/img'));
}

const sprite = () => {
  return gulp.src('source/img/decoration/svg/sprite/*.svg')
    .pipe(svgo())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img/decoration/svg'));
}

// Copy
const copy = (done) => {
  return gulp.src([
    'source/fonts/*.{woff,woff2}',
    'source/*.ico',
    'source/*.webmanifest'
  ], {
    base: 'source'
  })
    .pipe(gulp.dest('build'));
  done();
}

// Clean
const cleanup = () => {
  return deleteAsync('build');
}

// Server
const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher
const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch(['source/js/*.js', '!source/js/app.js'], gulp.series(scripts));
  gulp.watch('source/*.html', gulp.series(html)).on('change', browser.reload);
}

// Build
export const build = gulp.series(
  cleanup,
  copy,
  compressImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    svg,
    sprite,
    convertToWebp
  )
);

// Default
export default gulp.series(
  cleanup,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    svg,
    sprite,
    convertToWebp
  ),
  gulp.series(
    server,
    watcher
  )
);
