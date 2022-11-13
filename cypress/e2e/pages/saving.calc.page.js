const { MainPage } = require('./main.page')

//locators
const messagingApiLable = '#MessageApi_svg__a'
const sipTrunkLable = '[alt="elastic sip trunking"]'
const voiceLable = '[alt="voice api"]'
const continueBtn = {
    formHeader: 'main header',
    form: 'div',
    hook: 'div>div>button',
    text: 'Continue'
}
//number count
const localNumField = '#local-numbers'
const tollFreeNumField = '#toll-free-numbers'
//messaging API sms count
const sendSmsField = '#send-sms'
const receiveSmsField = '#receive-sms'
const sendMmsField = '#send-mms'
const receiveMmsField = '#receive-mms'
//SIP Trunking count
const receiveToLocalField = '#receive-inbound-calls-to-local-numbers'
const receiveToTollFreeField = '#receive-inbound-calls-to-toll-free-numbers'
const outbondField = '#make-outbound-calls'
//voice API call count
const receiveCallControlField = '#receive-inbound-calls-with-call-control'
const makeCallControlField = '#make-outbound-calls-with-call-control'

const savingInfoBlock = {
    formHeader: 'main header',
    hook: 'div',
    title: 'h2'
}

const tryTelnyxFreeBtn = {
    title:'h2',
    hook: 'div',
    locator: 'a[href="/sign-up"]'
}

const twilioMigrGuideBtn = 'main [href*="twilio-migration-guide"]'


class SavingCalcPage extends MainPage {

    getMessagingApiBox() {
        return cy.get(messagingApiLable, { timeout: 120000 })
                .parent()
                .parent()
    }

    getSipTrunkingBox() {
        return cy.get(sipTrunkLable, { timeout: 120000})
                .parent()
    }
        
    getVoiceApiBox() {
        return cy.get(voiceLable, { timeout: 120000 })
                .parent()
    }

    getContinueBtn() {
        return cy.get(continueBtn.formHeader)
                .parent(continueBtn.form)
                .find(continueBtn.hook)
                .contains(continueBtn.text)
    }

    getLocalNumField() {
        return cy.get(localNumField)
    }

    getTollFreeNumField() {
        return cy.get(tollFreeNumField)
    }

    getSendSmsField() {
        return cy.get(sendSmsField)
    }

    getReceiveSmsField() {
        return cy.get(receiveSmsField)
    }

    getSendMmsField() {
        return cy.get(sendMmsField)
    }

    getReceiveMmsField() {
        return cy.get(receiveMmsField)
    }

    getReceiveToLocalField() {
        return cy.get(receiveToLocalField)
    }

    getReceiveToTollFreeField() {
        return cy.get(receiveToTollFreeField)
    }

    getOutbondField() {
        return cy.get(outbondField)
    }

    getReceiveCallControlField() {
        return cy.get(receiveCallControlField)
    }

    getMakeCallControlField() {
        return cy.get(makeCallControlField)
    }

    getYourSavingInfoBlock() {
        return cy.get(savingInfoBlock.formHeader)
                .siblings(savingInfoBlock.hook)
                .find(savingInfoBlock.title)
                .parent()
    }

    getTryTelnyxFreeBtn() {
        return cy.get(tryTelnyxFreeBtn.title)
                .siblings(tryTelnyxFreeBtn.hook)
                .find(tryTelnyxFreeBtn.locator)
    }

    getTwillioMigrGuideBtn() {
        return cy.get(twilioMigrGuideBtn, { timeout: 120000 })
    }

    twillioMigrGuideBtnClick() {
        this.getTwillioMigrGuideBtn()
            .click()

        
        return Cypress.on('uncaught:exception', (err) => {
                console.log('Cypress detected uncaught exception: ', err);
                return false;
            });
    }
}

module.exports = {
    SavingCalcPage: SavingCalcPage,
    savingCalcPage: new SavingCalcPage
}