'use strict';

var
  gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat');

gulp.task('build', function() {
  gulp.src('src/*.js')
    .pipe(concat('solid-directives.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});
