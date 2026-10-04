/*
    Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500
*/

export function L05D() {
    alert(`Enunciado: Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500`)

    let soma = 0
    for(let pares = 2; pares <= 500; pares += 2) {
        soma += pares
    }
    alert(`${soma}`)
}