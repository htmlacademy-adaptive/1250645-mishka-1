import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import concat from 'gulp-concat';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';

// Styles

export const styles = () => {
  return gulp.src('source/sass/style.scss', { sourcemaps: true })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// JS

export const scripts = () => {
  return gulp.src([
      'source/js/*.js',
      '!source/js/app.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('source/js'))
    .pipe(browser.stream());
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'source'
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
  gulp.watch('source/*.html').on('change', browser.reload);
}


export default gulp.series(
  styles, scripts, server, watcher
);
