module.exports = function(config) {
    config.set({
        basePath: './',
        frameworks: ['systemjs', 'jasmine'],
        files: [],
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
        systemj: {
            configFile: './system.conf.js',
            serveFiles: [],
            config: {
                paths: {

                }
            }
        }
    });
};