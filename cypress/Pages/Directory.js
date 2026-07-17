class DirectoryPage {

    menuDirectory(){
        cy.contains('Directory').click()
    }

    verifyDirectoryPage(){
        cy.url().should('include','directory')
        cy.contains('Directory').should('be.visible')
    }

    inputEmployee(name){
        cy.get('input[placeholder="Type for hints..."]')
            .clear()
            .type(name)
    }

    selectJobTitle(title){
        cy.get('.oxd-select-text').eq(0).click()
        cy.contains(title).click()
    }

    selectLocation(location){
        cy.get('.oxd-select-text').eq(1).click()
        cy.contains(location).click()
    }

    clickSearch(){
        cy.contains('button','Search').click()
    }

    clickReset(){
        cy.contains('button','Reset').click()
    }

    verifyResultExist(){
        cy.get('.oxd-sheet')
            .should('be.visible')
    }

    verifyNoRecord(){
        cy.contains('No Records Found')
            .should('be.visible')
    }

}

export default DirectoryPage