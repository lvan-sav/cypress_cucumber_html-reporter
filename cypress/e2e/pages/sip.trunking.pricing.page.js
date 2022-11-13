const { PricingBase } = require('./support.bases.pages')


class SipTrunksPricingPage extends PricingBase {

}

module.exports = {
    SipTrunksPricingPage: SipTrunksPricingPage,
    sipTrunksPricingPage: new SipTrunksPricingPage
}