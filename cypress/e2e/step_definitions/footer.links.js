const { Given, And, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const { faker } = require('@faker-js/faker')

const { mainPage } = require('../pages/main.page')

const { signUpPage,
        verifyEmailPage } = require('../pages/sign.up.pages')

const { sipTrunksProdPage } = require('../pages/sip.trunks.prod.page')
const { sipTrunkingArticlePage } = require('../pages/articles.pages')
const { channelBillingArticlePage } = require('../pages/articles.pages')
const { sipTrunksPricingPage } = require('../pages/sip.trunking.pricing.page')

const baseURL = Cypress.config().baseUrl                                                

const fakeEmail = faker.internet.email()
const fakeFullName = faker.name.fullName()
const fakePassword = faker.internet.password(30, false, /[!-}]/, '!1')


Given(/^I click "Sign up" footer link$/, () => {

    mainPage
        .footerSignUpLinkClick()
})

Given(/^I click "Elastic SIP Trunking" footer link$/, () => {

    mainPage
        .footerSipTrunkingLinkClick()
})

When(/^I sign up with filling in all fields with random data$/, () => {

    signUpPage
        .signUpByAllFields(fakeEmail, fakeFullName, fakePassword)
})

When(/^I click "How many SIP trunks do I need" accordion$/, () => {

    sipTrunksProdPage
        .openSecondItemFAQ()
})

When(/^I click "How much does SIP trunking cost" accordion$/, () => {

    sipTrunksProdPage
        .openThirdItemFAQ()
})

When(/^I click "Resource Center" link in the "Frequency asked questions" block$/, () => {

    sipTrunksProdPage
        .resourceCenterLinkFAQ1Click()
})

And(/^I click "channels" link$/, () => {

    sipTrunksProdPage
        .channelsLinkFAQ2Click()
})

And(/^I click "pricing" link$/, () => {

    sipTrunksProdPage
        .pricingLinkFAQ3Click()
})

Then(/^I am on verify email page$/, () => {
    
    signUpPage
        .getSignUpFormError()
        .should('be.not.visible')

    cy.getURL()
      .should('eq', `${baseURL}sign-up/verify-email/f`)
})

Then(/^I can see verify email$/, () => {

    verifyEmailPage
        .getVerifyEmail()
        .should('be.visible')
})

Then(/^I can see "Resend verification email" button$/, () => {

    verifyEmailPage
        .getResentEmailBtn()
        .should('be.visible')
        .and('have.text', 'Resend verification email')
})

Then(/^I am on the "What SIP trunking is" article page$/, () => {
    
    cy.getURL()
      .should('eq', `${baseURL}resources/sip-trunking-explained`)
})

Then(/^I am on the "Channel Billing" article page$/, () => {
    
    cy.getURL()
      .should('eq', `${baseURL}resources/channel-billing-what-it-is-and-why-its-important`)
})

Then(/^I am on the SIP Trunk Pricing page$/, () => {
        
    cy.getURL()
      .should('eq', `${baseURL}pricing/elastic-sip`)
})

Then(/^The title of the article contains "What SIP trunking is"$/, () => {

    sipTrunkingArticlePage
        .getArticleTitle()
        .should('contain.text', 'What SIP trunking is')
})

Then(/^The title of the article contains "Channel Billing"$/, () => {

    channelBillingArticlePage
        .getArticleTitle()
        .should('contain.text', 'Channel Billing')
})

Then(/^The author of the article Odhran Reidy$/, () => {

    sipTrunkingArticlePage
        .getArticleAuthor()
        .should('contain.text', 'Odhran')
        .and('contain.text', 'Reidy')
})

Then(/^The author of the article Josh Whitaker$/, () => {

    channelBillingArticlePage
        .getArticleAuthor()
        .should('contain.text', 'Josh')
        .and('contain.text', 'Whitaker')
})

Then(/^The title of the page contains "SIP Trunk Pricing"$/, () => {

    sipTrunksPricingPage
        .getPageTitle()
        .should('have.text', 'SIP Trunk Pricing')
})

