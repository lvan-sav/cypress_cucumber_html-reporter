
const headerSignUpBtn = 'li div [href="/sign-up"]'
const headerContactUsBtn = 'header li [href="/contact-us"]'
const headerAllProductsLink = 'header [href="/products"] span'
const headerManagedservLink = '[href*="managed-services"] span'
const headerNetworkBtn = 'header li [href$="global-ip-network"]'
const headerDropdown = 'header li'

const headerDocsLink = {
    dropNum: 3,
    link: '[href*="developers"]'
}

const headerBlogLink = {
    dropNum: 3,
    link: '[href="/resources"]'
}

const headerStoriesLink = {
    dropNum: 3, 
    link: '[href="/customer-stories"]'
}

const headerSavingCalcLink = {
    dropNum: 3,
    link: '[href="/twilio-pricing-calculator"]'
}

const headerAboutTelnyxLink = {
    dropNum: 4,
    link: '[href="/company/about"]'
}

const headerCareersLink = {
    dropNum: 4,
    link: '[href="/company/careers"]'
}

const headerPartnersLink = {
    dropNum: 4,
    link: '[href="/company/partnerships"]'
}

const headerIntegrationsLink = {
    dropNum: 4,
    link: '[href="/integrations"]'
}


const header = 'header'
const mainEmailField = '[name="email"]'
const mainTryForFreeBtn = 'button[type="submit"]'
const mainSignUpBtn = 'main [href="/sign-up"]'


const footerSipTrunkingLink = 'footer [href="/products/sip-trunks"] span span'
const footerSignUpLink = 'footer [href="/sign-up"] span span'


class Header {
    
    getHeaderSignUpBtn() {
        return cy.get(headerSignUpBtn)
    }

    getHeaderContactUsBtn() {
        return cy.get(headerContactUsBtn)
    }

    getAllProdHeaderLink() {
        return cy.get(headerAllProductsLink)
    }

    getManagedServHeadLink() {
        return cy.get(headerManagedservLink)
    }

    getNetworkHeadBtn() {
        return cy.get(headerNetworkBtn)
    }

    getDocsHeadLink() {
        return cy.get(headerDropdown)
                .eq(headerDocsLink.dropNum)
                .find(headerDocsLink.link)
    }

    getBlogHeadLink() {
        return cy.get(headerDropdown)
                .eq(headerBlogLink.dropNum)
                .find(headerBlogLink.link)
    }

    getStoriesHeadLink() {
        return cy.get(headerDropdown)
                .eq(headerStoriesLink.dropNum)
                .find(headerStoriesLink.link)
    }

    getSavingCalculatorLink() {
        return cy.get(headerDropdown)
                .eq(headerSavingCalcLink.dropNum)
                .find(headerSavingCalcLink.link)
    }

    getAboutTelnyxHeadLink() {
        return cy.get(headerDropdown)
                .eq(headerAboutTelnyxLink.dropNum)
                .find(headerAboutTelnyxLink.link)
    }

    getCareersHeadLink() {
        return cy.get(headerDropdown)
                .eq(headerCareersLink.dropNum)
                .find(headerCareersLink.link)
    }

    getPartnersHeadLink() {
        return cy.get(headerDropdown)
                .eq(headerPartnersLink.dropNum)
                .find(headerPartnersLink.link)
    }

    getIntegrationsHeadLink() {
        return cy.get(headerDropdown)
                .eq(headerIntegrationsLink.dropNum)
                .find(headerIntegrationsLink.link)
    }
};


class MainPage extends Header {

    getEmailField() {
        return cy.get(mainEmailField)
    }

    getTryForFreeBtn() {
        return cy.get(mainTryForFreeBtn)
    }

    getMainSignUpBtn() {
        return cy.get(mainSignUpBtn)
    }

    headerSignUpBtnClick() {
        const btn = super.getHeaderSignUpBtn()
        btn.click()

        const signUpPage = new SignUpPage()
        return signUpPage
    }

    headerContactUsBtnClick() {
        super.getHeaderContactUsBtn()
            .click()

        const contactUsPage = new ContactUsPage
        return contactUsPage
    }

    hoverHeader() {
        return cy.get(header)
                .realHover()
    }

    openAndGetProdDropItems() {
        return cy.openAndGetAllDropItems(0)
    }

    openAndGetSolutionDropItems() {
        return cy.openAndGetAllDropItems(1)
    }

    openAndGetResourcesDropItems() {
        return cy.openAndGetAllDropItems(3)
    }

    openAndGetCompanyDropItems() {
        return cy.openAndGetAllDropItems(4)
    }

    allProductHeadLinkClick() {
        const link = super.getAllProdHeaderLink()
        link.click()
    }

    managedServHeadLinkClick() {
        const link = super.getManagedServHeadLink()
        link.click()
    }

    networkHeadBtnClick() {
        const btn = super.getNetworkHeadBtn()
        btn.click()
    }

    docsHeadLinkClick() {
        const link = super.getDocsHeadLink()
        link.click()
    }

    blogHeadLinkClick() {
        const link = super.getBlogHeadLink()
        link.click()
    }

    storiesHeadLinkClick() {
        const link = super.getStoriesHeadLink()
        link.click()

                                    
        return Cypress.on('uncaught:exception', (err) => {
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });
    }

    savingCalculatorLinkClick() {
        const link = super.getSavingCalculatorLink()
        link.click()
    }

    aboutTelnyxHeadLinkClick() {
        const link = super.getAboutTelnyxHeadLink()
        link.click()
    }

    careersHeadLinkClick() {
        const link = super.getCareersHeadLink()
        link.click()

                
        return Cypress.on('uncaught:exception', (err) => {
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });
    }

    partnersHeadLinkClick() {
        const link = super.getPartnersHeadLink()
        link.click()
    }

    integrationsHeadLinkClick() {
        const link = super.getIntegrationsHeadLink()
        link.click()

                        
        return Cypress.on('uncaught:exception', (err) => {
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });
    }

    mainSignUpBtnClick() {
        this.getMainSignUpBtn()
            .scrollIntoView({top: 1000, left: 0})
            .click()

        return new SignUpPage
    }

    addEmailAndTryForFree() {
        const email = faker.internet.email()
        this.getEmailField().type(email)
        this.getTryForFreeBtn().click()

        const signUpPage = new SignUpPage()
        return {
            page: signUpPage,
            email: email
        }
    }

    footerSipTrunkingLinkClick() {
        const footer = new Footer

        footer
            .getSipTrunkingLink()
            .click()
    }

    footerSignUpLinkClick() {
        const footer = new Footer

        footer
            .getSignUpFooterLink()
            .click()
                                
        return Cypress.on('uncaught:exception', (err) => {
                console.log('Cypress detected uncaught exception: ', err);
                return false;
            });
    }
    
}


class Footer {

    getSipTrunkingLink() {
        return cy.get(footerSipTrunkingLink)
    }

    getSignUpFooterLink() {
        return cy.get(footerSignUpLink)
    }
}

module.exports = {
    MainPage: MainPage,
    mainPage: new MainPage,

    Header: Header,
    header: new Header,

    Footer: Footer,
    footer: new Footer
}