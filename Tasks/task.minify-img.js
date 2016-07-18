'use strict';

module.exports = (gulp, settings) => {
    const rename = require("gulp-rename");
    const plumber = require("gulp-plumber");
    const imagemin = require("gulp-imagemin");

    return () => {
        var streams = gulp.src(settings.imgFiles)
            .pipe(plumber({
                handleError: settings.handleError.bind(this)
            }));

        if (settings.type === "release") {
            streams = streams
                .pipe(imagemin())
                .pipe(rename({
                    suffix: ".min"
                }));
        }

        return streams.pipe(gulp.dest(settings.imgDir));
    };
};
