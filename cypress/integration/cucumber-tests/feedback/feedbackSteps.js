import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from './feedbackPage'

Given('I open feedback page', () => {
    FeedbackPage.visit()
})

When('I fill the feedback form', () => {
    FeedbackPage.fillFeedbackForm()
})

And('I click on send message button', () => {
    FeedbackPage.sendFeedback()
})