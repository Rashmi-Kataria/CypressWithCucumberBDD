///<reference types="cypress"/>
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import DashboardPageAction from "../../pom/DashboardPageAction";
import LoginPageAction from "../../pom/LoginPageAction";

const dashboard = new DashboardPageAction();
const login = new LoginPageAction();

beforeEach(function () {
    cy.fixture("Login.json").then(function (values) {
        this.values = values
    })
})

Given('navigate to login screen', function () {
    const email = this.values.email
    const pwd = this.values.Password
    cy.login(email, pwd)

})
When('Navigate to System Users', () => {
    login.clickAdmin()

})

When('I click on Add button', () => {
    dashboard.clickAddbutton()
})
Then('I should navigate to Add User Screen', () => {
    dashboard.verifyaddUserScreen()
})
When('I selected User Role', () => {
    dashboard.addUserRole()
})
When('I entered employee name', () => {
    dashboard.addEmployeeName()
})
When('I entered user name', () => {
    dashboard.addUserName()
})
When('I chose status', () => {
    dashboard.chooseStatus()
})
When('I entered password', () => {
    dashboard.typePassword()
})
When('I entered new password', () => {
    dashboard.typeConfirmPassword()
})
Then('User should get saved', () => {
    dashboard.clickButtonSave()
    dashboard.verifyaddUserScreen()
})
