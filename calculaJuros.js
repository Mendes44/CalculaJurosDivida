import entrada from 'readline-sync';

console.log(":::Aplicação de Juros:::\n");

let valorOriginal = entrada.questionFloat('Informe o valor devido: ');
let tempo = entrada.questionFloat('Informe quantos dias se passaram desde o vencimento do boleto: ');

let valorFinal = tempo > 15 ? valorOriginal * 1.10 : valorOriginal * 1.05;

console.log(`Valor Original da divida: R$${valorOriginal.toFixed(2)}`);
console.log(`Dias atrasados: ${tempo} dias`);
console.log(`Valor Final da divida: R$${valorFinal.toFixed(2)}`);