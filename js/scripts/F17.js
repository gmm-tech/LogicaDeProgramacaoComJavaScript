/*
    Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
    uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
    aluno é aprovado). Escrever também a média calculada.
*/

export function F17() {
    alert(`Enunciado: Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada.`)

    let nota1 = Number(prompt("Digite a primeira nota:"))
    let nota2 = Number(prompt("Digite a segunda nota:"))

    let media = (nota1 + nota2) / 2

    if (media >= 6) {
        alert(`Aluno aprovado!\nMédia: ${media.toFixed(2)}`)
    } else {
        alert(`Aluno não aprovado.\nMédia: ${media.toFixed(2)}`)
    }
}