var currentGame = new Game({name: 'Human', token: '&#129503', wins: 0}, {name: 'Computer', token: '&#128421', wins: 0})

var humanInfo = document.getElementById('human')

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
        // show(miniAnnexRules)
    } else {
        hide(bullpenFighters)
        hide(bullpenRules)
        // show(miniBullpenRules)
    }
    currentGame.human.fighter = currentGame.fighters[parseInt(event.target.closest('img').dataset.indexNumber)]
    currentGame.computer.takeTurn(currentGame.fighterQuantity)
    announceWinner()
    
}

function announceWinner() {
    var result = currentGame.showWinner()
    show(winMessage)
    // Need to fix error of wrong win message displaying when one of the annex characters is used
    var winCondition = `This office ain't big enough for two ${currentGame.human.fighter.name}s!`
    if (currentGame.fighterQuantity > 3 && currentGame.winner) {
        winCondition = `${currentGame.winner.name} ${currentGame.winner.winCondition[1]}`
    } else if (currentGame.winner) {
        winCondition = `${currentGame.winner.name} ${currentGame.winner.winCondition[0]}`
    }
    winMessage.innerHTML = `
        <h4>${result}</h4>
        <img src="${currentGame.human.fighter.imgSrc}" alt="${currentGame.human.fighter.alt}">
        <img src="${currentGame.computer.fighter.imgSrc}" alt="${currentGame.computer.fighter.alt}">
        <h5>${winCondition}</h5>`
    setTimeout(resetPage, 4000)
}

function resetPage() {
    currentGame.resetBoard()
    hide(winMessage)
    show(bullpenRules)
    show(annexRules)
}

function hide(element) {
    element.classList.add('hidden')
}

function show(element) {
    element.classList.remove('hidden')
}