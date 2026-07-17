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
    it('TC001 Open Recruitment Page', () => {

    cy.intercept(
        'GET',
        '**/api/v2/recruitment/candidates*'
    ).as('candidate')

    recruitment.menuRecruitment()

    cy.wait('@candidate')

    recruitment.verifyRecruitmentPage()

    })
})