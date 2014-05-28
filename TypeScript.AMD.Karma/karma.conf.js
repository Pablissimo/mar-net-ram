// Karma configuration
// Generated on Sun Oct 20 2013 07:28:56 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({
    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
        //The configuration should allow only test-main.js to be included
        { pattern: 'FrontEndTools.WebUI/**/*.js', included: false },
        { pattern: 'FrontEndTools.WebUI/**/*.js.map', included: false },
        { pattern: 'FrontEndTools.WebUI/**/*.ts', included: false },
        'FrontEndTools.WebUI.Scripts.Test/test-main.js',
        { pattern: 'FrontEndTools.WebUI.Scripts.Test/**/*.js', included: false },
        { pattern: 'FrontEndTools.WebUI.Scripts.Test/**/*.js.map', included: false },
        { pattern: 'FrontEndTools.WebUI.Scripts.Test/**/*.ts', included: false }
    ],


    // list of files to exclude
    exclude: [],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};