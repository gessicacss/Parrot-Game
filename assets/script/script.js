let quantityCards = Number(prompt(`Quantas cartas quer jogar?`));

while (quantityCards % 2 !== 0 || quantityCards > 14 || quantityCards < 3) {
    alert (`Quantidade inválida. Por favor, escolha um número par entre 4 a 14`)
    quantityCards = prompt(`Quantas cartas quer jogar?`);
}