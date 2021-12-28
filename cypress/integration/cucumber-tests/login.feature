Feature: Login to Application

    As a valid user
    I want to log in into Applicaiton

    Background: Background name
    Given I open login page

    Scenario: Valid login
     When I fill username with "username"
     And I fill password with "password"
     And I click on submit login
     Then I should see homepage
     And I see "/account-summary" in the url

    ##@focus -- if you want run only this scenario
     Scenario: Invalid login
     When I fill username with "invalid username"
     And I fill password with "invalid password"
     And I click on submit login
     Then I should see error message