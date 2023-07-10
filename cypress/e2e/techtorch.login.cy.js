beforeEach(function(){



    cy.on("uncaught:exception",(e,runnable) =>{

        console.log("error",e);

        console.log("runnable", runnable);

        return false;
});
})




describe('Test case 1', () => {
    it('User login',() =>{
        cy.visit('https://pre.techtorch.io/')

        cy.get('[data-cy="email"]').type('sudin.jambagi@dynpro.com')
        cy.get('[data-cy="password"]').type('Dynpro@2023')
        cy.get('.text-base').click()
        cy.url().should('contain','https://pre.techtorch.io/tech-torch-qa-ecrqe')
    })
}
)