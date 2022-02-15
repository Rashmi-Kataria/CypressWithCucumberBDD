///<reference types="cypress"/>
class Loginpageaction {

    getUserLogin(){
        return cy.get('#txtUsername').type('Admin')      
    }
    getUserName() {
        return cy.get('#txtUsername').type('Admin')
    }
    getPassword() {
        return cy.get('#txtPassword').type("admin123")
    }
    getUrl() {
        return cy.visit('https://opensource-demo.orangehrmlive.com/')
    }
    clickLoginButton() {
        return cy.get('input[type="submit"]').first().click()
    }
    verifyingWelcomeUser() {
        return cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')
    }
    clickAdmin() {
        return cy.xpath('//*[@id="menu_admin_viewAdminModule"]/b').should('have.text', 'Admin').trigger('mousedown').click()
    }

    clickSearch() {
        return cy.get('#searchBtn').click()
    }
    selectUserRole() {
        return cy.get('select[name="searchSystemUser[userType]"]').select('ESS')
    }
    selectStatus() {
        return cy.get('select[name="searchSystemUser[status]"]').select('Enabled')
    }
    verifySearchUser() {
        return cy.url().should('include', 'viewSystemUsers')
    }

}
export default Loginpageaction;