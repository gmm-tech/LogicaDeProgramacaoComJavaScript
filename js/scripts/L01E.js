/*
    Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTACAO = VALOR + (VALOR * TAXA/100) * TEMPO).
*/

export function L01E() {
    alert(`Enunciado: Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTACAO = VALOR + (VALOR * TAXA/100) * TEMPO).`)

    let valor = parseFloat(prompt("Digite o valor da prestação:"))
    let taxa = parseFloat(prompt("Digite o valor da taxa:"))
    let tempo = parseFloat(prompt("Digite o tempo de atraso (em dias):"))

    let prestacao = valor + (valor * taxa/100) * tempo

    alert(`Valor da prestação: ${prestacao.toFixed(2)}`)
}