'use strict';

module.exports = (gulp, settings) => {
    const util = require("gulp-util");

    return () => {
        util.log(util.colors.magenta("Test") + ": Success!");

        return;
    };
};
