class Game {
    constructor(humanPlayer, computerPlayer) {
        this.human = new Player(humanPlayer)
        this.computer = new Player(computerPlayer)
        // this.pieceQuantity = 3
        // This should hold all the fighter images and use this to display them accordingly, maybe set them up as objects with name, rule and img url
        this.gamePieces = ['rock', 'paper', 'scissors', 'spock', 'lizard']
    }

    // Once connected to DOM, will just take in a parameter of whats clicked and assign pieceQuantity accordingly
    // switchGames() {
    //     if (this.pieceQuantity === 3) {
    //         this.pieceQuantity = 5
    //     } else {
    //         this.pieceQuantity = 3
    //     }
    // }

    playGame() {
        // unnecessary console logs and vars for clarity        
        var playerChoice = this.human.takeTurn()
        console.log('human :', this.gamePieces[playerChoice])
        var computerChoice = this.computer.takeTurn(this.pieceQuantity)
        console.log('computer :', this.gamePieces[computerChoice])
        var sum = (playerChoice - computerChoice)

        // Should be triggered by player clicking their fighter icon and pass that in as a parameter to this.human.takeTurn()
        // Once connected to the DOM, this will assign var outcome to the product of the conditional and use that to call the addWin() method to the right player and call the right DOM manipulator functions to change HTML

        // var sum = (this.human.takeTurn() - this.computer.takeTurn(this.pieceQuantity))
        if (sum === 0) {
            return 'draw'
        } else {
            return ((sum > 0 && sum % 2 !== 0) || (sum < 0 && sum % 2 === 0)) 
        }
    }

    // This will be totally unneccessary once DOM is connected
    showWinner() {
        var outcome = this.playGame()
        if (outcome === 'draw') {
            return "It's a draw"
        }
        if (!outcome) {
            this.computer.wins++
            return "Computer Wins!"
        }
        if (outcome) {
            this.human.wins++
            return "Human Wins!"
        }
    }

    // Seems to work as intended, product of this method will need to be stored in a global var of currentGame
    resetBoard() {
        return new Game(this.human, this.computer)
    }
}