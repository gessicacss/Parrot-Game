const images = [
    "img/bobrossparrot.gif",
    "img/explodyparrot.gif",
    "img/fiestaparrot.gif",
    "img/metalparrot.gif",
    "img/revertitparrot.gif",
    "img/tripletsparrot.gif",
    "img/unicornparrot.gif"
];
let cardHtml = document.querySelector('div');
let firstCard,
secondCard,
img,
imgTwo,
stopTimer,
revealedCards,
quantityCards;
let limitOfCards = 0;
let countPlayed = 0;
let timer = 0;

function startingGame () {

    quantityCards = Number(prompt(`Quantas cartas quer jogar?`));

    while (quantityCards % 2 !== 0 || quantityCards > 14 || quantityCards < 4) {
        alert (`Quantidade inválida. Por favor, escolha um número par entre 4 a 14`)
        quantityCards = prompt(`Quantas cartas quer jogar?`);
    }

    const newDeck = [];
    let halfCards = quantityCards / 2;
    for (let j = 0; j < halfCards; j++) {
        newDeck.push(images[j]);
        newDeck.push(images[j]);
    }

    newDeck.sort(shuffle);

    for (let i = 0; i < quantityCards; i++) {
        cardHtml.innerHTML += `
        <div data-test="card" class="card" onclick="revealCard(this)" >
            <div class="front-face face">
                <img data-test="face-down-image" src="./assets/img/back.png" alt "desenho de um papagaio">
            </div>
            <div class="back-face face">
                <img data-test="face-up-image" src="./assets/${newDeck[i]}" alt="gif de um papagaio dançando"
            </div>
        </div>
        `
    }

    limitOfCards = 2;
    stopTimer = setInterval(gameTimer, 1000);
}

function revealCard (card) {
    if (document.querySelectorAll('.card.reveal').length >= limitOfCards){
        return;
    }
    card.classList.add('reveal');

    let turnedCards = document.querySelectorAll('.card.reveal');
    countPlayed++;
    if((turnedCards.length)%2 !== 0 ) {
        firstCard = card;
    }
    if ((turnedCards.length)%2 === 0) {
        secondCard = card;
        compareCards(firstCard, secondCard);
    }
    if (turnedCards.length === quantityCards) {
        setTimeout(endGame, 1000);
    }
}

function shuffle() { 
	return Math.random() - 0.5; 
}

function compareCards (firstCard, secondCard) {
    img = firstCard.querySelector('.back-face img');
    imgTwo = secondCard.querySelector('.back-face img');
    if (img.src !== imgTwo.src) {
        setTimeout(turnCardsAround, 1000);
    }
    if (img.src === imgTwo.src) {
        limitOfCards += 2;
    }
}


function turnCardsAround () {
    firstCard.classList.remove('reveal');
    secondCard.classList.remove('reveal');
}

function gameTimer () {
    timer++;
    document.querySelector('.timer').innerHTML = timer;
    
    let totalCards = document.querySelectorAll('.card.reveal').length;
    if (totalCards === quantityCards){
        clearInterval(stopTimer);
    }
}

function endGame () {
    alert (`Você ganhou em ${countPlayed} jogadas! A duração do jogo foi de ${timer} segundos!`);
    restartGame();
}

startingGame();