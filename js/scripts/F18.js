/*
    Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
    poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
*/

export function F18() {
    alert(`Enunciado: Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).`)

    let anoAtual = Number(prompt("Digite o ano atual:"))
    let anoNascimento = Number(prompt("Digite o ano de nascimento:"))

    let idade = anoAtual - anoNascimento

    if (idade >= 16) {
        alert(`A pessoa poderá votar este ano.\nIdade: ${idade} anos.`)
    } else {
        alert(`A pessoa não poderá votar este ano.\nIdade: ${idade} anos.`)
    }
}