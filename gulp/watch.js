var gulp = require("gulp");
var path = require("./path");

gulp.task("watch", function() {
    gulp.watch(path.to.styles.source,          ["styles"]);
    gulp.watch(path.to.scripts.source.libs,    ["js-libs"]);
    gulp.watch(path.to.scripts.source.plugins, ["js-libs"]);
    gulp.watch(path.to.scripts.source.app,     ["js-source"]);
    gulp.watch(path.to.fonts.source,           ["fonts"]);
    gulp.watch(path.to.images.source,          ["images"]);
    gulp.watch(path.to.templates.source,       ["templates"]);
    gulp.watch(path.to.data,                   ["templates"]);
});
