const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Specify the "sass" package as the compiler

// Define the source and destination directories
const srcDir = './frontend/src/scss'; // Path to your SCSS files
const destDir = './frontend/src/css'; // Path to the destination directory for compiled CSS

// Task to compile SCSS to CSS
gulp.task('scss', function () {
  return gulp
    .src(`${srcDir}/*.scss`) // Match all SCSS files in the source directory
    .pipe(sass().on('error', sass.logError)) // Compile SCSS to CSS
    .pipe(gulp.dest(destDir)); // Save the compiled CSS in the destination directory
});

// Task to watch for changes in SCSS files
gulp.task('watch', function () {
  gulp.watch(`${srcDir}/*.scss`, gulp.series('scss')); // Watch for changes in SCSS files and trigger the 'scss' task
});

// Default task: run 'scss' and 'watch' tasks
gulp.task('default', gulp.series('scss', 'watch'));
