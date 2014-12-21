var gulp = require('gulp');
var sass = require('gulp-sass')

var paths = {
  styles: ['scss/**/*.scss'],
};


gulp.task('styles', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.styles, ['styles']);
});
