import login from "../pageobjects/loginpage.po"



describe('verify login functionaity', () => {
    it('loginwith valid creds', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(login.UserNameInput()).type('Admin')
      cy.get(login.passwordInput()).type('admin123')
      cy.get(login.loginButton()).click()
      cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
     
    })
    it('verify login functionality with valid user name and invalid password',()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(login.UserNameInput()).type('Admin')
      cy.get(login.passwordInput()).type('admin1234')
      cy.get(login.loginButton()).click()
      cy.contains(login.loginErrorMessage()).should('be.visible')

    })
    it('verify login functionality with invalid user name and valid password',()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(login.UserNameInput()).type('Adminn')
      cy.get(login.passwordInput()).type('admin123')
      cy.get(login.loginButton()).click()
      cy.contains(login.loginErrorMessage()).should('be.visible')


  })
it('verify login functionality with invalid username and invalid password',()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(login.UserNameInput()).type('Adminn')
      cy.get(login.passwordInput()).type('admin1234')
      cy.get(login.loginButton()).click()
      cy.contains(login.loginErrorMessage()).should('be.visible')
})
})