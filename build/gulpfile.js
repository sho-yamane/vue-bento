const gulp = require('gulp')
const sass = require('gulp-sass')
const packageImporter = require('node-sass-package-importer')
const autoprefixer = require('gulp-autoprefixer')
const gcmq = require('gulp-group-css-media-queries')
const cssmin = require('gulp-cssmin')
const path = require('path')

sass.compiler = require('node-sass')

// Constant paths
const ROOT = path.resolve(__dirname, '..')
const SRC = path.join(ROOT, 'src')
const DIST = process.env.STYLE_DIST_DIR
  ? path.join(ROOT, process.env.STYLE_DIST_DIR)
  : path.join(ROOT, 'dist')

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
    .pipe(
      autoprefixer(['> 3% in JP', 'ie 11', 'android 4.4', 'last 1 versions'])
    )
    .pipe(gcmq())
    .pipe(cssmin())
    .pipe(gulp.dest(DIST))
})
