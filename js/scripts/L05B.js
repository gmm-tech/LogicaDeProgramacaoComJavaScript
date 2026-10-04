/*
    Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.
*/

export function L05B() {
    alert(`Enunciado: Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.`)

    alert(`IMPORTANTE: Este exercicio usa console.log() para mostrar seu resultado devido a quantidade massiva de números.`)

    let numero = parseInt(prompt("Digite um número para ver sua tabuada:"))
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}