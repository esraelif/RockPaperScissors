//& Seçiciler
const yourChoiceDiv = document.getElementById('your-choice')
const pcChoiceDiv = document.getElementById('pc-choice')
const selectionArticle = document.querySelector('.selection')
const messagePar = document.querySelector('.message')
//&Score
const scoreCardSection = document.querySelector('.score-card')
const yourScoreSpan = document.getElementById('your-score')
const pcScoreSpan = document.getElementById('pc-score')
const domTopScore = document.getElementById('top-score')


//& Değişkenler

let userSelection;
let pcRandom;
let pcArr = [];
const userSelectImg = document.createElement('img');
const pcSelectImg = document.createElement('img');
//& Colors
const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

// console.log(selectionArticle)


//& Event listeners

selectionArticle.addEventListener('click', (e) => {
    // console.log(e.target.id)
    userSelection = e.target.id
    // console.log(userSelection)

    if (userSelection) {
        userSelectImg.src = `./img/${userSelection}.png`;
        userSelectImg.id = `you`;
        yourChoiceDiv.appendChild(userSelectImg)
    }
    createPcSelection()


})

//& Functions

const createPcSelection = () => {
    pcArr = ['rock', 'paper', 'scissor', 'rock', 'paper', 'scissor'];
    pcRandom = pcArr[Math.trunc(Math.random() * 6)]
    console.log(pcRandom)
    pcSelectImg.src = `./img/${pcRandom}.png`;
    pcSelectImg.id = `pcs`;
    pcChoiceDiv.appendChild(pcSelectImg)
    calculateResult()
}

const calculateResult = () => {
    if (userSelection == pcRandom) {
        draw()
    } else {
        if (userSelection == 'rock') {
            pcRandom == 'paper' ? youLost(userSelection) : youWin()
        } else if (userSelection == 'paper') {
            pcRandom == 'scissor' ? youLost(userSelection) : youWin()
        } else if (userSelection == 'scissor') {
            pcRandom == 'rock' ? youLost(userSelection) : youWin()
        }

    }

}

const draw = () => {
    messagePar.textContent = "It's a draw"
    messagePar.style.backgroundColor = YELLOW
    scoreCardSection.style.color = YELLOW
}

const youLost = (userSelection) => {
    messagePar.textContent = "Wrong Choice,😓 You Lost"
    messagePar.style.backgroundColor = RED
    scoreCardSection.style.color = RED
    pcScoreSpan.textContent++
    document.getElementById('you').setAttribute('src', './img/rockl.png')

}
const youWin = (userSelection) => {
    messagePar.textContent = "Wrong Choice,😓 You Lost"
    messagePar.style.backgroundColor = RED
    scoreCardSection.style.color = RED
    pcScoreSpan.textContent++
    document.getElementById('you').setAttribute('src', './img/rockl.png')

}
