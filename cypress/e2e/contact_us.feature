Feature: Webdriveruniversity - Contact Us page

    Background: I am on the Contact Us page
        Given I am on the Contact Us page

    # Scenario: Valid form submission
    #     When I type in 'Vinicius' as first name
    #     And I type in 'Ramos' as last name
    #     And I type in 'viniciusramos@email.com' as email address
    #     And I type in 'Hello World' as comment
    #     And I submit the form
    #     Then I should see a success message

    # Scenario: Invalid form submission
    #     When I type in 'Vinicius' as first name
    #     And I type in 'Ramos' as last name
    #     # (No email address entered)
    #     And I type in 'Hello World' as comment
    #     And I submit the form
    #     Then I should see an invalid email address error message

    Scenario Outline: Form submission
        When I type in '<firstName>' as first name
        And I type in '<lastName>' as last name
        And I type in '<email>' as email address
        And I type in '<comment>' as comment
        And I submit the form
        Then I should see the message '<message>'

        Examples:
            | firstName | lastName | email                    | comment                      | message                      |
            | Vinicius  | Ramos    | vinicius_ramos@email.com | This is a valid scenario.    | Thank You for your Message!  |
            | Vinicius  | Ramos    | vinicius_ramos           | This is an invalid scenario. | Error: Invalid email address |