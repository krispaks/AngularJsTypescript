module.exports = function(config) {
    config.set({
        basePath: './',
        frameworks: ['systemjs', 'jasmine'],
        files: [
            'wwwroot/app/app.*.js',
            'wwwroot/app/**/*/*.js'
        ],
        browsers: ['Chrome'],
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-systemjs'
        ],
        reporters: [
            'progress'
        ],
        colors: true,
        systemjs: {
            configFile: 'wwwroot/app/system.conf.js',
            serveFiles: [
                'wwwroot/lib/angular.js',
                'wwwroot/lib/angular-animate.js',
                'wwwroot/lib/angular-aria.js',
                'wwwroot/lib/angular-material.js',
                'wwwroot/lib/angular-messages.js',
                'wwwroot/lib/angular-mocks.js',
                'wwwroot/lib/angular-resource.js',
                'wwwroot/lib/angular-route.js'
            ],
            config: {
                paths: {
                    'systemjs': 'wwwroot/lib/system.js',
                    'system-polyfills' : 'wwwroot/lib/system-polyfills.js'
                }
            }
        }
    });
};