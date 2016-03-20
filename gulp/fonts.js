var gulp = require("gulp");
var copy = require('gulp-copy');
var path = require("./path");

gulp.task("fonts", function() {
    gulp
    .src(path.to.fonts.source)
    .pipe(copy(path.to.fonts.dest, {prefix: 3}));
});

