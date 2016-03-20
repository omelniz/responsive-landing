var gulp = require("gulp");
var path = require("./path");
var twig = require("gulp-twig");
var data = require("gulp-data");

gulp.task("templates", function () {
    gulp
    .src(path.to.templates.source)
    .pipe(data(require(path.to.data)))
    .pipe(twig())
    .pipe(gulp.dest(path.to.templates.dest));
});
