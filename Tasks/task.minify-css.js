'use strict';

module.exports = (gulp, settings) => {
    const util = require("gulp-util");
    const rename = require("gulp-rename");
    const plumber = require("gulp-plumber");
    const cssnano = require("gulp-cssnano");

    return () => {
        var streams = gulp.src(settings.cssFiles)
            .pipe(plumber({
                handleError: settings.handleError.bind(this)
            }));

        if (settings.type === "release") {
            streams = streams
                .pipe(cssnano({
                    autoprefixer: false
                }))
                .pipe(rename({
                    suffix: ".min"
                }));
        }

        return streams.pipe(gulp.dest(settings.cssDir));
    };
};
