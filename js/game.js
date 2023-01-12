class Game {
    constructor(humanPlayer, computerPlayer) {
        this.human = new Player(humanPlayer)
        this.computer = new Player(computerPlayer)
        this.gamePieces = 3
        // How do I pass the new players the appropriate parameters? Should I set the player class up to use an object as a parameter?
        // Not sure if I need this:
        // this.classicGame = true
        // this.expandedGame = false

        // this.classicPieces = ['rock', 'paper', 'scissors']
        // this.expandedPieces = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    }

    // Not sure if I will need this either:
    // switchGames() {
    //     this.classicGame = !this.classicGame
    //     this.expandedGame = !this.expandedGame
    // }
    switchGames() {
        if (this.gamePieces === 3) {
            this.gamePieces = 5
        } else {
            this.gamePieces = 3
        }
    }

    // I don't think I even need to keep track of what game is being played in the class, my method doesn't give a shit what the numbers are
    // I guess I might need it to tell the DOM which icons to display
    playGame() {
        // function fight(num) {
        var playerChoice = this.human.takeTurn()
        var computerChoice = this.computer.takeTurn(this.gamePieces)
        var sum = (playerChoice - computerChoice)
        if (sum === 0) {
            return 'draw'
        } else {
            return ((sum > 0 && sum % 2 === 0) || (sum < 0 && sum % 2 !== 0)) 
        } 
    }

    // This should go in main.js to manipulate the DOM
    showWinner() {
        if (this.playGame() === 'draw') {
            return "It's a draw"
        }
        if (!this.playGame()) {
            return "Computer Wins!"
        }
        if (this.playGame()) {
            return "Human Wins!"
        }
    }

    // Not sure if this will work as intended
    resetBoard() {
        return new Game(this.human, this.computer)
    }
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