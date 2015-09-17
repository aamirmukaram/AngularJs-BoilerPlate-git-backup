var gulp = require('gulp');
var inject = require('gulp-inject');
var shell = require('gulp-shell');
var angularModules = require("gulp-angular-modules");
var fs = require('fs');


gulp.task("add-angular-modules", function() {

    var options = {
        name: "gulp-angular-modules", // The name of the module to use in your main Angular.js
        modules: [] // Any extra modules that you want to include.
    };

    return gulp.src(["frontend/js/**/*.js","!frontend/js/app.js"])
        .pipe(angularModules("gulp-angular-modules.js", options)) // Name of the file generated
        .pipe(gulp.dest("frontend/js/gulp-angular-modules/")) // Destination folder
});

//DEPENDENT TASKS///////////////////////////
gulp.task('check-bower_required_components-exists', function () {
    if (!fs.existsSync("bower_required_components")){
        fs.mkdirSync("bower_required_components");
    }
});

gulp.task('bower-installer-shell',['check-bower_required_components-exists'], shell.task(['bower-installer']));





//MAIN TASKS///////////////////////////////////
gulp.task('task-add-bower', ['bower-installer-shell'], function () {

    return gulp.src('./frontend/index.html')
        // Injecting files relative to target files.USING RELATIVE PATH. index.html will have ../ INSTEAD OF ./
        .pipe(inject(gulp.src(['bower_required_components/**/*.js', 'bower_required_components/**/*.css'], {read: false}), {relative: true}))
        .pipe(gulp.dest('./frontend'));
});

gulp.task('task-add-ng-module', ["add-angular-modules"], function () {

    return gulp.src('./frontend/index.html')
        // Injecting files relative to target files.USING RELATIVE PATH. index.html will have ../ INSTEAD OF ./
        .pipe(inject(gulp.src(["frontend/js/**/*.js","!frontend/js/app.js","!frontend/js/gulp-angular-modules/gulp-angular-modules.js"], {read: false}),{name: 'angular'}, {relative: true}))
        .pipe(inject(gulp.src(['bower_required_components/**/*.js', 'bower_required_components/**/*.css'], {read: false}), {relative: true}))
        .pipe(gulp.dest('./frontend'));
});



