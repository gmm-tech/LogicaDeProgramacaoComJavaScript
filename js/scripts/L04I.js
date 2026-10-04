/*
    Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.
*/

export function L04I() {
    alert(`Enunciado: Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.`)

    let numero = 0
    let maior = null
    let menor = null

    do {
        numero = Number(prompt("Digite um número (Isso vai se repetir até um valor negativo):"))

        if(numero >= 0) {
            if(maior === null || numero > maior) {
                maior = numero
            }

            if(menor === null || numero < menor) {
                menor = numero
            }
        }

    } while(numero >= 0)

    alert(`Maior: ${maior}\nMenor: ${menor}`)
}