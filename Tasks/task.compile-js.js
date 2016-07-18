'use strict';

module.exports = (gulp, settings) => {
    const tap = require("gulp-tap");
    const util = require("gulp-util");
    const plumber = require("gulp-plumber");
    const babelify = require("babelify");
    const browserify = require("browserify");

    return () => {
        var streams = gulp.src(settings.jsFiles)
            .pipe(plumber({
                handleError: settings.handleError
            }));

        streams = streams.pipe(tap(file => {
            util.log(`Bundling ${file.path} ...`);

            file.contents = browserify(file.path, { debug: true })
                .transform(babelify.configure({
                    presets: ["es2015"]
                }))
                .bundle();
        }));

        return streams.pipe(gulp.dest(settings.jsOutputDir));
    };
};
