// Karma configuration file

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: './',

        // frameworks to use
        // possible values: 'jasmine', 'mocha'
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // Resource files

            './Scripts/angular.js',
            './Scripts/angular-mocks.js',
            //'./Scripts/jasmine.js',
            //'./Scripts/jasmine-html.js',
            './Scripts/moment.js',
            './Scripts/sinon-1.12.2.js',
            './Scripts/toastr.js',
            '../../src/AdventureWorks/bower_components/angular-smart-table/dist/smart-table.js',
            '../../src/AdventureWorks/bower_components/angular-bootstrap/ui-bootstrap.js',
            //'../AdventureWorks/wwwroot/Scripts/angular-animate.js',
            //'../AdventureWorks/wwwroot/Scripts/smart-table.min.js',
            //'../AdventureWorks/wwwroot/Scripts/ui-bootstrap-tpls.min.js',
            //'../AdventureWorks/wwwroot/Scripts/*.js',
			
            //'scripts/**/*.js',

            // Units under test
            '../../src/AdventureWorks/aw.app/app.module.js',
            '../../src/AdventureWorks/aw.app/app.controller.js',
            '../../src/AdventureWorks/aw.app/app.http.service.js',
            '../../src/AdventureWorks/aw.app/models/*.js',
            '../../src/AdventureWorks/aw.app/directives/*.js',

            // Unit tests
            './aw.app/*.js'
        ],

        // list of files to exclude
        exclude: [
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'

        reporters: ['progress', 'htmlDetailed'],
        //reporters: ['progress'],
        //reporters: ['progress', 'coverage'],
        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_WARN,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        //browsers: ['Chrome', 'Firefox', 'IE'],

        browsers: ['Chrome'],

        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-html-detailed-reporter'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,

        htmlDetailed: {
            splitResults: true
        }

        // coverage for karma
        //preprocessors :{
        //    '../ProjectLocation/**/*.js': 'coverage'
        //}
    });
};