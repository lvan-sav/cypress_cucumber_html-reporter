
const emailInput = '#email'
const passwordInput = '#password'
const nameInput = '#full_name'
const termsBox = '#terms_and_conditions'
const subscribeBox = '#subscription_opt_in'
const submitBtn = '[type="submit"]'
const signUpFormError = '#signup-form_error'

const verifyEmail = {
    title: 'h1',
    text: 'div',
    btn: 'strong'
}
const resentEmailBtn = 'p>button'

class SignUpPage {
    getEmailInput() {
        return cy.get(emailInput, { timeout: 120000 })
    }

    getPasswordInput() {
        return cy.get(passwordInput)
    }

    getNameInput() {
        return cy.get(nameInput)
    }

    getTermsCheckbox() {
        return    cy.get(termsBox)
                    .parent()
    }

    getSubscribeCheckbox() {
        return    cy.get(subscribeBox)
                    .parent()
    }

    getSubmitBtn() {
        return cy.get(submitBtn)
    }

    getSignUpFormError() {
        return cy.get(signUpFormError)
    }

    signUpByAllFields(email, name, password) {
        
        this.getEmailInput().type(email)
        this.getNameInput().type(name)
        this.getPasswordInput().type(password)
        this.getTermsCheckbox().click()
        this.getSubscribeCheckbox().click()
        this.getSubmitBtn().click()
    }
}

class VerifyEmailPage {
    
    getVerifyEmail() {
        return cy.get(verifyEmail.title)
                .siblings(verifyEmail.text)
    }

    getResentEmailBtn() {
        return cy.get(resentEmailBtn)
    }
}

module.exports = {
    SignUpPage: SignUpPage,
    signUpPage: new SignUpPage,
    VerifyEmailPage: VerifyEmailPage,
    verifyEmailPage: new VerifyEmailPage
}