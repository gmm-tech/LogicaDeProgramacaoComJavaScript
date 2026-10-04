/*
    As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
    compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule
    e escreva o custo total da compra.
*/

export function F16() {
    alert(`Enunciado: As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.`)

    let quantidade = Number(prompt("Digite a quantidade de maçãs compradas:"))
    let preco

    if (quantidade < 12) {
        preco = 1.30
    } else {
        preco = 1.00
    }

    let custoTotal = quantidade * preco

    alert(`O custo total da compra é R$ ${custoTotal.toFixed(2)}.`)
}