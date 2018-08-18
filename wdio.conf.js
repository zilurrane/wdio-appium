const timeout = 10000
const appiumHost = '127.0.0.1'
const appiumPort = 4730

exports.config = {
    specs: [
        './wdio-tests/**/*.js'
    ],
    host: appiumHost,
    port: appiumPort,
    maxInstances: 1,
    capabilities: [{
        appiumVersion: '1.8.1',
        browserName: 'chrome',
        platformName: 'Android',
        platformVersion: '8.1.0',
        deviceName: '3f27126',
        waitforTimeout: timeout,
        commandTimeout: timeout,
        newCommandTimeout: timeout
    }],
    services: ['appium'],
    appium: {
        waitStartTime: timeout,
        waitforTimeout: timeout,
        command: 'appium',
        logFileName: 'appium.log',
        args: {
            address: appiumHost,
            port: appiumPort,
            commandTimeout: timeout,
            sessionOverride: true,
            debugLogSpacing: true
        }
    },
    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    waitforTimeout: timeout,
    connectionRetryTimeout: 10*timeout,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['dot'],
    mochaOpts: {
        ui: 'bdd'
    },

    onPrepare: function () {
        console.log('<<< BROWSER TESTS STARTED >>>');
    },

    onComplete: function () {
        console.log('<<< BROWSER TESTS FINISHED >>>');
    }

}