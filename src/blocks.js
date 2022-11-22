const deckCards = [
    "6буби.png",
    "6буби.png",
    "6вини.png",
    "6вини.png",
    "6черви.png",
    "6черви.png",
    "6крести.png",
    "6крести.png",
    "5.png",
    "5.png",
    "6.png",
    "6.png",
    "8.png",
    "8.png",
    "9.png",
    "9.png",
    "10.png",
    "10.png",
    "11.png",
    "11.png",
    "12.png",
    "12.png",
    "13.png",
    "13.png",
    "14.png",
    "14.png",
    "15.png",
    "15.png",
    "16.png",
    "16.png",
    "17.png",
    "17.png",
    "18.png",
    "18.png",
    "19.png",
    "19.png",
];





function chooseLevelBlock(container) {
    chooseLevelBlockArray = [];
    const chooseLevelDiv = document.createElement('div');
    chooseLevelDiv.classList.add('choose_level-div');
    chooseLevelBlockArray.push(chooseLevelDiv);
    const chooseLevelTitle = document.createElement('p');
    chooseLevelTitle.classList.add('choose_level-title');
    chooseLevelDiv.appendChild(chooseLevelTitle);
    chooseLevelTitle.textContent = 'Выбери сложность';
    const chooseLevelForm = document.createElement('div');
    chooseLevelForm.classList.add('choose_level_form');
    chooseLevelDiv.appendChild(chooseLevelForm);
    const chooseLevelButtonEasy = document.createElement('button');
    chooseLevelButtonEasy.classList.add('choose_level-button_easy', 'level-button');
    chooseLevelButtonEasy.id = 'easyGame';
    chooseLevelForm.appendChild(chooseLevelButtonEasy);
    chooseLevelButtonEasy.textContent = '1';
    const chooseLevelButtonMedium = document.createElement('button');
    chooseLevelButtonMedium.classList.add('choose_level-button_medium', 'level-button');
    chooseLevelButtonMedium.id = 'mediumGame';
    chooseLevelForm.appendChild(chooseLevelButtonMedium);
    chooseLevelButtonMedium.textContent = '2';
    const chooseLevelButtonHard = document.createElement('button');
    chooseLevelButtonHard.classList.add('choose_level-button_hard', 'level-button');
    chooseLevelButtonHard.id = 'hardGame';
    chooseLevelForm.appendChild(chooseLevelButtonHard);
    chooseLevelButtonHard.textContent = '3';
    const chooseLevelButton = document.createElement('button');
    chooseLevelButton.classList.add('choose_level-button');
    chooseLevelDiv.appendChild(chooseLevelButton);
    chooseLevelButton.textContent = 'Старт';

    chooseLevelBlockArray.forEach(element => {
        container.appendChild(element);
    })

    chooseLevelButtonEasy.addEventListener('click', (event) => {
        // window.application.level = 'easy';
        gameMode = "easy";
        chooseLevelButtonEasy.classList.add('active');
    })
    chooseLevelButtonMedium.addEventListener('click', (event) => {
        window.application.level = 'medium';
        gameMode = "medium";
        chooseLevelButtonMedium.classList.add('active');
    })
    chooseLevelButtonHard.addEventListener('click', (event) => {
        window.application.level = 'hard';
        gameMode = "hard";
        chooseLevelButtonHard.classList.add('active');
    })

    chooseLevelButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.application.screens['game'] = gameScreen;
        window.application.renderScreen('game');
        startGame();
    })
    
};

function gameBlock(container) {
    const gameMenu = document.createElement('div');
    gameMenu.classList.add('game_menu');
    const gameTimerMenu = document.createElement('div');
    gameTimerMenu.classList.add('game_timer_menu');
    const gameTimerMin = document.createElement('p');
    gameTimerMin.classList.add('game_time');
    gameTimerMin.textContent = 'min';
    gameTimerMenu.appendChild(gameTimerMin);
    const gameTimerSek = document.createElement('p');
    gameTimerSek.classList.add('game_time');
    gameTimerSek.textContent = 'sek';
    gameTimerMenu.appendChild(gameTimerSek);
    const Timer = document.createElement('span');
    Timer.classList.add('timer');
    Timer.textContent = '00:00';
    gameMenu.appendChild(Timer);
    const gameMenuButton = document.createElement('button');
    gameMenuButton.classList.add('game_button');
    gameMenuButton.textContent = 'Начать заново';
    gameMenu.appendChild(gameMenuButton);
    const deck = document.createElement('ul');
    deck.classList.add('deck');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalcontent = document.createElement('div');
    modalcontent.classList.add('modal-content');
    modal.appendChild(modalcontent);
    const modalimg = document.createElement('img');
    modalimg.classList.add('modal-img');
    modalcontent.appendChild(modalimg);
    const header = document.createElement('h2');
    modalcontent.appendChild(header);
    const title = document.createElement('h3');
    title.textContent = 'Затраченное время:';
    modalcontent.appendChild(title);
    const time = document.createElement('h1');
    time.classList.add('stats');
    modalcontent.appendChild(time);
    const resetButton = document.createElement('button');
    resetButton.classList.add('game_button');
    resetButton.textContent = 'Начать заново';
    modalcontent.appendChild(resetButton);
    resetButton.addEventListener('click', (event) => {
        location.reload ();
    })

    container.appendChild(modal);
    container.appendChild(gameTimerMenu);
    container.appendChild(gameMenu);
    container.appendChild(deck);
    gameMenuButton.addEventListener('click', (event) => {
        location.reload ();
    })
};



let cards = [];
let opened = [];
let matched = [];
let gameMode = "";

const easyGame = document.getElementById("easyGame");
const mediumGame = document.getElementById("mediumGame");
const hardGame = document.getElementById("hardGame");

function shuffle(array) {
let currentIndex = array.length,
    temporaryValue,
    randomIndex;

while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
}
return array;
}


const deck = document.querySelector(".deck");


function startGame() {
const deck = document.querySelector(".deck");
console.log(gameMode, mediumGame);
if (gameMode === "easy") {
    cards = deckCards.slice(0, 6);
    deck.classList.add('easy');
} else if (gameMode === "medium") {
    deck.classList.add("medium");
    cards = deckCards.slice(0, 12);
} else {
    deck.classList.add("hard");
    cards = deckCards.slice(0, 18);
}

const shuffledDeck = shuffle(cards);
for (let i = 0; i < shuffledDeck.length; i++) {
    const divTag = document.createElement("DIV");
    const overflow = document.createElement("DIV");
    overflow.classList.add("overflow");
    deck.appendChild(overflow);
    divTag.classList.add("memory-card");
    divTag.classList.add("flip");
    divTag.setAttribute('data-framework', "src/img/flip/" + shuffledDeck[i])
    setTimeout(function(){
        divTag.classList.remove('flip');
        overflow.remove();
        if (timeStart === false) {
            timeStart = true;
            timer();
          }
        }, 5000)
    const addImage1 = document.createElement("IMG");
    addImage1.classList.add('front-face')
    const addImage2 = document.createElement("IMG");
    addImage2.classList.add('back-face')
    divTag.appendChild(addImage1);
    divTag.appendChild(addImage2);
    addImage2.setAttribute("src", "src/img/Upside.png");
    addImage1.setAttribute("src", "src/img/flip/" + shuffledDeck[i]);
    deck.appendChild(divTag);
}

const timeCounter = document.querySelector(".timer");
let time;
let minutes = 0;
let seconds = 0;
let timeStart = false;

function timer() {
    time = setInterval(function () {
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      timeCounter.innerHTML =
        minutes.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }) +
        ":" +
        seconds.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });
    }, 1000);
  }

let moves = 0;
const card = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
if (lockBoard) return;
if (this === firstCard) return;

this.classList.add('flip');

if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
}

secondCard = this;

checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      return;
    }

    unflipCards();
  }

function disableCards() {
firstCard.removeEventListener('click', flipCard);
secondCard.removeEventListener('click', flipCard);
moves++;
if (gameMode === "easy" && moves === 3 || gameMode === "medium" && moves === 6 || gameMode === "hard" && moves === 9 ){
    wingame()
}

function wingame() {
const modal = document.querySelector(".modal");
const modalcontent = document.querySelector(".modal-content");
const modalimg = document.querySelector(".modal-img");
const header = document.querySelector("h2");
const time = document.querySelector(".stats");

lockBoard = true;
stopTime();
modal.style.display = "block";
modalimg.setAttribute("src", "src/img/win.png");
header.textContent = 'Вы выиграли!';
time.innerHTML = `${minutes}.${seconds}`; 
}

resetBoard();
}
function stopTime() {
clearInterval(time);
}

function unflipCards() {
const modal = document.querySelector(".modal");
const modalcontent = document.querySelector(".modal-content");
const modalimg = document.querySelector(".modal-img");
const header = document.querySelector("h2");
const time = document.querySelector(".stats");

lockBoard = true;
stopTime();
modal.style.display = "block";
modalimg.setAttribute("src", "src/img/lose.png");
header.textContent = 'Вы проиграли!';
time.innerHTML = `${minutes}.${seconds}`;   
// КАК СДЕЛАТЬ чтобы время было 01.02 например? чтобы нолики эти были?
}



function resetBoard() {
[hasFlippedCard, lockBoard] = [false, false];
[firstCard, secondCard] = [null, null];
}

card.forEach(card => card.addEventListener('click', flipCard));
}




  


  
