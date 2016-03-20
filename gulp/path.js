var path = require('path');
var root = path.dirname(__dirname);
var dest = root + "/public";
var source = root + "/source";

module.exports = {
    to: {
        destination: dest,
        data: source + "/data/common.json",
        fonts: {
            source: source + "/assets/fonts/**/*.{ttf,woff,eot,svg}",
            build:  dest   + "/fonts/**/*.{ttf,woff,eot,svg}",
            dest:   "public/fonts"
        },
        images: {
            source: source + "/assets/images/**/*.{jpg,svg,png}",
            build:  dest   + "/images/**/*.{jpg,svg,png}",
            dest:   dest   + "/images"
        },
        scripts: {
            build:  dest + "/js/**/*.js",
            dest:   dest + "/js",
            source:  {
                libs:    source + "/assets/js/components/**/*.js",
                plugins: source + "/assets/js/plugins/**/*.js",
                app:     source + "/assets/js/script.js"
            }
        },
        templates: {
            source: source + "/templates/*.twig",
            build:  dest + "/*.html",
            dest:   dest
        },
        styles: {
            source: source + "/assets/css/**/*.css",
            main:   source + "/assets/css/style.css",
            build:  dest + "/css/style.css",
            dest:   dest + "/css"
        }
    }
};
