class Player {
    constructor(playerObject) {
        this.name = playerObject.name
        this.token = playerObject.token
        this.wins = playerObject.wins
        // this.classicPieces = ['rock', 'paper', 'scissors']
        // this.expandedPieces = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    }

    takeTurn(num) {
        if (num) {
            return Math.floor(Math.random() * num)
        } else {
            return 'index number of icon that player clicked'
        }
    }

    // computerRandom(num) {
    //     return Math.floor(Math.random() * num)
    // }
}


// A player.js file that contains a Player class.
// Player methods must include, but are not limited to:
// constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// saveWinsToStorage - only necessary if you choose the localStorage extension
// retrieveWinsFromStorage - only necessary if you choose the localStorage extension
// takeTurn
// A game.js file that contains a Game class.
// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game