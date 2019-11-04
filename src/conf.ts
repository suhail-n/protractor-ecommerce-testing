import { Config } from "protractor";

export let config: Config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['ecommerce-home-form.spec.js'],
    // this will load the browser driver directly rather than having to start selenium server
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        // allow to use actiosn api
        chromeOptions: {
            w3c: false,
        }
    },
    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 120000
    },
    getPageTimeout: 120000,
    noGlobals: true,
    // allows for async await
    SELENIUM_PROMISE_MANAGER: false
};