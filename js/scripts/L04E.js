/*
    Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido.
*/

export function L04E() {
    alert(`Enunciado: Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido.`)

    let i = 0
    let total = 0

    do {
        let n = parseInt(prompt(`Digite o ${i+1}º número`))
        if(n >= 0){
            total = fatorial(n) + total
            i++
        }
    }while(i < 15)

    alert(`${total}`)
}

function fatorial(numero) {
    if (numero <= 1) {
        return 1
    }

    let resultado = 1

    do {
        resultado = resultado * numero
        numero = numero - 1
    } while (numero > 1)

    return resultado
}