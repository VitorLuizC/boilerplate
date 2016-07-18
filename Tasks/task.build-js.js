'use strict';

module.exports = (gulp, settings) => {
    const sequence = require("run-sequence").use(gulp);

    return () => {
        sequence("compile-js", "minify-js");
    };
};
