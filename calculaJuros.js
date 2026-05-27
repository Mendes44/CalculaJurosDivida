import entrada from 'readline-sync';

console.log(":::Aplicação de Juros:::\n");

let valorOriginal = entrada.questionFloat('Informe o valor devido: ');

while (valorOriginal <= 0) {
    console.log("Valor inválido! Para calcular os juros, o valor deve ser maior que zero.\n");
    valorOriginal = entrada.questionFloat('Informe o valor devido: ');
}

let vencimento = entrada.questionInt('Informe quantos dias se passaram desde o vencimento do boleto: ');

while (vencimento < 0) {
    console.log("Quantidade de dias inválida! Informe zero ou um número positivo.\n");
    vencimento = entrada.questionInt('Informe quantos dias se passaram desde o vencimento do boleto: ');
}

if (vencimento > 0) {
    let valorJuros = vencimento > 15 ? 10 : 5;

    let valorFinal = valorOriginal + (valorOriginal * (valorJuros / 100));

    console.log(`Valor Original da dívida: R$${valorOriginal.toFixed(2)}`);
    console.log(`Dias atrasados: ${vencimento} dias`);
    console.log(`Valor do juros aplicado: ${valorJuros}%`);
    console.log(`Valor Final da dívida: R$${valorFinal.toFixed(2)}`);
} else {
    console.log("Você está em dia!");
}