/*
    Ler dois valores e imprimir uma das três mensagens a seguir:
    ‘Números iguais’, caso os números sejam iguais
    ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
    ‘Segundo maior’, caso o segundo seja maior que o primeiro.
*/

export function F33() {
    alert(`Enunciado: Ler dois valores e informar se são iguais, se o primeiro é maior ou se o segundo é maior.`)

    let valor1 = Number(prompt("Digite o primeiro valor:"))
    let valor2 = Number(prompt("Digite o segundo valor:"))

    if (valor1 === valor2) {
        alert("Números iguais")
    } else if (valor1 > valor2) {
        alert("Primeiro é maior")
    } else {
        alert("Segundo maior")
    }
}