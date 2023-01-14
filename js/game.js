class Game {
    constructor(humanPlayer, computerPlayer) {
        this.human = new Player(humanPlayer)
        this.computer = new Player(computerPlayer)
        this.gamePieces = [
            {imgSrc: "assets/michael.png", alt: "Michael Scott", index: 0, class: "michael"},
            {imgSrc: "assets/jim.png", alt: "Jim Halpert", index: 2, class: "jim"},
            {imgSrc: "assets/dwight.png", alt: "Dwight Schrute", index: 1, class: "dwight"},
            {imgSrc: "assets/toby.png", alt: "Toby Flenderson", index: 3, class: "toby"},
            {imgSrc: "assets/angela.png", alt: "Angela Martin", index: 4, class: "angela"}]
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
        currentGame.human.fighter = this.gamePieces[currentGame.human.fighterIndex]
        // console.log('player choice: ', playerChoice)
        // console.log('human: ', this.gamePieces[playerChoice])
        currentGame.computer.fighter = this.gamePieces[currentGame.computer.takeTurn(currentGame.fighterQuantity)]
        // console.log('computer: ', this.gamePieces[computerChoice])
        // var sum = (playerChoice - computerChoice)

        // Should be triggered by player clicking their fighter icon and pass that in as a parameter to this.human.takeTurn()
        // Once connected to the DOM, this will assign var outcome to the product of the conditional and use that to call the addWin() method to the right player and call the right DOM manipulator functions to change HTML

        var sum = (currentGame.human.fighterIndex - currentGame.computer.takeTurn(currentGame.fighterQuantity))
        // console.log(this.human.fighterChoice)

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