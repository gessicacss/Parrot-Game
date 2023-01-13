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

    for (let j = 0; j < quantityCards/2; j++) {
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
}

function revealCard (card) {
    if (document.querySelectorAll('.card.reveal').length >= limitOfCards){
        return;
    }
    card.classList.add('reveal');

    let turnedCards = document.querySelectorAll('.card.reveal');
    countPlayed++;
    if((turnedCards.length)%2 !== 0 ) {
        secondCard = card;
    }
    if ((turnedCards.length)%2 === 0) {
        firstCard = card;
        compareCards(card, secondCard);
    }
}
function shuffle() { 
	return Math.random() - 0.5; 
}

startingGame();
//criar uma função que caso as cartas tenham a mesma imagem, ela permaneça virada e permita que continue virando as outroas
//criar uma função que quando a quantidade de cartas colocada for a mesma que a quantidade de cartas viradas, ela crie um alerta dizendo que o jogo terminou
// e que essa função diga quantos clicks tiveram, e em quanto tempo foi finalizado
// criar uma função que pergunte ao terminar o jogo, se gostaria de recomeçar (para isso, faria sentido se o prompt de quantidade de jogos estivesse na função startingGame)