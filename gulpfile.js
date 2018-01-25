const gulp = require('gulp')
const stylus = require('gulp-stylus')
const nib = require('nib')
const browsersync = require('browser-sync')
const reload = browsersync.reload

const path = {
  stylus: 'src/css/*.styl',
  js: 'src/js/*.js',
  html: 'index.html'
}

gulp.task('stylus', () => {
  return gulp.src(path.stylus)
          .pipe(stylus({ use: nib(), import: ['nib']}))
          .pipe(gulp.dest('./css'))
          .pipe(browsersync.stream())
})

gulp.task('js', () => {
  return gulp.src(path.js)
          .pipe(gulp.dest('./js'))
          .pipe(browsersync.stream())
})

gulp.task('html', () => {
  return gulp.src(path.html)
          .pipe(browsersync.stream())
})

gulp.task('watch', () => {
  browsersync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch(path.stylus, ['stylus'])
  gulp.watch(path.js, ['js'], reload)
  gulp.watch(path.html, ['html'], reload)
})

gulp.task('default', ['watch'])
