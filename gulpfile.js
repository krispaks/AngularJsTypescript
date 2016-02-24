var gulp = require('gulp');
var ts = require('gulp-typescript');

var paths = {
	npm: './node_modules/',
    bower: './bower_components/',
	lib: './wwwroot/lib/',
	app: './wwwroot/app/',
	tsRoot: './app/',
    assets: './wwwroot/assets/'
};

var tsProject = ts.createProject(paths.tsRoot + 'tsconfig.json');

var libs = [
    paths.bower + 'angular/angular.js',
    paths.bower + 'angular-route/angular-route.js',
    paths.bower + 'angular-animate/angular-animate.js',
    paths.bower + 'angular-aria/angular-aria.js',
    paths.bower + 'angular-material/angular-material.js',
    paths.bower + 'angular-messages/angular-messages.js',
    paths.npm + 'systemjs/dist/system.js',
    paths.npm + 'systemjs/dist/system-polyfills.js',
];

var assets = [
    paths.bower + 'angular-material/angular-material.min.css',
    paths.bower + 'angular-material/angular-material.layouts.min.css'    
];

gulp.task('libs', function () {
	return gulp.src(libs)
	.pipe(gulp.dest(paths.lib));
});

gulp.task('assets', function(){
    return gulp.src(assets)
    .pipe(gulp.dest(paths.assets));
})

// tscompile
gulp.task('tscompile', function () {	
    var tsResult = tsProject.src()
    .pipe(ts(tsProject));

	return tsResult.js
	.pipe(gulp.dest(paths.app));	
});

gulp.task('startup', ['libs', 'assets', 'tscompile']);