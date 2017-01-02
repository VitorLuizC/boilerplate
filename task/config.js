'use strict';

const { env } = require('gulp-util');

const isDebug = (typeof env.debug === 'boolean') ? env.debug : false;

module.exports = { isDebug };
