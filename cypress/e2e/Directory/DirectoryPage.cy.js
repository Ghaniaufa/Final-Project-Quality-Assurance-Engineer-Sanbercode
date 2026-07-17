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

    it('TC001 Open Directory',()=>{

    cy.intercept('GET','**/directory/**').as('directory')

    directory.menuDirectory()

    cy.wait('@directory')

    directory.verifyDirectoryPage()

    })
})