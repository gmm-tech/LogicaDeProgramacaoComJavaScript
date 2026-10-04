/*
    Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de
    Fibonacci é formada pela sequência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza
    pela soma de um termo atual com o seu anterior subsequente, para que seja formado o próximo
    valor da sequência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo
    é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc.
*/

export function L05I() {
    alert(`Enunciado: Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de Fibonacci é formada pela sequência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza pela soma de um termo atual com o seu anterior subsequente, para que seja formado o próximo valor da sequência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc.`)

    alert(`IMPORTANTE: Este exercicio usa console.log() para mostrar seu resultado devido a quantidade massiva de números.`)

    let anterior = 1
    let atual = 1

    for (let contador = 1; contador <= 15; contador++) {
        console.log(atual)

        let proximo = anterior + atual
        anterior = atual
        atual = proximo
    }
}