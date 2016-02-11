var gulp = require('gulp');
var ts = require('gulp-typescript');
var gls = require('gulp-live-server');

var paths = {
	npm: './node_modules/',
    bower: './bower_components/',
	lib: './wwwroot/lib/',
	app: './wwwroot/',
	tsRoot: './app/'
};

var tsProject = ts.createProject(paths.tsRoot + 'tsconfig.json');

var libs = [
    paths.bower + 'angular/angular.js',
    paths.npm + 'systemjs/dist/system.js',
    paths.npm + 'systemjs/dist/system-polyfills.js',
];

gulp.task('libs', function () {
	return gulp.src(libs)
	.pipe(gulp.dest(paths.lib));
});

// tscompile
gulp.task('tscompile', function () {

	var tsResult = tsProject.src()
	.pipe(ts(tsProject));

	return tsResult.js
	.pipe(gulp.dest(paths.app));	
});

// lite server
gulp.task('serve', function(){
    var server = gls.static('wwwroot', 3000);
    server.start();    
});