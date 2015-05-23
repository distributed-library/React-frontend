var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
      root: 'dist',
      livereload: true
    });
});

gulp.task('browserify', function() {
  gulp.src('src/js/main.js')
  .pipe(browserify({transform: ['babelify', 'reactify']}))
  .pipe(concat('main.js'))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-vendor', function(){
  gulp.src(['src/vendor/**/*']).pipe(gulp.dest('dist/vendor'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
  .pipe(gulp.dest('dist'));

});

gulp.task('default',['browserify', 'copy', 'copy-vendor']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
});
