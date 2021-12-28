const url = 'http://zero.webappsecurity.com/'
const sign_in_button = '#signin_button'
const username_input = '#user_login'
const password_input = '#user_password'
const submit_button = 'input[name="submit"]'
const alert_error = '.alert-error'

class LoginPage {
    static visit() {
        cy.visit(url)
    }

    static clickSignInButton() {
        cy.get(sign_in_button).click()
    }

    static fillUsername(name) {
        cy.get(username_input).type(name)
    }

    static fillPassword(password) {
        cy.get(password_input).type(password)
    }

    static submit() {
        cy.get(submit_button).click()
    }

    static shouldShowErrorMessage() {
        cy.get(alert_error).contains('Login and/or password are wrong.')
    }
}

export default LoginPage