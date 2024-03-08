Feature: Webdriveruniversity - Login

    Background: I am on the Contact Us page
        Given I am on the Login page

    Scenario Outline: Form submission - Valid & Invalid credentials
        When I type in '<username>' as username
        And I type in '<password>' as password
        And I click on the Login button
        Then I should see a validation alert with '<status>' status

        Examples:
            | username  | password      | status  |
            | webdriver | webdriver123  | valid   |
            | webdriver | wrongpassword | invalid |