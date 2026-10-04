/*
    Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
    do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.
*/

export function F32() {
    alert(`Enunciado: Ler o nome de 2 times e o número de gols marcados na partida para cada time. Escrever o nome do vencedor. Caso não haja vencedor, imprimir EMPATE.`)

    let time1 = prompt("Digite o nome do primeiro time:")
    let gols1 = Number(prompt(`Digite os gols do ${time1}:`))

    let time2 = prompt("Digite o nome do segundo time:")
    let gols2 = Number(prompt(`Digite os gols do ${time2}:`))

    if (gols1 > gols2) {
        alert(`Vencedor: ${time1}`)
    } else if (gols2 > gols1) {
        alert(`Vencedor: ${time2}`)
    } else {
        alert("EMPATE")
    }
}