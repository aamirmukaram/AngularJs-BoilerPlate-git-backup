var gulp = require('gulp');
var inject = require('gulp-inject');
var angularModules = require("gulp-angular-modules");
var bowerFiles = require('main-bower-files');




//DEPENDENT TASKS///////////////////////////

gulp.task("inject-ng-modules", function() {

    var options = {
        name: "gulp-angular-modules", // The name of the module to use in your main Angular.js
        modules: [] // Any extra modules that you want to include.
    };

    return gulp.src(["frontend/js/**/*.js","!frontend/js/app.js","!frontend/js/gulp-angular-modules/gulp-angular-modules.js"])
        .pipe(angularModules("gulp-angular-modules.js", options)) // Name of the file generated
        .pipe(gulp.dest("frontend/js/gulp-angular-modules/")) // Destination folder
});




//MAIN TASKS///////////////////////////////////
gulp.task('task-index-bower', function () {
    return gulp.src('./frontend/index.html')

        // Injecting files relative to target files.USING RELATIVE PATH. index.html will have ../ INSTEAD OF ./
        .pipe(inject(gulp.src(bowerFiles(), {read: false}), {relative: true  ,name:'bower'}))
        .pipe(gulp.dest('./frontend'));
});

gulp.task('task-index-inject-ng-module', ["inject-ng-modules"], function () {

    return gulp.src('./frontend/index.html')
        // Injecting files relative to target files.USING RELATIVE PATH. index.html will have ../ INSTEAD OF ./
        .pipe(inject(gulp.src(["frontend/js/**/*.js","!frontend/js/app.js","!frontend/js/gulp-angular-modules/gulp-angular-modules.js"], {read: false}), {relative: true  ,name:'angular'}))
        .pipe(inject(gulp.src(bowerFiles(), {read: false}), {relative: true  ,name:'bower'}))
        .pipe(gulp.dest('./frontend'));
});


