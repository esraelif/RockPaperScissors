//& Seçiciler
const yourChoiceDiv = document.getElementById('your-choice')
const pcChoiceDiv = document.getElementById('pc-choice')
const selectionArticle = document.querySelector('.selection')

//& Değişkenler

let userSelection;
let pcRandom;
let pcArr = [];
const userSelectImg = document.createElement('img');
const pcSelectImg = document.createElement('img');

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
    }

}
