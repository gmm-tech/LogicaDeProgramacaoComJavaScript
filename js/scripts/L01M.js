/*
    Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.
*/

export function L01M() {
    alert(`Enunciado: Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.`)

    let A = Number(prompt("Digite o valor de A:"))
    let B = Number(prompt("Digite o valor de B:"))
    let C = Number(prompt("Digite o valor de C:"))

    let quadradoSoma = (A + B + C) ** 2

    alert(`O quadrado das somas é: ${quadradoSoma}`)
}