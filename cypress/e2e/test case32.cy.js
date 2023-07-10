
    it('Should successfully publish templates to TechTorch library', function() {
      
       


      cy.visit('https://pre.techtorch.io/')
    cy.get('[data-cy="email"]').type('Kushal.s@dynpro.in')
    cy.get('[data-cy="password"]').type('8MOO&cSkkY96')
    cy.get('[data-cy="submit"]').click()
    cy.get('.text-base').click()
    


    cy.get(':nth-child(5) > .font-normal').click()
    
    cy.wait(2000)
    })

const readline = require('readline');

function Solution(name) {
    this.name = name;
    this.simulation = null;
}

Solution.prototype.getName = function() {
    return this.name;

};

Solution.prototype.addSimulation = function(simulation) {
    this.simulation = simulation;
};

function Simulation() {
    this.title = null;
}

Simulation.prototype.getTitle = function() {
    return this.title;
};

Simulation.prototype.setTitle = function(title) {
    this.title = title;
};

({
    input: process.stdin,
    output: process.stdout
});