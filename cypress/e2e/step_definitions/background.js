const { Given, And } = require('@badeball/cypress-cucumber-preprocessor')


Given(/^The Telnyx website$/, () => {               //
    cy.visit('/')                                   //  Background step
})                                                  //

And(/^Accept all cookies$/, () => {                 //
    cy.acceptAllCookies()                           //  Background step
})                                                  //