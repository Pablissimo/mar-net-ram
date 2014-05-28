// Karma configuration
// Generated on Wed May 28 2014 00:16:05 GMT-0300 (Hora oficial do Brasil)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      'This should be a script that bootstraps your test by configuring Require.js and kicking __karma__.start(), probably your test-main.js file.',
      'Enter empty string to move to the next question.',
      {pattern: 'Press tab to list possible options. Enter empty string to move to the next question.', included: false},
      {pattern: '[1mWhat is the location of your source and test files ?[22mC:\Users\Ramon\Documents\GitHub\mar-net-ram\TypeScript.AMD.Karma\FrontEndTools.WebUI.Scripts.Test\Tests', included: false},
      {pattern: '[1mWhat is the location of your source and test files ?[22mC:\Users\Ramon\Documents\GitHub\mar-net-ram\TypeScript.AMD.Karma\FrontEndTools.WebUI.Scripts.Test\Tests', included: false},
      {pattern: 'Enter empty string to move to the next question.', included: false},
      {pattern: 'You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".', included: false},
      {pattern: 'Chrome', included: false}
    ],


    // list of files to exclude
    exclude: [
      'You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".',
      'Enter empty string to move to the next question.',
      'You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".',
      'Enter empty string to move to the next question.'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
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


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
