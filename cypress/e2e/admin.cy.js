import login from "../pageobjects/loginpage.po"

describe('verify admin module', () => {
    it('verify user management', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
    cy.get(login.UserNameInput()).type('Admin')
    cy.get(login.passwordInput()).type('admin123')
    cy.get(login.loginButton()).click()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    cy.contains().click()
    cy.contains().click()
    cy.contains('Users').click()
    cy.get().last().type("Odis.Adalwin")
    cy.get('i[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').first().click()
    cy.contains('ESS').first().click()
    cy.get('input[placeholder="Type for hints..."]').type("Bobfef Testerfrffer")
    cy.get('i[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').last().click()
    cy.contains('Disabled').first().click()
    cy.get('button[type="submit"]').click()
    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    cy.get('div[class="oxd-select-text-input"]').first().click()
    cy.contains('ESS').eq(0).click()
    cy.get('input[placeholder="Type for hints..."]').type('chethan')
    cy.get('i[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').last().click()
    cy.contains('Disabled').click()
    cy.get('input[class="oxd-input oxd-input--active oxd-input--error"]').type('admin')
    cy.get('input[type="password"]').first().type('admin123')
    cy.get('input[type="password"]').last().type('admin123')
    cy.get('button[type="submit"]').click()
    

})
    })