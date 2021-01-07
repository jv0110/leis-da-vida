const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const imgmin = require('gulp-imagemin');

gulp.task('minifyhtml', function(done){
  gulp.src('./src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('./dist'))

  done();
});

gulp.task('minifyimg', function(done){
  gulp.src('./src/assets/images/*')
  .pipe(imgmin())
  .pipe(gulp.dest('./dist/assets/images'));

  done();
});

gulp.task('workflow', function(done){
  gulp.src('./src/style/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(cssnano())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist/style/css'))

  done();
});

gulp.task('copyjs', function(done){
  gulp.src('./src/js/**/*')
  .pipe(gulp.dest('./dist/js'))

  done();
});

gulp.task('copyfonts', function(done){
  gulp.src('./src/assets/fonts/**/*')
  .pipe(gulp.dest('./dist/assets/fonts'))

  done();
});

gulp.task('copyvideos', function(){
  return gulp.src('./src/assets/videos/**/*')
  .pipe(gulp.dest('./dist/assets/videos'))
});

gulp.task('default', function(){
  gulp.watch('./src/style/scss/**/*.scss', gulp.series('workflow'));
  gulp.watch('./src/*.html', gulp.series('minifyhtml'));
  gulp.watch('./src/assets/images', gulp.series('minifyimg'));
});