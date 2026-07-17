class RecruitmentPage{

candidateName(){

return cy.get('input[placeholder="Type for hints..."]').first()

}

clickSearch(){

cy.contains('Search').click()

}

clickReset(){

cy.contains('Reset').click()

}

clickAdd(){

cy.contains('Add').click()

}

clickCancel(){

cy.contains('Cancel').click()

}

candidateTable(){

return cy.get('.oxd-table')

}

clickFirstCandidate(){

cy.get('.oxd-table-body .oxd-table-card')
.first()
.click()

}

}

export default RecruitmentPage