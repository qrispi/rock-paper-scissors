var currentGame = new Game({name: 'human', token: '&#129503', wins: 0}, {name: 'computer', token: '&#128421', wins: 0})

var bullpenRules = document.getElementById('bullpen-rules')
var annexRules = document.getElementById('annex-rules')

var chooseText = document.getElementById('choose-text')

var bullpenFighters = document.querySelector('.bullpen-fighters')
var annexFighters = document.querySelector('.annex-fighters')

bullpenRules.addEventListener('click', startSimpleGame)
annexRules.addEventListener('click', startHardGame)

function startSimpleGame() {
    hide(annexRules)
    show(bullpenFighters)
    chooseText.innerText = 'Choose Your Fighter!'
    currentGame.fighterQuantity = 3
}

function startHardGame() {
    hide(bullpenRules)
    show(annexFighters)
    chooseText.innerText = 'Choose Your Fighter!'
    currentGame.fighterQuantity = 5
}

function hide(element) {
    element.classList.add('hidden')
}

function show(element) {
    element.classList.remove('hidden')
}