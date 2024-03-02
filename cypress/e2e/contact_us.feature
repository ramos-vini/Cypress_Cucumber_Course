Feature: Webdriveruniversity - 'Contact us' page

    Feature Description
    Scenario: Submit valid form
        Given I am on the 'Contact us' page
        When I type in my first name
        And I type in my last name
        And I type in my email address
        And I type in a comment
        And I submit the form
        Then I should see the message 'Thank You for your Message!'