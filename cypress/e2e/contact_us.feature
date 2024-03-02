Feature: Webdriveruniversity - 'Contact us' page

    Scenario: Valid form submission
        Given I am on the 'Contact us' page
        When I type in my first name
        And I type in my last name
        And I type in my email address
        And I type in a comment
        And I submit the form
        Then I should see a success message

    Scenario: Valid form submission - specific inputs
        Given I am on the 'Contact us' page
        When I type in 'Vinicius' as first name
        And I type in 'Ramos' as last name
        And I type in 'viniciusramos@email.com' as email address
        And I type in 'Hello World' and 0 as comment
        And I submit the form
        Then I should see a success message

    Scenario: Invalid form submission
        Given I am on the 'Contact us' page
        When I type in my first name
        And I type in my last name
        # (No email address entered)
        And I type in a comment
        And I submit the form
        Then I should see an invalid email address error message