'use strict';

const fs = require("fs");

module.exports = (gulp, settings) => {

    try {
        var files = fs.readdirSync(__dirname + "/");

        files.forEach(file => {
            if (file.match(/^task\./) !== null && file.match(/\.js$/) !== null) {
                let taskName = file.replace(/^task\./, "").replace(/\.js$/, "");
                let taskCallbak = require(`./${file}`)(gulp, settings);

                gulp.task(taskName, taskCallbak); // define task
            }
        });

        return true;
    } catch (error) {
        settings.handleError(error, false);

        return false;
    }
};
