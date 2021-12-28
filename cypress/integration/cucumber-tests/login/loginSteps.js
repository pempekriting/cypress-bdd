import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open login page', () => {
    LoginPage.visit()
    LoginPage.clickSignInButton()
})

When('I fill username with {string}', username => {
    LoginPage.fillUsername(username)
})

And('I fill password with {string}', password => {
    LoginPage.fillPassword(password)
})

And('I click on submit login', () => {
    LoginPage.submit()
})

Then('I should see homepage', () => {
    cy.get('h2').should('contain', 'Cash Accounts')
})

Then('I should see error message', () => {
    LoginPage.shouldShowErrorMessage()
})