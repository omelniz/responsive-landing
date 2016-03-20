require("es6-promise").polyfill();

var gulp    = require("gulp");
var path    = require("./path");
var postcss = require("gulp-postcss");

gulp.task("styles", function () {
    var processors = [
        require("postcss-import"),
        require("postcss-mixins"),
        require("postcss-nested"),
        require("postcss-simple-vars"),
        require("postcss-color-function"),
        require("postcss-calc"),
        require("lost"),
        require("autoprefixer")({
            browsers: [
                "Android 2.3",
                "Android >= 4",
                "Chrome >= 20",
                "Firefox >= 24",
                "Explorer >= 8",
                "iOS >= 6",
                "Opera >= 12",
                "Safari >= 6"
            ]
        })
    ];

    gulp.src(path.to.styles.main)
    .pipe(postcss(processors))
    .pipe(gulp.dest(path.to.styles.dest));
});
