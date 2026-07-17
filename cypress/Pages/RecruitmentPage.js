class RecruitmentPage {

    menuRecruitment() {
        cy.contains('Recruitment', { timeout: 20000 })
            .should('be.visible')
            .click()

        cy.url().should('include', 'recruitment')
    }

    verifyRecruitmentPage() {
        cy.url().should('include', 'recruitment')

        cy.contains('Candidates')
            .should('be.visible')
    }

    inputCandidateName(name) {
        cy.get('input[placeholder="Type for hints..."]')
            .first()
            .clear()
            .type(name)
    }

    clickSearch() {
        cy.contains('button', 'Search').click()
    }

    clickReset() {
        cy.contains('button', 'Reset').click()
    }

    verifyTable() {
        cy.get('.oxd-table')
            .should('be.visible')
    }

    verifySearchButton() {
        cy.contains('button', 'Search')
            .should('be.visible')
            .and('be.enabled')
    }

    verifyResetButton() {
        cy.contains('button', 'Reset')
            .should('be.visible')
            .and('be.enabled')
    }

}

export default RecruitmentPage