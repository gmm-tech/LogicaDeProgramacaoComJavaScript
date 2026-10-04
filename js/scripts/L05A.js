/*
    Apresentar os quadrados dos números inteiros de 15 a 200.
*/

export function L05A() {
    alert(`Enunciado: Apresentar os quadrados dos números inteiros de 15 a 200.`)

    alert(`IMPORTANTE: Este exercicio usa console.log() para mostrar seu resultado devido a quantidade massiva de números.`)

    for(let numero = 15; numero <= 200; numero++){
        let quadrado = numero * numero
        console.log(`${numero} ao qudrado é ${quadrado}`)
    }
}