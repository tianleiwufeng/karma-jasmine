module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: ['spec/*.js'],
        exclude: ['karma.conf.js'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        captureTimeout: 60000,
        singleRun: false,
        reporters: ['progress', 'coverage'],
        preprocessors: { 'spec/*.js': 'coverage' },
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};