'use strict';

module.exports = (gulp, settings) => {
    const uglify = require("gulp-uglify");
    const rename = require("gulp-rename");
    const plumber = require("gulp-plumber");

    return () => {
        var streams = gulp.src(settings.jsOutputFiles)
            .pipe(plumber({
                handleError: settings.handleError.bind(this)
            }));

        if (settings.type === "release") {
            streams = streams
                .pipe(uglify())
                .pipe(rename({
                    suffix: ".min"
                }));
        }

        return streams.pipe(gulp.dest(settings.jsOutputDir));
    };
};
