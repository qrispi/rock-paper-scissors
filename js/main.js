var currentGame = new Game({name: 'human', token: '&#129503', wins: 0}, {name: 'computer', token: '&#128421', wins: 0})

var bullpenRules = document.getElementById('bullpen-rules')
var annexRules = document.getElementById('annex-rules')
var miniBullpenRules = document.querySelector('.mini-bullpen-rules')
var miniAnnexRules = document.querySelector('.mini-annex-rules')

var chooseText = document.getElementById('choose-text')
var winMessage = document.querySelector('.win-message')

var bullpenFighters = document.querySelector('.bullpen-fighters')
var annexFighters = document.querySelector('.annex-fighters')

// var michael = document.querySelector('.michael')
// var jim = document.querySelector('.jim')
// var dwight = document.querySelector('.dwight')
// var toby = document.querySelector('.toby')
// var angela = document.querySelector('.angela')

bullpenRules.addEventListener('click', startSimpleGame)
annexRules.addEventListener('click', startHardGame)

bullpenFighters.addEventListener('click', chooseFighter)
annexFighters.addEventListener('click', chooseFighter)

// michael.addEventListener('click', chooseFighter)
// jim.addEventListener('click', chooseFighter)
// dwight.addEventListener('click', chooseFighter)
// toby.addEventListener('click', chooseFighter)
// angela.addEventListener('click', chooseFighter)

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

function chooseFighter(event) {
    hide(chooseText)
    if (currentGame.fighterQuantity > 3) {
        hide(annexFighters)
        hide(annexRules)
        show(miniAnnexRules)
    } else {
        hide(bullpenFighters)
        hide(bullpenRules)
        show(miniBullpenRules)
    }
    currentGame.human.fighter = currentGame.fighters[parseInt(event.target.closest('img').dataset.indexNumber)]
    currentGame.computer.takeTurn(currentGame.fighterQuantity)

    console.log(currentGame.showWinner())
    // announceWinner()
}

function announceWinner() {
    show(winMessage)
    winMessage.innerHTML = `
        <h4>WooHoo! You Win!</h4>
        <h5>Jim pranks Dwight</h5>
        <img src="assets/jim.png" alt="Jim Halpert head icon" data-index-number="2">
        <img src="assets/dwight.png" alt="Dwight Schrute head icon" data-index-number="1"></img>`
    
}

function hide(element) {
    element.classList.add('hidden')
}

function show(element) {
    element.classList.remove('hidden')
}