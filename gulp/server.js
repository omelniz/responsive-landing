var gulp        = require("gulp");
var path        = require("./path");
var browserSync = require("browser-sync").create();
var reload      = browserSync.reload;

gulp.task("server", function () {
    browserSync.init({
        server: {
            baseDir: path.to.destination
        }
    });

    gulp.watch(path.to.styles.build, reload);
    gulp.watch(path.to.scripts.build).on("change", reload);
    gulp.watch(path.to.templates.build).on("change", reload);
    gulp.watch(path.to.images.build).on("change", reload);
    gulp.watch(path.to.fonts.build).on("change", reload);
});
