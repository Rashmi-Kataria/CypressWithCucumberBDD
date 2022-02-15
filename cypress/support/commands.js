// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --



Cypress.Commands.add('login', (email, password) => {

    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#txtUsername').type(email)
    cy.get('#txtPassword').type(password)
    cy.get('input[type="submit"]').click()

})
Cypress.Commands.add('Details', (username, employee_name) => {
    cy.get('input[name="searchSystemUser[userName]"]').type(username)
    cy.get('#searchSystemUser_employeeName_empName').type(employee_name)
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
