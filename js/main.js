var currentGame = new Game({name: 'human', token: '&#129503', wins: 0}, {name: 'computer', token: '&#128421', wins: 0})

var bullpenRules = document.getElementById('#bullpen-rules')
var annexRules = document.getElementById('#annex-rules')

bullpenRules.addEventListener('click', startSimpleGame)
annexRules.addEventListener('click', startHardGame)

function startSimpleGame() {

}

function startHardGame() {

}

function hide(element) {
    element.classList.add('hidden')
}

function show(element) {
    element.classList.remove('hidden')
}