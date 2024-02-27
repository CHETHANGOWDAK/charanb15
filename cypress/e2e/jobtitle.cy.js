import login from "../pageobjects/loginpage.po"
import dashboard from "../pageobjects/dashboard.po"
import job from "../pageobjects/addjobtitle.po"


describe('verify addjobtitle functionality', () => {
    it('verify mandatory fieldf addjob title page', () => {
        
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(login.UserNameInput()).type('Admin')
    cy.get(login.passwordInput()).type('admin123')
    cy.get(login.loginButton()).click()
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.contains(dashboard.AdminMenuItem()).click()
    cy.contains(job.jobSubmenuItem()).click()
    cy.contains(job.addJobTitleSubmenuItem()).click()
    cy.contains(job.AddMenuItem()).click()
    cy.get(job.FirstNameInput()).last().type('tester')
    cy.get(job.LastNameInput()).type('software test engineer')
    cy.get('div[class="oxd-file-button"]').attachFile('ANIL RESUME.pdf')
    cy.get('button[type="submit"]').click()

   cy.contains('Successfully Saved').should('be.visible')

})
    it('verify mandatory fieldf addjob title page', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(login.UserNameInput()).type('Admin')
        cy.get(login.passwordInput()).type('admin123')
        cy.get(login.loginButton()).click()
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.contains(dashboard.AdminMenuItem()).click()
        cy.contains(job.jobSubmenuItem()).click()
        cy.contains(job.addJobTitleSubmenuItem()).click()
        cy.contains(job.AddMenuItem()).click()
    
        let r = (Math.random() + 1).toString(36).substring(7)
        cy.get(job.FirstNameInput()).last().type('tester1'+r)
        cy.get(job.LastNameInput()).type('software test engineer')
        cy.get('div[class="oxd-file-button"]').attachFile('ANIL RESUME.pdf')
        cy.get('button[type="submit"]').click()
        cy.contains('Successfully Saved').should('be.visible')
    

    })

    it('verify mandatory fieldf addjob title page', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(login.UserNameInput()).type('Admin')
        cy.get(login.passwordInput()).type('admin123')
        cy.get(login.loginButton()).click()
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.contains(dashboard.AdminMenuItem()).click()
        cy.contains(job.jobSubmenuItem()).click()
        cy.contains(job.addJobTitleSubmenuItem()).click()
        cy.contains(job.AddMenuItem()).click()    
        cy.get(job.FirstNameInput()).last().type(' hjhjhkjhjkhjkhjkhkjkhjhjhkhkjhjhjkhjkhjhjkhkjhkjhkjhkjhkjhkjhkjhjhjhjhjkhkjhjkhjhjhjhjjhjkjhkjhkjhkjhkjhkjhkjhjkhkjhjhkjhjh')
        cy.contains("Should not exceed 100 characters").should("be.visible")
        
        cy.get(job.LastNameInput()).type('dkfdklfjkjhjkhjhjhhldfhldhfdjlfhdjkhfdjkhfjkdshfjkdhafkjadhsfdkfdklfjkjhjkhjhjhhldfhldhfdjlfhdjkhfdjkhfjkdshfjkdhafkjadhsfkjahfjkdhfjkdhfjkhdjfhjdhaudfdyfdasfhdjhfjdckdjhflkdsfkdjhvjklhvjkkvjdhklhdjvn,zmnvlchvldhsfhdnv,n,mznvzzhcvlhjsndnvm cvjcvhjkhcjvhjdvjkjkjfkjfkjkjahfjkdhfjkdhfjkhdjfhjdhaudfdyfdasfhdjhfjdckdjhflkdsfkdjhvjklhvjkkvjdhklhdjvn,zmnvlchvldhsfhdnv,n,mznvzzhcvlhjsndnvm cvjcvhjkhcjvhjdvjkjkjfkjfkj')
        cy.contains("Should not exceed 400 characters").should("be.visible")

    })

})