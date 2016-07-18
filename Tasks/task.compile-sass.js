'use strict';

module.exports = (gulp, settings) => {
    const sass = require("gulp-sass");
    const plumber = require("gulp-plumber");

    return () => {
        var streams = gulp.src(settings.sassFiles)
            .pipe(plumber({
                handleError: settings.handleError.bind(this)
            }))
            .pipe(sass({
                outputStyle: "expanded",
                indentType: "space",
                indentWidth: 2,
                linefeed: "crlf",
                sourceComments: true
            }));

        return streams.pipe(gulp.dest(settings.cssDir));
    };
};
