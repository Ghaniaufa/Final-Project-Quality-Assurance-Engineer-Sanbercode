import LoginPage from '../../pages/LoginPage'
import DirectoryPage from '../../pages/Directory'
import data from '../../fixtures/directoryData.json'

const login = new LoginPage()
const directory = new DirectoryPage()

describe('OrangeHRM Directory POM',()=>{

    beforeEach(()=>{

        login.visit()

        login.inputUsername('Admin')
        login.inputPassword('admin123')

        cy.intercept('POST','**/auth/validate').as('login')

        login.clickLogin()

        cy.wait('@login', {timeout:20000})

    })
    //TC001
    it('TC001 Open Directory',()=>{

    cy.intercept('GET','**/directory/**').as('directory')

    directory.menuDirectory()

    cy.wait('@directory',{timeout:20000})

    directory.verifyDirectoryPage()

    })
    //TC002
    it('TC002 Search Employee',()=>{

    directory.menuDirectory()

    cy.intercept('GET','**/directory/*').as('search')

    directory.inputEmployee(data.employeeName)

    directory.clickSearch()

    cy.wait('@search', {timeout:20000})

    directory.verifyResultExist()

    })
    it('TC003 Reset Search', () => {

    directory.menuDirectory()

    directory.inputEmployee(data.employeeName)

    directory.clickSearch()

    cy.intercept(
        'GET',
        '**/api/v2/directory/employees*'
    ).as('search')

    cy.wait('@search', { timeout: 20000 })

    directory.clickReset()

    })
    //TC004
    it('TC004 Search Job Title',()=>{

    directory.menuDirectory()

    cy.intercept('GET','**/api/v2/directory/employees*').as('search')

    directory.selectJobTitle(data.jobTitle)

    directory.clickSearch()

    cy.wait('@search', {timeout:20000})

    directory.verifyResultExist()

    })
    //TC005
    it('TC005 Search Location',()=>{

    cy.intercept('GET','**/api/v2/directory/employees*').as('search')

    directory.menuDirectory()

    directory.selectLocation(data.location)

    directory.clickSearch()

    cy.wait('@search')

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
   it('TC007 Search Employee and Job Title', () => {

    directory.menuDirectory()

    directory.inputEmployee(data.employeeName)

    directory.selectJobTitle(data.jobTitle)

    cy.intercept(
        'GET',
        '**/api/v2/directory/employees*'
    ).as('search')

    directory.clickSearch()

    cy.wait('@search', { timeout: 20000 })

    directory.verifyResultExist()

})
    //TC008
    it('TC008 Verify Directory Page',()=>{

    cy.intercept('GET','**/directory/**').as('directory')

    directory.menuDirectory()

    cy.wait('@directory')

    directory.verifyDirectoryPage()

    })
})