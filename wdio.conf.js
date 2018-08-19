const timeout = 50000
const appiumHost = '127.0.0.1'
const appiumPort = 4723

exports.config = {
    specs: [
        './wdio-tests/**/*.js'
    ],
    maxInstances: 3,
    capabilities: [{
            appiumVersion: '1.8.1',
            browserName: 'chrome',
            platformName: 'Android',
            platformVersion: '8.1.0',
            deviceName: '3f27126',
            waitforTimeout: timeout,
            commandTimeout: timeout,
            newCommandTimeout: timeout
        },
        {
            maxInstances: 1,
            browserName: 'chrome',
            platform: 'Linux',
            platformName: 'Linux',
            waitforTimeout: timeout,
            commandTimeout: timeout,
            newCommandTimeout: timeout
        },
        {
            maxInstances: 1,
            browserName: 'firefox',
            platform: 'Linux',
            platformName: 'Linux',
            waitforTimeout: timeout,
            commandTimeout: timeout,
            newCommandTimeout: timeout
        }
    ],
    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    waitforTimeout: timeout,
    connectionRetryTimeout: 10 * timeout,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['dot'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 20000
    },

    onPrepare: function () {
        console.log('<<< BROWSER TESTS STARTED >>>');
    },

    onComplete: function () {
        console.log('<<< BROWSER TESTS FINISHED >>>');
    }

}