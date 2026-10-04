/*
    Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
    situados na faixa numérica de 1 a 10.
*/

export function L05K() {
    alert(`Enunciado: Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10.`)

    alert(`IMPORTANTE: Este exercicio usa console.log() para mostrar seu resultado devido a quantidade massiva de números.`)

    for (let numero = 1; numero <= 10; numero++) {
        if (numero % 2 !== 0) {
            let fatorial = 1

            for (let contador = 1; contador <= numero; contador++) {
                fatorial *= contador
            }

            console.log(`${numero}! = ${fatorial}`)
        }
    }
}