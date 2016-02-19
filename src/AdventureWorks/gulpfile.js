/// <binding BeforeBuild='debug' />
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var jsSourceFiles = [
    'bower_components/angular/angular.min.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-bootstrap/ui-bootstrap.min.js',
    'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
    'bower_components/angular-smart-table/dist/smart-table.min.js'
];

var cssSourceFiles = [
    'bower_components/bootstrap-css/css/bootstrap.css'
];

var appFiles = [
    'aw.app/app.module.js',
    'aw.app/app.controller.js',
    'aw.app/app.http.service.js',
    'aw.app/models/address.js',
    'aw.app/models/customer.js',
    'aw.app/models/stateProvince.js',
    'aw.app/directives/showInfo.js'
];

var templateFiles = [
    'aw.app/**/*.html'
];

gulp.task('default', function () {

});

gulp.task('debug', ['copysources']);

gulp.task('copysources', function() {
    gulp.src(jsSourceFiles)
        .pipe(gulp.dest('wwwroot/scripts'));

    gulp.src(cssSourceFiles)
        .pipe(gulp.dest('wwwroot/styles'));

    gulp.src(appFiles)
        .pipe(concat('app.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('wwwroot/scripts'));

    gulp.src(templateFiles)
        .pipe(gulp.dest('wwwroot/templates'));

});