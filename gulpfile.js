var gulp = require('gulp');

gulp.task('copyIndex', function() {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./bundle/'))
})

gulp.task('copyJS', function() {
  return gulp.src('./dist/*.js*')
    .pipe(gulp.dest('./bundle/dist'))
})

gulp.task('default', ['copyIndex', 'copyJS'])
