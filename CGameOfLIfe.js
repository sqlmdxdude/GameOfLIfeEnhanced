// Game of life enhanced by Robert Attaway
//
// Purpose: Conway's Game of life was interesting but not robust. So I decided I wanted
//          to create a more interesting version that would allow the game to use some
//          principles of evolution to allow for more dynamic results
//
//          Instead of just implementing the basic rules the follwing extensions will apply
//          1. Cells will have additional properties
//          2. A random function will determine if a cell can evolve
//          3. There will be various mutations that the cell can inherit
//

function ExtendedGameOfLife()
{
    this.displayReference = null;
    this.displayState = "initial";
    this.neighbors = [];
    this.generation = -1;
    this.evolutionaryTraits = [];
    this.lifeExpectancy = -1;
    // These are Conway's parameters. We are going to allow them to be dynamically
    // modified if there is an evolutionary trait that allows for modification
    this.minNeighbors = 2;
    this.maxNeighbors = 3;
}
ExtendedGameOfLife.prototype={
    constructor: ExtendedGameOfLife,
    _displayFunction: null,
    displayFunction: function(funcPointer){
        _displayFunction = funcPointer;
    }
}