Feature: Webdriveruniversity - Login

    Background: I am on the Contact Us page
        Given I am on the Login page

    Scenario Outline: Form submission
        When I type in '<username>' as username
        And I type in '<password>' as password
        And I click on the Login button with '<status>' credentials
        Then I should see a validation alert

        Examples:
            | username  | password      | status  |
            | webdriver | webdriver123  | valid   |
            | webdriver | wrongpassword | invalid |