'use strict';

module.exports = function (gulp, settings) {

    const sequence = require("run-sequence").use(gulp);

    return () => {
        sequence("build-css", "build-js", "minify-img");
    };
};
