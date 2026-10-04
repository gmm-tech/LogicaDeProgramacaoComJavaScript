/*
    Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.
*/

export function F6() {
    alert(`Enunciado: Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.`)

    let base = Number(prompt("Digite a base do retângulo:"))
    let altura = Number(prompt("Digite a altura do retângulo:"))

    let area = base * altura

    alert(`A area area do retângulo (base: ${base} x altura: ${altura}) é: ${area}`)
}