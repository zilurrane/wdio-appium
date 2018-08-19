var assert = require('assert')

describe('WebdriverIO Tests Demo Suit', function () {
    it('should have the right title', function () {
        browser.url('http://react-dva-starter.surge.sh')
        var title = browser.getTitle()
        assert.equal(title, 'React Dva Starter')
    })
})