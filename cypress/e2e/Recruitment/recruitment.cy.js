import LoginPage from '../../pages/LoginPage'
import RecruitmentPage from '../../pages/RecruitmentPage'
import data from '../../fixtures/recruitmentData.json'

const login = new LoginPage()
const recruitment = new RecruitmentPage()

describe('OrangeHRM Recruitment POM', () => {

    beforeEach(() => {

        login.visit()

        login.inputUsername('Admin')

        login.inputPassword('admin123')

        cy.intercept('POST', '**/auth/validate')
            .as('login')

        login.clickLogin()

        cy.wait('@login')

        login.verifyDashboard()

    })
    //TC001
    it('TC001 Open Recruitment Page', () => {

    cy.intercept(
        'GET',
        '**/api/v2/recruitment/candidates*'
    ).as('candidate')

    recruitment.menuRecruitment()

    cy.wait('@candidate', {timeout:20000})

    recruitment.verifyRecruitmentPage()

    })
    //TC002
    it('TC002 Search Without Filter', () => {

    recruitment.menuRecruitment()

    cy.intercept(
        'GET',
        '**/api/v2/recruitment/candidates*'
    ).as('search')

    recruitment.clickSearch()

    cy.wait('@search')

    recruitment.verifyTable()

    })
    //TC003
    it('TC003 Reset Search', () => {

    recruitment.menuRecruitment()

    recruitment.inputCandidateName(data.candidate)

    recruitment.clickReset()

    })
})