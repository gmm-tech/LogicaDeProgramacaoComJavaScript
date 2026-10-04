/*
    Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.
*/

export function L03L() {
    alert(`Enunciado: Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.`)

    let numero = 0
    let maior = 0
    let menor = 0

    while(numero >= 0) {
        numero = parseInt(prompt("Digite um número (positivo ou negativo):"))
        if(numero > maior) {
            maior = numero
        }else if(numero < menor){
            menor = numero
        }
    }

    alert(`Maior número informado: ${maior}\nMenor número informado: ${menor}`)
}