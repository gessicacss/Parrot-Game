const newDeck = [];
const images = [
    "/assets/img/bobrossparrot.gif",
    "/assets/img/explodyparrot.gif",
    "/assets/img/fiestaparrot.gif",
    "/assets/img/metalparrot.gif",
    "/assets/img/revertitparrot.gif",
    "/assets/img/tripletsparrot.gif",
    "/assets/img/unicornparrot.gif"
];
let cardHtml = document.querySelector('div');

let quantityCards = Number(prompt(`Quantas cartas quer jogar?`));

while (quantityCards % 2 !== 0 || quantityCards > 14 || quantityCards < 3) {
    alert (`Quantidade inválida. Por favor, escolha um número par entre 4 a 14`)
    quantityCards = prompt(`Quantas cartas quer jogar?`);
}

//uma função que envie pro html as divs usando as imagens usadas no array
function startingGame () {
    images.sort(comparador); //eu senti que só com o newdeck.sort não 
    //estava embaralhando, pode ser impressão, mas decidi deixar

    for (let i = 0; i < quantityCards/2; i++) {
        newDeck.push(images[i]);
        newDeck.push(images[i]);
    }

    newDeck.sort(comparador);

    for (let i = 0; i < quantityCards; i++) {
        cardHtml.innerHTML += `
        <div class="card" onclick="revealCard(this)">
            <div class="front-face face">
                <img src="./assets/img/back.png" alt "desenho de um papagaio">
            </div>
            <div class="back-face face">
                <img src="${newDeck[i]}" alt="gif de um papagaio dançando"
            </div>
        </div>
        `
    }
}

//criar uma função que quando clique na carta, ela vire e se não for igual ela desvira
//criar uma função em que as imagens sejam lançadas duas iguais sempre
//criar uma função que caso as cartas tenham a mesma imagem, ela permaneça virada e permita que continue virando as outroas
//criar um contador
//criar uma função que quando a quantidade de cartas colocada for a mesma que a quantidade de cartas viradas, ela crie um alerta dizendo que o jogo terminou
// e que essa função diga quantos clicks tiveram, e em quanto tempo foi finalizado
// criar uma função que pergunte ao terminar o jogo, se gostaria de recomeçar (para isso, faria sentido se o prompt de quantidade de jogos estivesse na função startingGame)



function comparador() { 
	return Math.random() - 0.5; 
}

startingGame();