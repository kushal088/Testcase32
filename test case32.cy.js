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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});