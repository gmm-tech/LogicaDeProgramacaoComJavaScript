/*
    Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
    ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
    ultrapassar este valor, calcular e escrever o seu salário total.
*/

export function F24() {
    alert(`Enunciado: Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor. Calcular e escrever o salário total.`)

    let salarioFixo = Number(prompt("Digite o salário fixo:"))
    let vendas = Number(prompt("Digite o valor total das vendas:"))

    let comissao

    if (vendas <= 1500) {
        comissao = vendas * 0.03
    } else {
        comissao = (1500 * 0.03) + ((vendas - 1500) * 0.05)
    }

    let salarioTotal = salarioFixo + comissao

    alert(`O salário total do vendedor é R$ ${salarioTotal.toFixed(2)}.`)
}