const { Given, And, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const { mainPage } = require('../pages/main.page')

const { customerStoriesPage } = require('../pages/customer.stories.page')
const { lightspeedStoryPage } = require('../pages/lightspeed.story.page')

const { savingCalcPage } = require('../pages/saving.calc.page')

const { moveTwilioArticlePage } = require('../pages/articles.pages')


Given(/^I hover over the "Resources" dropdown in the header$/, () => {

    mainPage
        .hoverHeader()
    
    mainPage
        .openAndGetResourcesDropItems()
})

When(/^I click "Customer story" link$/, () => {

    mainPage
        .storiesHeadLinkClick()
    
    cy
        .moveFromHeader()
})

When(/^I click "Saving Calculator" link$/, () => {

    mainPage
        .savingCalculatorLinkClick()

    cy
        .moveFromHeader()
})

And(/^I click first "Read customer story"$/, () => {

    customerStoriesPage
        .getReadCustomerStoriesLink(0)
        .eq(0)
        .click()
})

And(/^I choose "(\w+)"$/, (service) => {
    
    if (service === "Messaging") {
        savingCalcPage
            .getMessagingApiBox()
            .click()
    }
    if (service === "Trunking") {
        savingCalcPage
            .getSipTrunkingBox()
            .click()
    }
    if (service === "Voice") {
        savingCalcPage
            .getVoiceApiBox()
            .click()
    }

})

And(/^I click "Continue" button$/, () => {

    savingCalcPage
        .getContinueBtn()
        .click()
})

And(/^I type (\d+) local numbers$/, (local) => {

    savingCalcPage
        .getLocalNumField()
        .clear()
        .type(local)
})

And(/^I type (\d+) toll-free numbers$/, (tollFree) => {

    savingCalcPage
        .getTollFreeNumField()
        .clear()
        .type(tollFree)
})

And(/^I type (\d+) sendSMS$/, (sendSMS) => {

    savingCalcPage
        .getSendSmsField()
        .clear()
        .type(sendSMS)
})

And(/^I type (\d+) receiveSMS$/, (receiveSMS) => {

    savingCalcPage
        .getReceiveSmsField()
        .clear()
        .type(receiveSMS)
})

And(/^I type (\d+) sendMMS$/, (sendMMS) => {

    savingCalcPage
        .getSendMmsField()
        .clear()
        .type(sendMMS)
})

And(/^I type (\d+) receive sendMMS$/, (receiveMMS) => {

    savingCalcPage
        .getReceiveMmsField()
        .clear()
        .type(receiveMMS)
})

And(/^I type (\d+) desired receive calls to local numbers$/, (toLocal) => {
    
    savingCalcPage
        .getReceiveToLocalField()
        .clear()
        .type(toLocal)
})

And(/^I type (\d+) desired receive calls to toll-free numbers$/, (toTollFree) => {

    savingCalcPage
        .getReceiveToTollFreeField()
        .clear()
        .type(toTollFree)
})

And(/^I type (\d+) desired outbond calls$/, (outbond) => {

    savingCalcPage
        .getOutbondField()
        .clear()
        .type(outbond)
})

And(/^I type (\d+) desired receive call with Call control$/, (receiveControl) => {

    savingCalcPage
        .getReceiveCallControlField()
        .clear()
        .type(receiveControl)
})

And(/^I type (\d+) desired making calls with Call control$/, (makeControl) => {

    savingCalcPage
        .getMakeCallControlField()
        .clear()
        .type(makeControl)
})

And(/^I click "Read our Twillio Migration Guide" button$/, () => {

    savingCalcPage
        .twillioMigrGuideBtnClick()
})

Then(/^I am on the "Customer story" page$/, () => {

    cy.getURL()
      .should('contain', 'customer-stories')
})

Then(/^I can see side company information menu$/, () => {

    lightspeedStoryPage
        .getCompanyInformationMenu()
        .should('be.visible')
})

Then(/^I can see side menu with used products$/, () => {

    lightspeedStoryPage
        .getUsedProductsMenu()
        .should('be.visible')
})

Then(/^I can see "Your saving" information block$/, () => {

    savingCalcPage
        .getYourSavingInfoBlock()
        .scrollIntoView()
        .should('be.visible')
})

Then(/^I can see "Try Telnyx for free" button$/, () => {

    savingCalcPage
        .getTryTelnyxFreeBtn()
        .should('be.visible')
})

Then(/^I am on "Move from Twillio to Telnyx" article page$/, () => {

    cy.getURL()
      .should('contain', 'twilio-migration-guide')
})

Then(/^I can see "Move from Twillio to Telnyx" article title$/, () => {

    moveTwilioArticlePage
        .getArticleTitle()
        .should('contain.text', 'Move from Twilio to Telnyx')
})
