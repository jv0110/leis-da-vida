'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-cleanhtml');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('optimage', function(done){
  gulp.src('./src/assets/images/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/assets/images'))

  done();
});

gulp.task('cssgen', function(done){
  gulp.src('./src/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(cssmin())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist/css'))
  done();
});

gulp.task('cssgendev', function(done){
  gulp.src('./src/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./src/css'))

  done();
})
gulp.task('htmlmin', function(done){
  gulp.src('./src/**/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('./dist'))

  done();
});
gulp.task('copyvideos', function(done){
  gulp.src('./src/assets/videos/**/*')
  .pipe(gulp.dest('./dist/assets/videos'))

  done();
});
gulp.task('copyjs', function(done){
  gulp.src('./src/js/**/*.js')
  .pipe(gulp.dest('./dist/js'))

  done();
});
gulp.task('default', function(done){
  gulp.watch('./src/scss/**/*.scss', gulp.series('cssgen'));
  gulp.watch('./src/**/*.html', gulp.series('htmlmin'));
  gulp.watch('./src/scss/**/*.scss', gulp.series('cssgendev'));
  done();
})