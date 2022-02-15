///<reference types="cypress"/>
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPageAction from "../../pom/LoginPageAction";


const loginPage = new LoginPageAction()

beforeEach(function () {
    cy.fixture("Login.json").then(function (value) {
        this.value = value
    })
})

Given('navigate to Login page', function () {
    loginPage.getUrl()
})

When('I type in username and password', () => {
    loginPage.getUserName()
    loginPage.getPassword()
})

When('I click on Sign In button', () => {
    loginPage.clickLoginButton()
})

When('user should be logged in', () => {
    loginPage.verifyingWelcomeUser()
    cy.log('welcome user')
})
When('I click on Admin tab', () => {
    cy.wait(3000)
    loginPage.clickAdmin().then((err) => cy.log(err))
    cy.wait(5000)
})

When('I fill the username & employee name', function () {
    const user = this.value.user_name
    const emp = this.value.emp_name
    cy.Details(user, emp)
})
When('I selected User Role', () => {
    loginPage.selectUserRole()
})
When('I selected Status', () => {
    loginPage.selectStatus()
})
When('I clicked the Search button', () => {
    loginPage.clickSearch()
})
Then('searched user should be displayed', () => {
    loginPage.verifySearchUser()
})

// Then('{string} should be logged in', (content) => {
//     cy.contains(content, { timeout: 10000 }).should('be.visible')
//     cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')
// });
