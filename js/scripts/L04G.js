/*
    Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10.
*/

export function L04G() {
    alert(`Enunciado: Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10.`)

    let numero = 1
    let visualizador = ""

    do {
        if(numero % 2 !== 0) {
            let fatorial = 1
            let contador = numero

            do {
                fatorial *= contador
                contador--
            } while(contador >= 1)

            visualizador += `${numero}! = ${fatorial}\n`
        }

        numero++
    } while(numero <= 10)

    alert(visualizador)
}