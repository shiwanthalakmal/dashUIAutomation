
import {browser, Config} from 'protractor';
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
declare const allure: any;
var HtmlReporter = require('protractor-beautiful-reporter');

var path = require('path');
var fs = require('fs');
var downloadfile = path.join(__dirname,'\\dash-e2e-tests\\resources\\files-cabin\\download-files');
downloadfile = downloadfile.replace('typeScript\\','');
if (!fs.existsSync(downloadfile)){
    fs.mkdirSync(downloadfile);
}



export let config: Config = {

    // global timeouts
    getPageTimeout: 60000,
    allScriptsTimeout: 60000,
    defaultTimeoutInterval: 180000,
    directConnect: true,

    framework: 'jasmine2',

    //seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl : 'xyz',

    restartBrowserBetweenTests: false,

    useAllAngular2AppRoots: true,

    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            prefs: {
                download: {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': downloadfile
                }
            }
        }

    },

    suites: {

       suite01: './dash-e2e-tests/resources/testcases/dash-e2e-scenarios.js',
    },

    beforeLaunch: () => {
        console.log('URL:http://op.triton-tek.com/test/');
        console.log('APPLICATION: DASH App');
    },

    onPrepare: () => {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(180000);
        browser.ignoreSynchronization = true;

        // --------------------- emailable reporter ------------------------------------
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './emailable-report/',
            consolidateAll: false,
            screenshotsFolder: 'reportsscreenshots',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true
        }));


        var JasmineConsoleReporter = require('jasmine-console-reporter');
        var reporter = new JasmineConsoleReporter({
            colors: 1,           // (0|false)|(1|true)|2
            cleanStack: 1,       // (0|false)|(1|true)|2|3
            verbosity: 4,        // (0|false)|1|2|(3|true)|4
            listStyle: 'indent', // "flat"|"indent"
            activity: false
        });
        // -------------------------------- end ------------------------------------------

        // ----------------------------- allure dashboard settings -----------------------
        var AllureReporter = require('jasmine-allure-reporter');
        var reporter = new AllureReporter({
            allureReport : {
                resultsDir : 'allure-results'
            }
        });
        jasmine.getEnv().addReporter(reporter);
        jasmine.getEnv().afterEach(function(){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
            })
        });
        // -------------------------------- end ------------------------------------------

        // ----------------------------- summary report ----------------------------------
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './summary-report',
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            takeScreenShotsOnlyForFailedSpecs: true,
            docTitle: 'E2E Automation Execution Summary ..'
        }).getJasmine2Reporter());
        // -------------------------------- end ------------------------------------------

    },

    onComplete: () => {

        console.log('======================================== SUITE COMPLETED !!! ====================================');
    },

    onCleanUp: () => {

    },

    afterLaunch: () => {

    },

    jasmineNodeOpts:{
        showColors: true,
        defaultTimeoutInterval: 180000,
        isVerbose: false,
        includeStackTrace: true,
    },

};
