/*
    Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.
*/

export function L04B() {
    alert(`Enunciado: Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.`)

    let numero = 2
    let soma = 0

    do {
        soma += numero
        numero += 2
    }while(numero <= 500)

    alert(`A soma dos números pares na faixa de 1 a 500 é: ${soma}`)
}