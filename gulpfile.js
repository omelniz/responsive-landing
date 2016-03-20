var gulp        = require('gulp');
var runSequence = require('gulp-run-sequence');
var requireDir  = require('require-dir');

// Require all tasks
requireDir('./gulp', {recurse: true});

// Build task
gulp.task('build', function() {
    runSequence('clean', ['templates', 'styles', 'scripts', 'images', 'fonts']);
});

// Commonly used tasks defined here
gulp.task('default', ['watch', 'server']);
