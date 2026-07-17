class DirectoryPage {

    menuDirectory() {
        cy.contains('Directory').click()

        cy.url({ timeout: 20000 }).should('include', '/directory')

        cy.get('input[placeholder*="Type for hints"]', {
            timeout: 20000
        }).should('be.visible')
    }

    verifyDirectoryPage() {
        cy.url().should('include', '/directory')
    }

    inputEmployee(name) {
        cy.get('input[placeholder*="Type for hints"]')
            .should('be.visible')
            .clear()
            .type(name)
    }

    selectJobTitle(title) {
        cy.get('.oxd-select-text').eq(0).click()
        cy.contains('.oxd-select-option', title).click()
    }

    selectLocation(location) {
        cy.get('.oxd-select-text').eq(1).click()
        cy.contains('.oxd-select-option', location).click()
    }

    clickSearch() {
        cy.contains('button', 'Search')
            .should('be.visible')
            .click()
    }

    clickReset() {
        cy.contains('button', 'Reset')
            .should('be.visible')
            .click()
    }

    verifyResultExist() {
        cy.get('.oxd-sheet', {
            timeout: 20000
        }).should('be.visible')
    }

    verifyNoRecord() {
        cy.contains('No Records Found', {
            timeout: 20000
        }).should('be.visible')
    }

}

export default DirectoryPage