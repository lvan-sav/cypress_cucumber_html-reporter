const { CompanyBase } = require('./support.bases.pages')


const officePicture = 'picture>img'
const whereWeAreSubtitle = 'div>section>h3'

const listVacantionsTitle = 'header>p'

const growTitle = 'main header>h2'
const prefooter = '#become-a-partner'
const firstNameField = '#FirstName'
const lastNameField = '#LastName'
const emailField = '#Email'
const phoneField = '#Form_Phone__c'
const partnerTypeField = '#Use_Case_Form__c'
const becomeReasonField = '#Form_Additional_Information__c'
const receiveEmailsBox = {
    id: '#Subscription_Opt_In__c',
    clickable: 'label'
}

class CompanyAboutPage extends CompanyBase {

    getOfficePicture() {
        return cy.get(officePicture, { timeout: 120000})
    }

    getWhereWeAreSubtitle() {
        return cy.get(whereWeAreSubtitle)
    }

    scrollToOfficePictures() {
        this.getWhereWeAreSubtitle()
            .scrollIntoView()
    }
}


class CompanyCareersPage extends CompanyBase {

    getListOfVacanciesTitle() {
        return cy.get(listVacantionsTitle)
    }
}


class CompanyPartnersPage extends CompanyBase {
    getGrowTitle() {
        return cy.get(growTitle)
    }

    getBuildList() {
        return cy.get(prefooter)
    }

    getFirstNameField() {
        return cy.get(firstNameField, { timeout: 60000 })
    }

    getLastNameField() {
        return cy.get(lastNameField)
    }

    getCompanyField() {
        return cy.get(companyField)
    }

    getEmailField() {
        return cy.get(emailField)
    }

    getPhoneField() {
        return cy.get(phoneField)
    }

    getPartnerTypeSelect() {
        return cy.get(partnerTypeField)
    }

    getBecomeReasonField() {
        return cy.get(becomeReasonField)
    }

    getReceiveEmailsChexbox() {
        return cy.get(receiveEmailsBox.id)
                .siblings(receiveEmailsBox.clickable)
    }

    scrollToGrowTitle() {
        this.getGrowTitle()
            .scrollIntoView()
    }

    scrollToBuildList() {
        this.getBuildList()
            .scrollIntoView()
    }

    fillAllFormFields(
        firstName,
        lastName,
        email,
        partnerType,
        reason
    ) {
        this.getFirstNameField()
            .type(firstName)
        this.getLastNameField()
            .type(lastName)
        this.getEmailField()
            .type(email)
        this.getPartnerTypeSelect()
            .select(partnerType)
        this.getBecomeReasonField()
            .type(reason)
        this.getReceiveEmailsChexbox()
            .realClick()
    }
}

module.exports = {
    CompanyAboutPage: CompanyAboutPage,
    companyAboutPage: new CompanyAboutPage,
    CompanyCareersPage: CompanyCareersPage,
    companyCareersPage: new CompanyCareersPage,
    CompanyPartnersPage: CompanyPartnersPage,
    companyPartnersPage: new CompanyPartnersPage
}