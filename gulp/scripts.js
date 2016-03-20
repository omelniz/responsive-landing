var gulp   = require("gulp");
var path   = require("./path");
var concat = require("gulp-concat");

gulp.task("js-libs", function() {
    gulp.src([
        "source/assets/js/components/jquery/dist/jquery.min.js",
        "source/assets/js/components/fotorama/fotorama.js",
        "source/assets/js/components/enquire/dist/enquire.js",
        'source/assets/js/components/jquery.inputmask/dist/inputmask/inputmask.js',
		'source/assets/js/components/jquery.inputmask/dist/inputmask/inputmask.extensions.js',
        'source/assets/js/components/jquery.inputmask/dist/inputmask/jquery.inputmask.js'
    ])
    .pipe(concat("libs.js"))
    .pipe(gulp.dest(path.to.scripts.dest));
});

gulp.task("js-source", function() {
    gulp.src([
        "source/assets/js/main.js"
    ])
    .pipe(concat("script.js"))
    .pipe(gulp.dest(path.to.scripts.dest));
});

gulp.task("scripts", ["js-libs", "js-source"]);
