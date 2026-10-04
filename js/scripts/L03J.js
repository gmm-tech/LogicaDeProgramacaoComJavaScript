/*
    Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70.
*/

export function L03J() {
    alert(`Enunciado: Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70.`)

    let soma = 0
    let numero = 50
    let contador = 0

    while(contador <= 20) {
        if (numero % 2 === 0) {
            soma += numero    
        } 
        numero++
        contador++
    }

    let media = soma / 11

    alert(`A média aritmética da soma dos valores pares na faixa de 50 a 70 é: ${media}`)
}