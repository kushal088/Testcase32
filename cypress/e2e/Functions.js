export class Functions{

    login(username,password,website){
    cy.visit(website)
    cy.get('[data-cy="email"]').type(username)
    cy.get('[data-cy="password"]').type(password)
    cy.get('[data-cy="submit"]').click()
    cy.get('.text-base').click()
    cy.wait(2000)
    }

    create_account(){

        cy.get('.shrink-0 > :nth-child(1) > .text-base').should('contain','Create Account').click()
        cy.get('.items-center.gap-2 > .text-h5').should('contain','Create Account')
        cy.get('[placeholder="Enter account name"]').type('eBay')     
        cy.get('[placeholder="Separate your industries with commas"]').type('Software')
        cy.get('[placeholder="Enter your Tags"]').type('Saas')     
        cy.get(':nth-child(5) > :nth-child(1) > label').should('contain','Account Logo')
        cy.get('.mt-6').should('contain','Main Contact')
        cy.get('[placeholder="Enter contact name"]').type('arjuna anilkumar')      
        cy.get('[placeholder="Enter role"]').type('Cypress test')    
        cy.get('[placeholder="Enter number phone"]').type('123456789')
        cy.get('[placeholder="Enter email address"]').type('arjuna.kumar@synpro.com')
        cy.get('.justify-end > .flex > .text-base').click()
        cy.wait(3000)
    }

    create_engagement(){

        cy.get('.shrink-0 > :nth-child(2)').contains('Create Engagement').click()
        cy.get(':nth-child(1) > :nth-child(2) > .p-4').contains('Create from scratch').click()
        cy.wait(1000)
        cy.get('[placeholder="Enter engagement name"]').clear().type('Cypress test from scratch')
        cy.get('[placeholder="Search for a customer"]').type('eBay')
        cy.get('[class="rounded mt-2 absolute z-10 bg-white drop-shadow-hard w-full h-auto max-h-[200px] overflow-y-auto tt-scrollbar"]')
          .find('[class="text-tt-primary hover:bg-tt-primary-t8 cursor-pointer bg-tt-neutral-white"]').contains('eBay').eq(0).click()
        cy.get('.w-full.justify-end > .border-transparent').contains('Create Engagement').click()
        cy.wait(3000)
    }
}

