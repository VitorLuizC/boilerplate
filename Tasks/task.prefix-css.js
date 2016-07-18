'use strict';

module.exports = (gulp, settings) => {
    const plumber = require("gulp-plumber");
    const autoprefixer = require("gulp-autoprefixer");

    return () => {
        var streams = gulp.src(settings.cssFiles)
            .pipe(plumber({
                handleError: settings.handleError.bind(this)
            }));

        if (settings.type === "release") {
            streams = streams.pipe(autoprefixer({
                browsers: ["> 0.001%"]
            }));
        }

        return streams.pipe(gulp.dest(settings.cssDir));
    };
};
