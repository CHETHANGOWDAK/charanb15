describe('verify addjobtitle module', () => {
    it('verify mandatory fieldf addjob title page', () => {
        
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[type="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.contains('Admin').click()
    cy.contains('Job').click()
    cy.contains('Job Titles').click()
    cy.contains(' Add ').click()
    cy.get('input[class="oxd-input oxd-input--active"]').last().type('tester1')
    cy.get('textarea[placeholder="Type description here"]').type('software test engineer')
    cy.wait(3000)
    cy.get('input[type="file"]').attachFile('ANIL RESUME.pdf')
    cy.get('button[type="submit"]').click()

   cy.contains('Sucessfylly Saved').should('be.visible')
    

    })
})