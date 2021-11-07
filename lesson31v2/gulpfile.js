const { src, dest, series, parallel } = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const watch = require('gulp-watch');

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
    ])
    .pipe(concat('vendor.js'))
    .pipe(dest('./dist'));    
}

function copyHtml() {
    return src('./src/index.html').pipe(dest('./dist'));
  }

  function watchFiles() {
    return watch(['./src/*.js'], { ignoreInitial: false }, () => copyJs());
    
}
  
module.exports = {
    build: series(cleanDist, parallel(copyHtml, copyJs, copyVendorJs)),
    serve: series(cleanDist, parallel(copyHtml, copyJs, copyVendorJs), watchFiles),
}