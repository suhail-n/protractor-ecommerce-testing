@sanity
Feature: I am going to validate the ecommerce home page form missing email
    # Outline is used with cucumber to parametrize data
    Scenario Outline: Enter Form Data with missing username and email
        Given I will navigate to ecommerce web app
        When I click the name field
        And I click the email field
        And I click the password field
        Then Form field alert containing "<alertMessage>" is displayed

        # Examples uses column "alertMessage" and parametrizes that key with all rows below it
        # requires "Scenario Outline"
        Examples:
            | alertMessage      |
            | Email is required |