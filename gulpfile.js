var gulp = require('gulp');
var ts = require('gulp-typescript');

var paths = {
	npm: './node_modules/',
    bower: './bower_components/',
	lib: './wwwroot/lib/',
	app: './wwwroot/app/',
    e2e: './wwwroot/e2e/',
	tsAppRoot: './app/',
    tsSpecRoot: './e2e/',
    assets: './wwwroot/assets/'
};

var tsAppProject = ts.createProject(paths.tsAppRoot + 'tsconfig.json');
var tsSpecProject = ts.createProject(paths.tsSpecRoot + 'tsconfig.json');

var libs = [
    paths.bower + 'angular/angular.js',
    paths.bower + 'angular-route/angular-route.js',
    paths.bower + 'angular-animate/angular-animate.js',
    paths.bower + 'angular-aria/angular-aria.js',
    paths.bower + 'angular-material/angular-material.js',
    paths.bower + 'angular-messages/angular-messages.js',
    paths.npm + 'systemjs/dist/system.js',
    paths.npm + 'systemjs/dist/system-polyfills.js',
    paths.npm + 'jasmine-core/lib/jasmine-core/jasmine.js',
    paths.npm + 'jasmine-core/lib/jasmine-core/jasmine-html.js',
    paths.npm + 'jasmine-core/lib/jasmine-core/boot.js'
];

var assets = [
    paths.bower + 'angular-material/angular-material.min.css',
    paths.bower + 'angular-material/angular-material.layouts.min.css',
    paths.npm + 'jasmine-core/lib/jasmine-core/jasmine.css'    
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
gulp.task('tsAppCompile', function () {	
    var tsResult = tsAppProject.src()
    .pipe(ts(tsAppProject));

	return tsResult.js
	.pipe(gulp.dest(paths.app));	
});

gulp.task('tsSpecCompile', function () {	
    var tsResult = tsSpecProject.src()
    .pipe(ts(tsSpecProject));

	return tsResult.js
	.pipe(gulp.dest(paths.e2e));	
});


gulp.task('startup', ['libs', 'assets', 'tsAppCompile', 'tsSpecCompile']);