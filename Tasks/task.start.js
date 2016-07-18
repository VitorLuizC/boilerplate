'use strict';

module.exports = (gulp, settings) => {
    const sequence = require("run-sequence").use(gulp);

    return () => {
        sequence("build", () => {
            gulp.watch(settings.jsDevFiles, ["js"]);
            gulp.watch(settings.sassFiles, ["css"]);
        });
    };
};
