# Feature: I am going to validate the ecommerce home page form
#     Scenario: Enter Form Data with missing username and email
#         # Scenario Outline: Click on form field for name, then email, then something else and the error alerts should appear
#         Given I will navigate to ecommerce web app
#         When I click the name field
#         And I click the email field
#         Then Form field alert containing "Name is required" is displayed
#         And I click the password field
#         Then Form field alert containing "Email is required" is displayed

Feature: I am going to validate the ecommerce home page form
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
            | Name is required  |
            | Email is required |