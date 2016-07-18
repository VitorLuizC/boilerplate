'use strict';

const util = require("gulp-util");
const beep = require("beepbeep");

module.exports = {
    // global settings
    type: (util.env.release) ? "release" : "debug",

    // folders
    cssDir: "./Content/css",
    sassDir: "./Styles",
    imgDir: "./Content/img",
    jsDir: "./Scripts",
    jsOutputDir: "./Content/js",

    // source files
    cssFiles: [
        "./Content/css/**/*.css",
        "!./Content/css/**/*.min.css"
    ],
    sassFiles: "./Styles/**/*.scss",
    imgFiles: [
        "./Content/img/**/*.png",
        "./Content/img/**/*.jpg",
        "./Content/img/**/*.jpeg",
        "./Content/img/**/*.bmp",
        "./Content/img/**/*.svg",
        "!./Content/img/**/*.min.png",
        "!./Content/img/**/*.min.jpg",
        "!./Content/img/**/*.min.jpeg",
        "!./Content/img/**/*.min.bmp",
        "!./Content/img/**/*.min.svg"
    ],
    jsDevFiles: "./Scripts/**/*.js",
    jsFiles: "./Scripts/*.js",
    jsOutputFiles: [
        "./Content/js/**/*.js",
        "!./Content/js/**/*.min.js",
    ],

    handleError: function (error, isTask = true) {
        beep(5, 300);

        util.log(util.colors.red("~ Algo errado não está certo"));
        util.log(error);

        if (isTask) {
            this.emit("end");
        }
    }
};
