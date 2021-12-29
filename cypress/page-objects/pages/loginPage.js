import BasePage from "./BasePage"
import { URL } from "../../config"

const SIGN_IN_BUTTON = '#signin_button'
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const SUBMIT_BUTTON = 'input[name="submit"]'
const ALERT_ERROR = '.alert-error'

class LoginPage extends BasePage {
    static visit() {
        cy.visit(URL)
    }

    static clickSignInButton() {
        cy.get(SIGN_IN_BUTTON).click()
    }

    static fillUsername(name) {
        cy.get(USERNAME_INPUT).type(name)
    }

    static fillPassword(password) {
        cy.get(PASSWORD_INPUT).type(password)
    }

    static submit() {
        cy.get(SUBMIT_BUTTON).click()
    }

    static shouldShowErrorMessage() {
        cy.isVisible(ALERT_ERROR)
        cy.get(ALERT_ERROR).contains('Login and/or password are wrong.')
    }
}

export default LoginPage