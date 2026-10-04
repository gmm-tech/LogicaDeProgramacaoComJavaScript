/*
    Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
    mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
    efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
    vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
    vendedor.
*/

export function F11() {
    alert(`Enunciado: Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.`)

    let carrosVendidos = Number(prompt("Digite o número de carros vendidos:"))
    let valorTotalVendas = Number(prompt("Digite o valor total das vendas:"))
    let salarioFixo = Number(prompt("Digite o salário fixo:"))
    let valorPorCarro = Number(prompt("Digite o valor recebido por carro vendido:"))

    let comissaoCarros = carrosVendidos * valorPorCarro
    let comissaoVendas = valorTotalVendas * 5 / 100
    let salarioFinal = salarioFixo + comissaoCarros + comissaoVendas

    alert(`O salário final do vendedor é R$ ${salarioFinal.toFixed(2)}.`)
}