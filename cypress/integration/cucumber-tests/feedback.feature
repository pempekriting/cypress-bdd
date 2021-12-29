Feature: Send a Feedback

    As a user
    I want to send a feedback to the bank

    Background: Background name
    Given I open feedback page

    Scenario: Send valid feedback
     When I fill the feedback form
     And I click on send message button
     Then I see "/sendFeedback" in the url