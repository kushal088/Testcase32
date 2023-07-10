const { expect } = require("chai")

it('Assertion Demo',() =>{
    cy.visit('https://example.cypress.io/')
    cy.contains('get').check()

    cy.get('#query-btn')
                   .should('contain','Button')
                   .and ('have.class','query-btn')
                   .and('be.enabled')
                   expect(true).to.be.true
                   assert.equal(4,4,'Equal')
})


