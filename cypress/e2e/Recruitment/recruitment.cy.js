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
    //TC004
    it('TC004 Verify Candidate Name Input', () => {

    recruitment.menuRecruitment()

    recruitment.inputCandidateName(data.candidate)

    cy.get('input[placeholder="Type for hints..."]')
        .first()
        .should('have.value', data.candidate)

    })
    it('TC005 Verify Search Button', () => {

    recruitment.menuRecruitment()

    cy.intercept(
        'GET',
        '**/api/v2/recruitment/candidates*'
    ).as('search')

    recruitment.verifySearchButton()

    recruitment.clickSearch()

    cy.wait('@search', { timeout: 20000 })

    recruitment.verifyTable()

    })
    //TC006
    it('TC006 Verify Reset Button', () => {

    recruitment.menuRecruitment()

    recruitment.inputCandidateName(data.candidate)

    recruitment.verifyResetButton()

    recruitment.clickReset()

    recruitment.verifyRecruitmentPage()

    })
})