var currentGame = new Game({name: 'David Wallace aka the Human Player', token: 'assets/david-wallace.png', wins: 0}, {name: 'Robert California aka the Computer', token: 'assets/robert-california.png', wins: 0})

var humanInfo = document.getElementById('human')
var computerInfo = document.getElementById('computer')
var bullpenRules = document.getElementById('bullpen-rules')
var annexRules = document.getElementById('annex-rules')
var bullpenFighters = document.querySelector('.bullpen-fighters')
var annexFighters = document.querySelector('.annex-fighters')
var chooseText = document.getElementById('choose-text')
var winMessage = document.querySelector('.win-message')
var changeGameButton

window.addEventListener('load', showMainScreen)
bullpenRules.addEventListener('click', startBullpenGame)
annexRules.addEventListener('click', startAnnexGame)
bullpenFighters.addEventListener('click', chooseFighter)
annexFighters.addEventListener('click', chooseFighter)

function showMainScreen() {
    updatePlayerInfo()
    show(bullpenRules)
    show(annexRules)
    addHover(bullpenRules)
    addHover(annexRules)
}

// This should be re-factored somehow.... no need to generate this every single time. Unless it is dynamic based off user input
function updatePlayerInfo() {
    humanInfo.innerHTML = `
    <img src="${currentGame.human.token}" class="avatar">
    <h3>${currentGame.human.name}</h3>
    <h4>Wins: ${currentGame.human.wins}</h4>
    <button class="hidden" id="change-game-button">Change Game</button>`
    changeGameButton = document.getElementById('change-game-button')
    changeGameButton.addEventListener('click', switchGames)
    computerInfo.innerHTML = `
    <img src="${currentGame.computer.token}" class="avatar">
    <h3>${currentGame.computer.name}</h3>
    <h4>Wins: ${currentGame.computer.wins}</h4>`
}

function startBullpenGame() {
    hide(annexRules)
    show(bullpenFighters)
    removeHover(bullpenRules)
    chooseText.innerText = 'Choose Your Fighter!'
    currentGame.fighterQuantity = 3
}

function startAnnexGame() {
    hide(bullpenRules)
    show(annexFighters)
    removeHover(annexRules)
    chooseText.innerText = 'Choose Your Fighter!'
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
    setTimeout(resetPage, 3000)
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