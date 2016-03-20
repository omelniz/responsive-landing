var gulp     = require("gulp");
var path     = require("./path");
var imagemin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant");

gulp.task("images", function() {
    gulp
    .src(path.to.images.source)
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest(path.to.images.dest));
});