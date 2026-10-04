/* 
    Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.
*/

export function L03C() {
    alert(`Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.`)

    let numero = 2
    let soma = 0
    while(numero <= 100) {
        soma += numero
        numero += 2
    }
    alert(soma)
}