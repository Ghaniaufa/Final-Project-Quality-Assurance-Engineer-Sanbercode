import LoginPage from '../../pages/LoginPage'
import DirectoryPage from 'E:/File Ghani/Portofolio/QA By SanberCode/Cypress/New folder/cypress/pages/Directory'
import data from 'E:/File Ghani/Portofolio/QA By SanberCode/Cypress/New folder/cypress/fixtures/directoryData.json'

const login = new LoginPage()
const directory = new DirectoryPage()

describe('OrangeHRM Directory POM',()=>{

    beforeEach(()=>{

        login.visit()

        login.inputUsername('Admin')
        login.inputPassword('admin123')

        cy.intercept('POST','**/auth/validate').as('login')

        login.clickLogin()

        cy.wait('@login')

    })
    //TC001
    it('TC001 Open Directory',()=>{

    cy.intercept('GET','**/directory/**').as('directory')

    directory.menuDirectory()

    cy.wait('@directory')

    directory.verifyDirectoryPage()

    })
    //TC002
    it('TC002 Search Employee',()=>{

    directory.menuDirectory()

    cy.intercept('GET','**directory*').as('search')

    directory.inputEmployee(data.employeeName)

    directory.clickSearch()

    cy.wait('@search')

    directory.verifyResultExist()

    })
    //TC003
    it('TC003 Invalid Employee',()=>{

    directory.menuDirectory()

    cy.intercept('GET','**directory*').as('search')

    directory.inputEmployee(data.invalidEmployee)

    directory.clickSearch()

    cy.wait('@search')

    directory.verifyNoRecord()

    })
    //TC004
    it('TC004 Search Job Title',()=>{

    directory.menuDirectory()

    cy.intercept('GET','**directory*').as('search')

    directory.selectJobTitle(data.jobTitle)

    directory.clickSearch()

    cy.wait('@search')

    directory.verifyResultExist()

    })
    //TC005
    it('TC005 Search Location',()=>{

    directory.menuDirectory()

    cy.intercept('GET','**directory*').as('search')

    directory.selectLocation(data.location)

    directory.clickSearch()

    cy.wait('@search')

    directory.verifyResultExist()

    })
    //TC006
    it('TC006 Search Job and Location',()=>{

    directory.menuDirectory()

    cy.intercept('GET','**directory*').as('search')

    directory.selectJobTitle(data.jobTitle)

    directory.selectLocation(data.location)

    directory.clickSearch()

    cy.wait('@search')

    directory.verifyResultExist()

    })
    //TC007
    it('TC007 Reset Search',()=>{

    directory.menuDirectory()

    directory.inputEmployee(data.employeeName)

    directory.clickReset()

    cy.get('input[placeholder="Type for hints..."]')
      .should('have.value','')

    })
})