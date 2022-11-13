const { MainPage } = require('./main.page')

//locators
const readCustStoriesLink = 'main [href*="/customer-stories"]'

class CustomerStoriesPage extends MainPage {

    getReadCustomerStoriesLink() {
        return cy.get(readCustStoriesLink)
    }


}

module.exports = {
    CustomerStoriesPage: CustomerStoriesPage,
    customerStoriesPage: new CustomerStoriesPage
}