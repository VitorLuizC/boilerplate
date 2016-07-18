'use strict';

module.exports = (gulp, settings) => {
    const sequence = require("run-sequence").use(gulp);

    return () => {
        sequence("compile-sass", "prefix-css", "minify-css");
    };
};
