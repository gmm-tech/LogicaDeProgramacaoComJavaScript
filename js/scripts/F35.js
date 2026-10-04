/*
    Um posto está vendendo combustíveis com a seguinte tabela de descontos:

    Álcool:
    até 20 litros, desconto de 3% por litro
    acima de 20 litros, desconto de 5% por litro

    Gasolina:
    até 20 litros, desconto de 4% por litro
    acima de 20 litros, desconto de 6% por litro

    Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível
    (A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente.

    Preço da gasolina: R$ 3,30
    Preço do álcool: R$ 2,90
*/

export function F35() {
    alert(`Enunciado: Calcular o valor a ser pago por um cliente de um posto, considerando os descontos de acordo com o tipo e a quantidade de combustível.`)

    let litros = Number(prompt("Digite a quantidade de litros:"))
    let tipo = prompt("Digite o tipo de combustível (A para álcool ou G para gasolina):").toUpperCase()

    let preco
    let desconto

    if (tipo === "A") {
        preco = 2.90

        if (litros <= 20) {
            desconto = 0.03
        } else {
            desconto = 0.05
        }
    } else {
        preco = 3.30

        if (litros <= 20) {
            desconto = 0.04
        } else {
            desconto = 0.06
        }
    }

    let valor = litros * preco
    let valorDesconto = valor * desconto
    let valorFinal = valor - valorDesconto

    alert(`Valor a pagar: R$ ${valorFinal.toFixed(2)}`)
}