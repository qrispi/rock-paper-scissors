class Game {
    constructor() {
        this.player1 = new Player()
        this.player2 = new Player()
        // How do I pass the new players the appropriate parameters? Should I set the player class up to use an object as a parameter?
        this.gameType = 'classic'
    }
}