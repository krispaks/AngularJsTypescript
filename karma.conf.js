module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['systemjs', 'jasmine'],
        files: [
            'wwwroot/app/**/*/*.spec.js'
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
            serveFiles: [],
            config: {
                paths: {
                    'systemjs': 'wwwroot/lib/system.js',
                    'angular-mocks' : 'wwwroot/lib/angular-mocks.js',
                    'traceur' : 'wwwroot/lib/traceur.js'
                }
            },
            //transpiler: 'plugin-typescript'
        }
    });
};