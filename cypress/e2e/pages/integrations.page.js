const { MainPage } = require('./main.page')

//locators
const exploreMarketBtn = {
    title: 'main h1',
    hook: 'div',
    btn: 'a[href*="market"]'
}

const becomeTesterForm = '#become-a-beta-tester'
const firstName = '#FirstName'
const lastName = '#LastName'
const emailField = '#Email'
const useCaseSelect = '#Use_Case_Form__c'


class IntegrationsPage extends MainPage {

    getExploreMarketplaceBtn() {
        return cy.get(exploreMarketBtn.title, { timeout: 120000})
                .siblings(exploreMarketBtn.hook)
                .find(exploreMarketBtn.btn)
    }

    getTelnyxDiffTitle() {
        return cy.get(becomeTesterForm)
    }

    getFirstNameField() {
        return cy.get(firstName, { timeout: 60000 })
    }

    getLastNameField() {
        return cy.get(lastName)
    }

    getCompanyField() {
        return cy.get(companyField)
    }

    getEmailField() {
        return cy.get(emailField)
    }

    getIndustryField() {
        return cy.get(industryField)
    }

    getUseCaseSelect() {
        return cy.get(useCaseSelect)
    }

    exploreMarketplaceBtnClick() {
        this.getExploreMarketplaceBtn()
            .click()
    }

    fillAllFormsField(
        firstName,
        lastName,
        email,
        useCaseOpt
    ) {
        this.getFirstNameField()
            .type(firstName)
        this.getLastNameField()
            .type(lastName)
        this.getEmailField()
            .type(email)
        this.getUseCaseSelect()
            .select(useCaseOpt)
    }
}

module.exports = {
    IntegrationsPage: IntegrationsPage,
    integrationsPage: new IntegrationsPage
}