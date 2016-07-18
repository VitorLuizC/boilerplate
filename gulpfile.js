'use strict';

const gulp = require("gulp");
const settings = require("./Tasks/settings.js");

try {
    const defineTasks = require("./Tasks");
    defineTasks(gulp, settings);
} catch (error) {
    settings.handleError(error, false);
}
