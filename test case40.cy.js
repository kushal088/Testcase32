describe('Publish Templates', () {
    it('Should successfully publish templates to TechTorch library', () {
      
        cy.visit('https://pre.techtorch.io/')
      cy.get('#username').type('sudin.jambagi@dynpro.com')
      cy.get('#password').type('Dynpro@2023')
      cy.get('#login-button').click()
  
      
      cy.get('#nav-menu').contains('Publish').click()
      cy.contains('Publish Templates').click()
  
      
      cy.get('#template-name').type('New Template')
      cy.get('#template-description').type('template')
      cy.get('#template-type').select('Solution')
      cy.get('#template-file-picker').attachFile('template.xml')
  
      
      cy.get('#publish-button').click()
      cy.get('.success-message').should('contain', 'Template published successfully.')
    })
  })