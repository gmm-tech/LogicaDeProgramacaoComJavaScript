/*
    Uma fruteira está vendendo frutas com a seguinte tabela de preços:

    Até 5 Kg     Acima de 5 Kg
    Morango      R$ 2,50/Kg     R$ 2,20/Kg
    Maçã         R$ 1,80/Kg     R$ 1,50/Kg

    Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00,
    receberá ainda um desconto de 10% sobre este total.
*/

export function F37() {
    alert(`Enunciado: Calcular o valor de uma compra de morangos e maçãs considerando o preço por Kg e o desconto de 10% para compras com mais de 8 Kg ou valor superior a R$ 25,00.`)

    let morangos = Number(prompt("Digite a quantidade de morangos em Kg:"))
    let macas = Number(prompt("Digite a quantidade de maçãs em Kg:"))

    let precoMorango
    let precoMaca

    if (morangos <= 5) {
        precoMorango = 2.50
    } else {
        precoMorango = 2.20
    }

    if (macas <= 5) {
        precoMaca = 1.80
    } else {
        precoMaca = 1.50
    }

    let totalMorangos = morangos * precoMorango
    let totalMacas = macas * precoMaca
    let totalKg = morangos + macas
    let total = totalMorangos + totalMacas

    if (totalKg > 8 || total > 25) {
        total *= 0.90
    }

    alert(`Valor a pagar: R$ ${total.toFixed(2)}`)
}