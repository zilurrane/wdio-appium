var assert = require('assert')

describe('WebdriverIO Tests Demo Suit', function () {
    it('should have the right title', function () {
        browser.url('http://www.lifecompilers.com/')
        var title = browser.getTitle()
        assert.equal(title, 'LifeCOMPILERS')
    })
})