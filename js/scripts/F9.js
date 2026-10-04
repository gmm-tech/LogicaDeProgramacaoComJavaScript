/*
    Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
    Calcular e escrever o valor do novo salário.
*/

export function F9() {
    alert(`Enunciado: Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.`)

    let salarioAtual = Number(prompt("Digite o salário mensal atual:"))
    let percentualReajuste = Number(prompt("Digite o percentual de reajuste:"))

    let novoSalario = salarioAtual + (salarioAtual * percentualReajuste / 100)

    alert(`O novo salário é R$ ${novoSalario.toFixed(2)}.`)
}