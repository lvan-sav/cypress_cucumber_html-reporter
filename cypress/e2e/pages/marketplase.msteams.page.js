const { MarketplacePage } = require('./support.bases.pages')

//locators
const pageTitle = '.listing-body h1'
const installDropdown = '.install-buttons .text'
const lastBreadcrumbItem = '.breadcrumbs>li:last-child>a'

class MarketplaceMSTeamsPage extends MarketplacePage {
    
    getPageTitle() {
        return cy.get(pageTitle)
    }

    getInstallDropdown() {
        return cy.get(installDropdown)
    }

    getLastBreadcrumbsItem() {
        return cy.get(lastBreadcrumbItem)
    }
}

module.exports = {
    MarketplaceMSTeamsPage: MarketplaceMSTeamsPage,
    marketplaceMSTeamsPage: new MarketplaceMSTeamsPage
}