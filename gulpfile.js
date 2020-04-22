// code for "gulp build"


var gulp = require('gulp');
var run = require('gulp-run');
var ts = require('gulp-typescript');

var tsProjectAMD = ts.createProject('./tsconfig.json', {
    typescript: require('typescript'),
    "declaration": true,
    target: 'es5',
    module: 'amd'
});
var tsProjectES6 = ts.createProject('./tsconfig.json', {
    typescript: require('typescript'),
    "declaration": true,
    target: 'es5',
    module: 'es2015'
});
var tsProjectCJS = ts.createProject('./tsconfig.json', {
    typescript: require('typescript'),
    "declaration": true,
    target: 'es5',
    module: 'commonjs'
});
var tsProjectSystem = ts.createProject('./tsconfig.json', {
    typescript: require('typescript'),
    "declaration": true,
    target: 'es5',
    module: 'system'
});
gulp.task('amd', function () {
    return gulp.src('index.ts')
        .pipe(tsProjectAMD())
        .pipe(gulp.dest('dist/amd'));
});
gulp.task('commonjs', function () {
    return gulp.src('index.ts')
        .pipe(tsProjectCJS())
        .pipe(gulp.dest('dist/commonjs'));
});
gulp.task('es2015', function () {
    return gulp.src('index.ts')
        .pipe(tsProjectES6())
        .pipe(gulp.dest('dist/es2015'));
});
gulp.task('system', function () {
    return gulp.src('index.ts')
        .pipe(tsProjectSystem())
        .pipe(gulp.dest('dist/system'));
});

gulp.task('default', gulp.series('es2015', 'amd', 'system', 'commonjs', function (callback) {
    callback();
}));