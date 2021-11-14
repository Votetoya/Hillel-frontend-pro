const { src, dest, series, parallel } = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();

function cleanDist() {
    return src('./dist', { read: false, allowEmpty: true}).pipe(clean());
}

function copyJs() {
        return src([
            './src/api.js',
            './src/custom.js',
        ])
        .pipe(concat('app.js'))
        .pipe(dest('./dist'));
}

function copyVendorJs() {
    return src([
        './node_modules/jquery/dist/jquery.min.js',
        './modules/jquery-ui-1.13.0.custom/jquery-ui.min.js',
    ])
    .pipe(concat('vendor.js'))
    .pipe(dest('./dist'));    
}

function copyHtml() {
    return src('./src/index.html').pipe(dest('./dist'));
  }

function copyCssTask() {
    return src('./src/*.css')
    .pipe(concat('main.css'))
    .pipe(dest('./dist'));
}

function server(done) {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    watch('./src/index.html', series(copyHtml, reloadBrowser));
    watch('./src/*.js', series(copyJs, reloadBrowser));
    watch('./src/*.css', series(copyCssTask, reloadBrowser));

    done();
}

function reloadBrowser(done) {
    browserSync.reload();
    done()
}

function taskServe() {
    return series(taskBuild(), server);
}

function taskBuild() {
    return series(cleanDist, parallel(copyHtml, copyJs, copyVendorJs, copyCssTask));
}

module.exports.build = taskBuild();
module.exports.serve = taskServe();