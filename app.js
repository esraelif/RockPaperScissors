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

//& Modal

const modalCardSection = document.querySelector('.modal-card');
const finalMessagePar = document.getElementById('final-message');
const playAgainButton = document.getElementById('play-again');


// console.log(selectionArticle)


//& Event listeners

selectionArticle.addEventListener('click', (e) => {
    // console.log(e.target.id)
    userSelection = e.target.id
    // console.log(userSelection)

    if (userSelection && !(pcScoreSpan.textContent === '10' || yourScoreSpan.textContent === '10')) {
        userSelectImg.src = `./img/${userSelection}.png`;
        userSelectImg.id = `you`;
        yourChoiceDiv.appendChild(userSelectImg)
        createPcSelection()
    }


})

playAgainButton.addEventListener('click', () => {
    window.location.reload()
})

//& Functions

const createPcSelection = () => {
    pcArr = ['rock', 'paper', 'scissor', 'rock', 'paper', 'scissor'];
    pcRandom = pcArr[Math.trunc(Math.random() * 6)]
    // pcRandom = 'scissor'
    // console.log(pcRandom)
    pcSelectImg.src = `./img/${pcRandom}.png`;
    pcSelectImg.id = `pcs`;
    pcChoiceDiv.appendChild(pcSelectImg)


    calculateResult()

}

const calculateResult = () => {
    // console.log(userSelection)
    // console.log(pcRandom)


    if (userSelection === pcRandom) {
        draw()
    } else {
        if (userSelection === 'rock') {
            pcRandom === 'paper' ? youLost(userSelection) : youWin(pcRandom)
        } else if (userSelection === 'paper') {
            pcRandom === 'scissor' ? youLost(userSelection) : youWin(pcRandom)
        } else if (userSelection === 'scissor') {
            pcRandom === 'rock' ? youLost(userSelection) : youWin(pcRandom)
        }
    }
    if (pcScoreSpan.textContent === '10' || yourScoreSpan.textContent === '10') {
        openModal()
    }


}


const draw = () => {
    messagePar.textContent = "it's a draw";
    messagePar.style.backgroundColor = YELLOW;
    scoreCardSection.style.color = YELLOW;
}

const youLost = (userSelection) => {
    // console.log(userSelection)
    messagePar.textContent = "You Lost!☹️";
    messagePar.style.backgroundColor = RED;
    scoreCardSection.style.color = RED;
    pcScoreSpan.textContent++
    // console.log(document.getElementById('you').getAttribute('src')) // attribute kontrol
    document.getElementById('you').setAttribute('src', `./img/${userSelection}l.png`)
}

const youWin = (pcRandom) => {
    messagePar.textContent = "You Win😁";
    messagePar.style.backgroundColor = GREEN;
    scoreCardSection.style.color = GREEN;
    yourScoreSpan.textContent++
    document.getElementById('pcs').setAttribute('src', `./img/${pcRandom}l.png`)
}


const openModal = () => {
    modalCardSection.classList.add("show")
    if (yourScoreSpan.textContent === '10') {
        finalMessagePar.textContent = '🎉You Win🎈'
        playAgainButton.style.color = GREEN
        document.querySelector('.modal').style.backgroundColor = GREEN
        updateTopScore()
    }
}

//&Update Top Score

//*İlk başlangıçta localStorage de tutlan skoru yazdır
const storedScore = localStorage.getItem("highScore")
// console.log(storedScore)
const topScore = storedScore ? `10:${storedScore}` : "0:0"

//*İlk açılısta high score varsa yazdır yok ıse 0:0 yazdır
domTopScore.textContent = topScore

const updateTopScore = () => {
    //*Eger highscore yoksa veya oyun sonunda update edilecekse:
    if (!storedScore || storedScore > +pcScoreSpan.textContent) {
        localStorage.setItem("highScore", pcScoreSpan.textContent)
    }

}

//&Local Storage deki verinin kullanıcı onayıyla silinmesi
domTopScore.addEventListener('dblclick', () => {
    if (domTopScore != "0:0") {

        if (confirm("Are you sure that reset the Top Score?")) {
            localStorage.removeItem("highScore")
            domTopScore.textContent = "0:0"
        }
    }
})



































/* let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissor = document.getElementById('scissor')


rock.addEventListener('click', ()=>{
    yourChoiceDiv.innerHTML = `<img src="./assets/rock.png"/>`
})
paper.addEventListener('click', ()=>{
    yourChoiceDiv.innerHTML = `<img src="./assets/paper.png"/>`
})
scissor.addEventListener('click', ()=>{
    yourChoiceDiv.innerHTML = `<img src="./assets/scissor.png"/>`
})
 */
