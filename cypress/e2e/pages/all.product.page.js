const { MainPage } = require('./main.page')

//locators
const faxApiLable = 'main [href="/products/fax-api"]'

class AllProductPage extends MainPage{

    getFaxApiLabel() {
        return cy.get(faxApiLable)
    }

    faxApiClick() {
        cy.linkClick(this.getFaxApiLabel())
    }
}

module.exports = {
    AllProductPage: AllProductPage,
    allProductPage: new AllProductPage
}