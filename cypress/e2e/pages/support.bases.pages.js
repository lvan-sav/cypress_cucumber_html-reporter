//locators
//story base locators
const companyInfoMenuTitle = 'h4>strong'
const usedProductsList = 'main ul'
//pricing base locators
const countryUK = 'li:nth-child(4) [href*="/gb"]'
const pageTitle = 'main h1 span'

const countryDropdown = {
    hook: 'div',
    dropNum: 0,
    locator: 'button[aria-haspopup="listbox"]'
}

const currencyDropdown = {
    hook: 'div',
    dropNum: 1,
    locator: 'button[aria-haspopup="listbox"]'
}
//article base locators
const articleTitle = 'article header h1'
const articleAuthor = 'article header>div'
//company base locators
const pageSubtitle = 'main section>header>div'
//marketplace page locators
const searchInput = 'input[type="text"]'
const firstSearchInput = '#react-autowhatever-1--item-0 a'


class StoryBase {

    getCompanyInformationMenu() {
        return cy.get(companyInfoMenuTitle)
                .parents()
                .parents()
    }

    getUsedProductsMenu() {
        return cy.get(usedProductsList)
                .parents()
    }
}

class PricingBase{

    getCountryDropdown() {
        return cy.get(countryDropdown.hook)
                .eq(countryDropdown.dropNum)
                .find(countryDropdown.locator)
    }

    getCurrencyDropdown() {
        return cy.get(currencyDropdown.hook)
                .eq(currencyDropdown.dropNum)
                .find(currencyDropdown.locator)
    }

    selectCountry(country) {
        return this.getCountryDropdown()
                    .siblings('ul')
                    .realHover()
                    .find(country)
                    .scrollIntoView()
                    .click()
    }

    selectUKCountry(lable) {
        return this.selectCountry(lable, countryUK)
    }

    getPageTitle() {
        return cy.get(pageTitle)
    }
}
class ArticleBase {

    getArticleTitle() {
        return cy.get(articleTitle)
    }

    getArticleAuthor() {
        return cy.get(articleAuthor)
    }
}

class CompanyBase {
    
    getPageSubtitle() {
        return cy.get(pageSubtitle)
    }

}

class MarketplacePage {

    getSearchInput() {
        return cy.get(searchInput)
    }

    getFirstSearchItems() {
        return cy.get(firstSearchInput)
    }
    
    fillSearchField(search) {
        this.getSearchInput()
            .type(search)
    }

    firstPossibleResultClick() {
        this.getFirstSearchItems()
            .wait(1000)
            .click({ waitForAnimations: true})
    }
}

module.exports = {
    CompanyBase: CompanyBase,
    StoryBase: StoryBase,
    PricingBase: PricingBase,
    ArticleBase: ArticleBase,

    MarketplacePage: MarketplacePage,
    marketplacePage: new MarketplacePage
}