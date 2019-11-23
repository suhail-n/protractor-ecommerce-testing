import { Config } from "protractor";
// Load chai assertions
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";

export let config: Config = {
    onPrepare: function () {
        // Load chai-as-promised support
        chai.use(chaiAsPromised);
        // Initialise should API (attaches as a property on Object)
        chai.should();
    },
    // set to "custom" instead of cucumber.
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // path relative to the current config file
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // execute feature files. This path works because features file is not ts and wont compile into dist
    specs: ['../src/features/*.feature'],
    // this will load the browser driver directly rather than having to start selenium server
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        // allow to use actiosn api
        chromeOptions: {
            w3c: false,
        }
    },
    cucumberOpts: {
        require: ["../dist/stepdefinitions/**/*.js"],
        tags: "@sanity or @smoke"
    },

    // jasmineNodeOpts: {
    //     showColors: true,
    //     includeStackTrace: true,
    //     defaultTimeoutInterval: 120000
    // },
    getPageTimeout: 120000,
    noGlobals: true,
    // allows for async await
    SELENIUM_PROMISE_MANAGER: false
};