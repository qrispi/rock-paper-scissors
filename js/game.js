class Game {
    constructor(humanPlayer, computerPlayer) {
        this.human = new Player(humanPlayer)
        this.computer = new Player(computerPlayer)
        this.fighters = [
            {imgSrc: "assets/michael.png", alt: "Michael Scott", index: 0, name: "Michael", winCondition: ["embarrases Jim", "calms Angela"]},
            {imgSrc: "assets/dwight.png", alt: "Dwight Schrute", index: 1, name: "Dwight", winCondition: ["wrestles Michael", "intimidates Toby"]},
            {imgSrc: "assets/jim.png", alt: "Jim Halpert", index: 2, name: "Jim", winCondition: ["pranks Dwight", "throws/exposes Angela"]},
            {imgSrc: "assets/toby.png", alt: "Toby Flenderson", index: 3, name: "Toby", winCondition: ["bores Jim", "uses HR on Michael"]},
            {imgSrc: "assets/angela.png", alt: "Angela Martin", index: 4, name: "Angela", winCondition: ["seduces Dwight", "insults Toby"]}]
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
            return "It's a draw!"
        }
        if (!outcome) {
            this.computer.wins++
            this.winner = this.computer.fighter
            // this.loser = this.human.fighter
            return "Better Luck Next Time... Computer Wins!"
        }
        if (outcome) {
            this.human.wins++
            this.winner = this.human.fighter
            // this.loser = this.computer.fighter
            return "WooHoo!! You Win!"
        }
    }

    // Seems to work as intended, product of this method will need to be stored in a global var of currentGame
    resetBoard() {
        currentGame = new Game(this.human, this.computer)
    }
}