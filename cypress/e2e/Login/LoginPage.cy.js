import LoginPage from 'E:/File Ghani/Portofolio/QA By SanberCode/Cypress/New folder/cypress/pages/LoginPage'
import data from 'E:/File Ghani/Portofolio/QA By SanberCode/Cypress/New folder/cypress/fixtures/loginData.json'

const login = new LoginPage()

describe('OrangeHRM Login POM', () => {
    //TC001
    it('TC001 Login Success',()=>{

    cy.intercept('POST','**/auth/validate').as('loginSuccess')

    login.visit()

    login.inputUsername(data.validUser)

    login.inputPassword(data.validPassword)

    login.clickLogin()

    cy.wait('@loginSuccess').its('response.statusCode').should('eq',302)

    login.verifyDashboard()

    })
    //TC002
    it('TC002 Empty Username',()=>{


        login.visit()
        login.inputUsername(data.empty)
        login.inputPassword(data.validPassword)
        login.clickLogin()
        cy.contains('Required').should('be.visible')

    })
    //TC003
    it('TC003 Empty Password',() => {


        login.visit()
        login.inputUsername(data.validUser)
        login.inputPassword(data.empty)
        login.clickLogin()

        cy.contains('Required').should('be.visible')
    })
    //TC004
    it('TC004 Empty Username and Password',() => {
        
        login.visit()
        login.inputUsername(data.empty)
        login.inputPassword(data.empty)
        login.clickLogin()


        cy.contains('Required').should('be.visible')
    })
    //TC005
    it('TC005 Invalid Username', () => {

    cy.intercept('POST', '**/auth/validate').as('invalidLogin')

    login.visit()
    login.inputUsername(data.wrongUser)
    login.inputPassword(data.validPassword)
    login.clickLogin()

    cy.wait('@invalidLogin').then((interception) => {
        expect(interception.response.statusCode).to.eq(302)
    })

    login.verifyInvalidCredential()

})
    //TC006
  it('TC006 Invalid Password', () => {

    cy.intercept('POST', '**/auth/validate').as('invalidLogin')

    login.visit()
    login.inputUsername(data.validUser)
    login.inputPassword(data.wrongPassword)
    login.clickLogin()

    cy.wait('@invalidLogin').then((interception) => {
        expect(interception.response.statusCode).to.eq(302)
    })

    login.verifyInvalidCredential()

    })
    //TC007
    it('TC007 SQL Injection',()=>{

    login.visit()

    login.inputUsername(data.sqlInjection)
    login.inputPassword(data.sqlInjection)
    login.clickLogin()
    login.verifyInvalidCredential()

    })
    //TC008
    it('TC008 Username Space', () => {

    login.visit()

    login.inputUsername(' Admin')
    login.inputPassword(data.validPassword)

    login.clickLogin()

    cy.contains('Invalid credentials').should('be.visible')

    cy.url().should('include','/auth/login')

})

})
