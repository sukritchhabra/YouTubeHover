// Require these dependencies
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Task for Scripts (.js files in Compinents)
gulp.task('scripts', function() {
    return gulp.src('components/*/*.js')
      .pipe(concat('components.js'))
      .pipe(gulp.dest('components/'))
      .pipe(uglify())
      .pipe(rename("components.min.js"))
      .pipe(gulp.dest('components/'));
});

// Watch task
gulp.task('watch', function() {
    // Watch .js files
    gulp.watch('components/*/*.js', ['scripts']);
 });

// Default Task
gulp.task('default', ['watch', 'scripts']);