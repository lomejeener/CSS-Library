const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
    return src(['Scss/**/*.scss'])
        .pipe(sass({}))
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('Purged'))
};

function watchTask() {
    watch(['Scss/**/*.scss', '*.html'], buildStyles)
};

exports.default = series(buildStyles, watchTask)