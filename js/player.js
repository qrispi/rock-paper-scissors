class Player {
    constructor(playerObject) {
        this.name = playerObject.name
        this.token = playerObject.token
        this.wins = playerObject.wins
    }

    takeTurn(num) {
        this.fighter = currentGame.fighters[Math.floor(Math.random() * num)]
    }

    addWin() {
        this.wins++
    }
}