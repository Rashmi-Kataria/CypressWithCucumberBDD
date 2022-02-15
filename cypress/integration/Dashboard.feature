Feature: Testing on Dashboard Orange HRM

        Adding a new User into System Users List
        Scenario: Dashboard user
                Given navigate to login screen
                When  Navigate to System Users
                When  I click on Add button
                Then  I should navigate to Add User Screen

        Scenario: add user
                When I selected User Role
                When I entered employee name
                When I entered user name
                When I chose status
                When I entered password
                When I entered new password
                Then User should get saved