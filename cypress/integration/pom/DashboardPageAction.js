
class DashboardPageAction {

    clickAddbutton() {
        return cy.get('input[name="btnAdd"]').click()
    }
    verifyaddUserScreen(){
        return cy.url().should('include','saveSystemUser')
    }
    addUserRole(){
        return cy.get('#systemUser_userType').select('ESS')
    }
    addEmployeeName(){
        return cy.get('#systemUser_employeeName_empName').type('Garry White')
    }
    addUserName(){
        return cy.get('#systemUser_userName').type('Rashmi New')
    }
    chooseStatus(){
        return cy.get('#systemUser_status').select('Enabled')
    }
    typePassword(){
        return cy.get('input[type=password]').first().type('Rashmi@123')
    }
    typeConfirmPassword(){
        return cy.get('#systemUser_confirmPassword').type('Rashmi@123')
    }
    clickButtonSave(){
        return cy.get('.addbutton').click()
    }

}
export default DashboardPageAction;