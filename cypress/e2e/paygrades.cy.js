describe('verify paygrades functionaity', () => {
    it('loginwith valid creds', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[name="username"]').type('Admin')
      cy.get('input[type="password"]').type('admin123')
      cy.get('button[type="submit"]').click()
      cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.contains('Admin').click()
        cy.contains('Job').click()
        cy.contains('Job Titles').click()
        cy.get("Pay Grades").click()
        cy.get('button[type="button"]').eq(2).click()
        cy.get('input[class="oxd-input oxd-input--active"]').first().type('harish')
        
})

})