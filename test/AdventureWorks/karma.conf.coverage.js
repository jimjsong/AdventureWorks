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
			{ pattern: '../Nexus.Web/Scripts/jquery-2.1.4.js', watched: false, included: true, served: true },
			{ pattern: '../Nexus.Web/Scripts/angular.js', watched: false, included: true, served: true },
			{ pattern: '../Nexus.Web/Scripts/angular-mocks.js', watched: false, included: true, served: true },
			{ pattern: '../Nexus.Web/Scripts/angular-animate.js', watched: false, included: true, served: true },
            { pattern: '../Nexus.Web/Scripts/angular-cookies.js', watched: false, included: true, served: true },
            { pattern: '../Nexus.Web/Scripts/angular-messages.js', watched: false, included: true, served: true },
            { pattern: '../Nexus.Web/Scripts/angular-sanitize.js', watched: false, included: true, served: true },
			{ pattern: '../Nexus.Web/Scripts/angular-ui-router.js', watched: false, included: true, served: true },
			{ pattern: '../Nexus.Web/Scripts/angular-ui/ui-bootstrap.js', watched: false, included: true, served: true },
            { pattern: '../Nexus.Web/Scripts/angular-ui/ui-bootstrap-tpls.js', watched: false, included: true, served: true },
			{ pattern: '../Nexus.Web/Scripts/angular-touch.js', watched: false, included: true, served: true },
            { pattern: '../Nexus.Web/Scripts/kendo.all.js', watched: false, included: true, served: true },
            { pattern: '../Nexus.Web/Scripts/bootstrap.min.js', watched: false, included: true, served: true },
            { pattern: 'Scripts/sinon-1.12.2.js', watched: false, included: true, served: true },
            { pattern: '../Nexus.Web/Scripts/underscore.min.js', watched: false, included: true, served: true },
            { pattern: '../Nexus.Web/Scripts/angular-cache.js', watched: false, included: true, served: true },
            { pattern: '../Nexus.Web/Scripts/stacktrace-0.6.4.js', watched: false, included: true, served: true },
			{ pattern: '../Nexus.Web/Scripts/toastr.js', watched: false, included: true, served: true },
            { pattern: '../Nexus.Web/Scripts/loading-bar.js', watched: false, included: true, served: true },
            { pattern: '../Nexus.Web/Scripts/moment.js', watched: false, included: true, served: true },
            { pattern: './Scripts/unittest.utilities.js', watched: false, included: true, served: true },
            //'scripts/**/*.js',
            '../Nexus.Web/nexus.app/app.module.js',
            '../Nexus.Web/nexus.app/app.values.js',
            '../Nexus.Web/nexus.app/app.run.js',
            '../Nexus.Web/nexus.app/app.controller.js',
            '../Nexus.Web/nexus.app/services/*.js',
            '../Nexus.Web/nexus.app/features/nonbill/*.js',
            '../Nexus.Web/nexus.app/features/loadentry/*.js',
            '../Nexus.Web/nexus.app/features/loadentry/validation/*.js',
            '../Nexus.Web/nexus.app/features/settings/*.js',
            '../Nexus.Web/nexus.app/features/shiftrecon/*.js',
            '../Nexus.Web/nexus.app/features/siteops/*.js',
            '../Nexus.Web/nexus.app/features/associate/*.js',
            '../Nexus.Web/nexus.app/features/yardmgmt/*.js',
            '../Nexus.Web/nexus.app/features/damagetracking/*.js',
            '../Nexus.Web/nexus.app/features/user/*.js',
            '../Nexus.Web/nexus.app/features/inspections/*.js',
            '../Nexus.Web/nexus.app/features/_shared/*.js',
            '../Nexus.Web/nexus.app/features/globalerrors/*.js',

            '../Nexus.Web/nexus.app/helpers/*.js',
            '../Nexus.Web/nexus.app/directives/webcam.js',
            //'nexus.app/**/*.js'
            'nexus.app/**/*.js'
        ],

        // list of files to exclude
        exclude: [
            '../Nexus.Web/scripts/_references.js',
            '../Nexus.Web/scripts/*.intellisense.js',
            '../Nexus.Web/scripts/*.map'
        ],
        //plugins: [
        //  // these plugins will be require() by Karma
        //  'karma-jasmine',
        //  'karma-chrome-launcher',
        //  'karma-phantomjs-launcher'
        //],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'

        reporters: ['progress', 'coverage'],


        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_WARN,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, cu
        // rrently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        //browsers: ['Chrome', 'Firefox', 'IE'],
        browsers: ['Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        // coverage for karma
        preprocessors :{
            '../Nexus.Web/nexus.app/**/*.js': 'coverage'
        }
    });
};

