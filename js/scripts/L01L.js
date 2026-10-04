/*
    Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à soma dos quadrados dos três valores lidos.
*/

export function L01L() {
    alert(`Enunciado: Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à soma dos quadrados dos três valores lidos.`)

    let A = Number(prompt("Digite o valor de A:"))
    let B = Number(prompt("Digite o valor de B:"))
    let C = Number(prompt("Digite o valor de C:"))

    let somaQuadrados = (A ** 2) + (B ** 2) + (C ** 2)

    alert(`A soma dos quadrados de A(${A}), B(${B}) e C(${C}) é: ${somaQuadrados}`)
}

