class Game {
    constructor(humanPlayer, computerPlayer) {
        this.human = new Player(humanPlayer)
        this.computer = new Player(computerPlayer)
        this.fighters = [
            {imgSrc: "assets/michael.png", alt: "Michael Scott", index: 0, class: "michael"},
            {imgSrc: "assets/dwight.png", alt: "Dwight Schrute", index: 1, class: "dwight"},
            {imgSrc: "assets/jim.png", alt: "Jim Halpert", index: 2, class: "jim"},
            {imgSrc: "assets/toby.png", alt: "Toby Flenderson", index: 3, class: "toby"},
            {imgSrc: "assets/angela.png", alt: "Angela Martin", index: 4, class: "angela"}]
    }

    playGame() {
        var sum = (currentGame.human.fighter.index - currentGame.computer.fighter.index)
        if (sum === 0) {
            return 'draw'
        } else {
            return ((sum > 0 && sum % 2 !== 0) || (sum < 0 && sum % 2 === 0)) 
        }
    }

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