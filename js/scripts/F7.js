/*
    Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
    dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.
*/

export function F7() {
    alert(`Enunciado: Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.`)

    let anos = Number(prompt("Digite a idade em anos:"))
    let meses = Number(prompt("Digite os meses:"))
    let dias = Number(prompt("Digite os dias:"))

    let totalDias = (anos * 365) + (meses * 30) + dias

    alert(`A idade corresponde a ${totalDias} dias.`)
}