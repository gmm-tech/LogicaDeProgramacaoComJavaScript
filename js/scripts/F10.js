/*
    O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
    distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
    seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
    calcular e escrever o custo final ao consumidor.
*/

export function F10() {
    alert(`Enunciado: O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.`)

    let custoFabrica = Number(prompt("Digite o custo de fábrica do carro:"))

    let distribuidor = custoFabrica * 28 / 100
    let impostos = custoFabrica * 45 / 100
    let custoFinal = custoFabrica + distribuidor + impostos

    alert(`O custo final ao consumidor é R$ ${custoFinal.toFixed(2)}.`)
}