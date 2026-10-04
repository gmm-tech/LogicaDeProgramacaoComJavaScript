/*
    Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos. 
*/

export function L03I() {
    alert(`Enunciado: Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos.`)

    let soma = 0
    let contador = 1

    while(contador <= 10) {
        let numero = Number(prompt(`Digite o ${contador}º número:`))

        soma += numero

        contador++
    }

    let media = soma / 10
    
    alert(`Somatório dos valores: ${soma}\nMédia aritmética: ${media}`)
}