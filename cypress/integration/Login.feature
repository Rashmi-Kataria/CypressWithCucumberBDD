Feature: Orange HRM User


    #I want to Login into Orange HRM

    Scenario: Orange HRM Login

        Given navigate to Login page
        When I type in username and password
        And I click on Sign In button
        And user should be logged in

        #moving to dashboard
        When I click on Admin tab
        When I fill the username & employee name
        When I selected User Role
        When I selected Status
        When I clicked the Search button
        Then searched user should be displayed






