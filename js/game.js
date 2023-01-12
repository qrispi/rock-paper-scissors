class Game {
    constructor(firstPlayer, secondPlayer) {
        this.player1 = new Player(firstPlayer)
        this.player2 = new Player(secondPlayer)
        // How do I pass the new players the appropriate parameters? Should I set the player class up to use an object as a parameter?
        // Not sure if I need this:
        // this.classicGame = true
        // this.expandedGame = false

        
        this.expandedGame = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    }

    // Not sure if I will need this either:
    // switchGames() {
    //     this.classicGame = !this.classicGame
    //     this.expandedGame = !this.expandedGame
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