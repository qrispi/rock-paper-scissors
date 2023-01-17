var currentGame = new Game({name: 'David Wallace aka the Human Player', token: 'assets/david-wallace.png', wins: 0}, {name: 'Robert California aka the Computer', token: 'assets/robert-california.png', wins: 0})

var humanInfo = document.getElementById('human')
var humanWinCount = document.getElementById('human-win-count')
var computerInfo = document.getElementById('computer')
var computerWinCount = document.getElementById('computer-win-count')
var bullpenRules = document.getElementById('bullpen-rules')
var annexRules = document.getElementById('annex-rules')
var bullpenFighters = document.querySelector('.bullpen-fighters')
var annexFighters = document.querySelector('.annex-fighters')
var chooseText = document.getElementById('choose-text')
var winMessage = document.querySelector('.win-message')
var startButton = document.getElementById('start-button')
var welcomeMsg = document.querySelector('.welcome-msg')
var logo = document.querySelector('.logo')
var computerChat = document.querySelector('.computer-chat')
var changeGameButton = document.getElementById('change-game-button')

startButton.addEventListener('click', removeWelcomeMsg)
bullpenRules.addEventListener('click', startBullpenGame)
annexRules.addEventListener('click', startAnnexGame)
bullpenFighters.addEventListener('click', chooseFighter)
annexFighters.addEventListener('click', chooseFighter)
changeGameButton.addEventListener('click', switchGames)

function removeWelcomeMsg() {
    hide(welcomeMsg)
    show(logo)
    showMainScreen()
}

function showMainScreen() {
    updatePlayerInfo()
    show(bullpenRules)
    show(annexRules)
    addHover(bullpenRules)
    addHover(annexRules)
}

function updatePlayerInfo() {
    humanWinCount.innerText = `Wins: ${currentGame.human.wins}`
    computerWinCount.innerText = `Wins: ${currentGame.computer.wins}`
}

function startBullpenGame() {
    hide(annexRules)
    show(bullpenFighters)
    show(chooseText)
    removeHover(bullpenRules)
    currentGame.fighterQuantity = 3
}

function startAnnexGame() {
    hide(bullpenRules)
    show(annexFighters)
    show(chooseText)
    removeHover(annexRules)
    currentGame.fighterQuantity = 5
}

function switchGames() {
    hide(bullpenFighters)
    hide(annexFighters)
    hide(chooseText)
    showMainScreen()
}

function chooseFighter(event) {
    hide(chooseText)
    if (currentGame.fighterQuantity > 3) {
        hide(annexFighters)
        hide(annexRules)
    } else {
        hide(bullpenFighters)
        hide(bullpenRules)
    }
    currentGame.human.fighter = currentGame.fighters[parseInt(event.target.closest('img').dataset.indexNumber)]
    currentGame.computer.takeTurn(currentGame.fighterQuantity)
    announceWinner()
}

function announceWinner() {
    var result = currentGame.showWinner()
    updatePlayerInfo()
    show(winMessage)
    var winCondition = `This office ain't big enough for two ${currentGame.human.fighter.name}s!`
    if (currentGame.winner) {
        winCondition = createWinCondition()
    }
    winMessage.innerHTML = `
        <h4>${result}</h4>
        <img src="${currentGame.human.fighter.imgSrc}" alt="${currentGame.human.fighter.alt}">
        <img src="${currentGame.computer.fighter.imgSrc}" alt="${currentGame.computer.fighter.alt}">
        <h5>${winCondition}</h5>`
    displayComputerChat(result)
    setTimeout(resetPage, 3000)
    setTimeout(hide, 5000, computerChat)
}

function createWinCondition() {
    var winCondition
    if (currentGame.winner.index === 3 && currentGame.loser.index === 0) {
        winCondition = `${currentGame.winner.name} ${currentGame.winner.winCondition[1]}`
    } else if (currentGame.loser.index > 2) {
        winCondition = `${currentGame.winner.name} ${currentGame.winner.winCondition[1]}`
    } else {
        winCondition = `${currentGame.winner.name} ${currentGame.winner.winCondition[0]}`
    }
    return winCondition
}

function displayComputerChat(gameResult) {
    setTimeout(show, 1500, computerChat)
    if (gameResult === "It's a draw!") {
        computerChat.innerHTML = `
        <p>“Do I look like someone who would waste my own time?”</p>
        <p>– Robert California</p>`
    } else if (gameResult === "WooHoo!! You Win!") {
        computerChat.innerHTML = `
        <p>“There’s something about an underdog that really inspires the unexceptional.”</p>
        <p>– Robert California</p>`
    } else {
        computerChat.innerHTML = `
        <p>“Did you really think you could beat me? I’m the f*cking lizard king.”</p>
        <p>– Robert California</p>`
    }
}

function resetPage() {
    hide(winMessage)
    show(chooseText)
    show(changeGameButton)
    if (currentGame.fighterQuantity > 3) {
        startAnnexGame()
        show(annexRules)
    } else {
        startBullpenGame()
        show(bullpenRules)
    }
    currentGame.resetBoard()
}

function hide(element) {
    element.classList.add('hidden')
}

function show(element) {
    element.classList.remove('hidden')
}

function removeHover(element) {
    element.classList.remove('hover')
}

function addHover(element) {
    element.classList.add('hover')
}