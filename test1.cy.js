///<reference types="cypress"/>
it('goggle search',()  =>{


    cy.visit('https://google.com')

    cy.get('.SDkEP',{timeout:5000}).type('ipl leading run scorer 2023{Enter')
    cy.contains('Images').click()
    
})