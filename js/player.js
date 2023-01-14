class Player {
    constructor(playerObject) {
        this.name = playerObject.name
        this.token = playerObject.token
        this.wins = playerObject.wins
    }

    takeTurn(num) {
            return Math.floor(Math.random() * num)
        
        // else {
        //     // 'num = index number of icon that player clicked'
        //     return num || 0
        // }
    }

    addWin() {
        this.wins++
    }
}