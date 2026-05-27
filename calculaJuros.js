import entrada from 'readline-sync';

console.log(":::Aplicação de Juros:::\n");

let valorOriginal = entrada.questionFloat('Informe o valor devido: ');

if (valorOriginal > 0) {

    let vencimento = entrada.questionInt('Informe quantos dias se passaram desde o vencimento do boleto: ');

    if (vencimento > 0) {

        let valorJuros;

        if (vencimento > 15) {
            valorJuros = 10;
        } else {
            valorJuros = 5;
        }

        let valorFinal = valorOriginal + (valorOriginal * (valorJuros / 100));

        console.log(`Valor Original da dívida: R$${valorOriginal.toFixed(2)}`);
        console.log(`Dias atrasados: ${vencimento} dias`);
        console.log(`Valor do juros aplicado: ${valorJuros}%`);
        console.log(`Valor Final da dívida: R$${valorFinal.toFixed(2)}`);

    } else {
        console.log("Você está em dia!");
    }

} else {
    console.log("Valor inválido! Para calcular os juros, o valor deve ser maior que zero.");
}