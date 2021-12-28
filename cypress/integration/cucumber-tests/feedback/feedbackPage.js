const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME_INPUT = '#name'
const EMAIL_INPUT = '#email'
const SUBJECT_INPUT = '#subject'
const COMMENT_INPUT = '#comment'
const SEND_MESSAGE_BUTTON = 'input[name="submit"]'

class FeedbackPage {
    static visit() {
        cy.visit(URL)
    }

    static fillFeedbackForm() {
        cy.get(NAME_INPUT).type('Ahmad Zulk')
        cy.get(EMAIL_INPUT).type('ahmad@mailinator.com')
        cy.get(SUBJECT_INPUT).type('Only for testing brow')
        cy.get(COMMENT_INPUT).type('Testing is good for you system')
    }

    static fillName(name) {
        cy.get(NAME_INPUT).type(name)
    }

    static fillEmail(email) {
        cy.get(EMAIL_INPUT).type(email)
    }

    static fillSubject(subject) {
        cy.get(SUBJECT_INPUT).type(subject)
    }

    static fillComment(comment) {
        cy.get(COMMENT_INPUT).type(comment)
    }

    static sendFeedback() {
        cy.get(SEND_MESSAGE_BUTTON).click()
    }

}

export default FeedbackPage