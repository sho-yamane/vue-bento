const gulp = require('gulp')
const sass = require('gulp-sass')
const cssmin = require('gulp-cssmin')
const packageImporter = require('node-sass-package-importer')
const path = require('path')

sass.compiler = require('node-sass')

// Constant paths
const ROOT = path.resolve(__dirname, '..')
const SRC = path.join(ROOT, 'src')
const DIST = path.join(ROOT, 'dist')

// Options
const sassOptions = {
  outputStyle: 'expanded',
  importer: packageImporter({
    extensions: ['.scss', '.css']
  })
}

gulp.task('build:sass', () => {
  return gulp
    .src(path.join(SRC, 'scss', 'style.scss'))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(cssmin())
    .pipe(gulp.dest(DIST))
})
