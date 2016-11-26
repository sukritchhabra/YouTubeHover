// Require these dependencies
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

var paths = {
    components: 'components/*/*.js',
    options_scripts: ['options/modules/*/*.js', '!options/modules/min/*.js'],
    options_styles: ['options/modules/*/*.css', '!options/modules/min/*.css'],
}

// Task for Scripts (.js files in Compinents)
gulp.task('components', function() {
    return gulp.src(paths.components)
      .pipe(concat('components.js'))
      .pipe(gulp.dest('components/'))
      .pipe(uglify())
      .pipe(rename("components.min.js"))
      .pipe(gulp.dest('components/'));
});

gulp.task('optionsScripts', function() {
    return gulp.src(paths.options_scripts)
      .pipe(concat('modules.js'))
      .pipe(gulp.dest('options/modules/'))
      .pipe(uglify())
      .pipe(rename("modules.min.js"))
      .pipe(gulp.dest('options/modules/min/'));
});

gulp.task('optionsStyles', function() {
    return gulp.src(paths.options_styles)
      .pipe(concat('modules.css'))
      .pipe(gulp.dest('options/modules/'))
      .pipe(cleanCSS())
      .pipe(rename("modules.min.css"))
      .pipe(gulp.dest('options/modules/min/'));
});

// Watch task
gulp.task('watch', function() {
    // Watch .js files
    gulp.watch('components/*/*.js', ['components']);
    gulp.watch('options/modules/*/*.js', ['optionsScripts']);
    gulp.watch('options/modules/*/*.css', ['optionsStyles']);
 });

// Default Task
gulp.task('default', ['watch', 'components', 'optionsScripts', 'optionsStyles']);

