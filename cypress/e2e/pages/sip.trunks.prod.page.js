const { AllProductPage } = require('./all.product.page')

//locators
const listFAQ = 'main dl'

const resCenterLink = {
    question: '#faq1_description',
    text: 'Resource Center'
}

const channelsLink = {
    question: '#faq2_description',
    text: 'channels'
}

const pricingLink = {
    question: '#faq3_description',
    text: 'pricing'
}

const faqAccordionBtn = {
    title: 'main dl>div',
    button: 'button'
}


class SipTrunksProdPage extends AllProductPage {

    getResourceCenterLinkFAQ1() {
        return cy.get(listFAQ, { timeout: 120000})
                .scrollIntoView()
                .find(resCenterLink.question)
                .contains(resCenterLink.text)
    }

    getChannelsLinkFAQ2() {
        return cy.get(listFAQ)
                .scrollIntoView()
                .find(channelsLink.question)
                .contains(channelsLink.text)
    }

    getPricingLinkFAQ3() {
        return cy.get(listFAQ)
                .scrollIntoView()
                .find(pricingLink.question)
                .contains(pricingLink.text)
    }

    getFaqAccordionBtn(btnNum) {
        return cy.get(faqAccordionBtn.title, { timeout: 120000 })
                .eq(btnNum)
                .find(faqAccordionBtn.button)
    }

    openSecondItemFAQ() {
        this.getFaqAccordionBtn(1)
            .click()
    }

    openThirdItemFAQ() {
        this.getFaqAccordionBtn(2)
            .click()
    }

    resourceCenterLinkFAQ1Click() {
        this.getResourceCenterLinkFAQ1()
            .click()

            
        return Cypress.on('uncaught:exception', (err) => {
                console.log('Cypress detected uncaught exception: ', err);
                return false;
            });
    }

    channelsLinkFAQ2Click() {
        this.getChannelsLinkFAQ2()
            .click()

        return Cypress.on('uncaught:exception', (err) => {
                console.log('Cypress detected uncaught exception: ', err);
                return false;
            });
    }

    pricingLinkFAQ3Click() {
        this.getPricingLinkFAQ3()
            .click()


        return Cypress.on('uncaught:exception', (err) => {
                console.log('Cypress detected uncaught exception: ', err);
                return false;
            });
    }
}

module.exports = {
    SipTrunksProdPage: SipTrunksProdPage,
    sipTrunksProdPage: new SipTrunksProdPage
}