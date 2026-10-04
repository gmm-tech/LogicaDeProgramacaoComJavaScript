/*
    Apresentar os quadrados dos números inteiros de 15 a 200
*/

export function L04A() {
    alert(`Enunciado: Apresentar os quadrados dos números inteiros de 15 a 200`)

    alert(`IMPORTANTE: Este exercicio usa console.log() para mostrar seu resultado devido a quantidade massiva de números.`)

    let numero = 15
    let quadrado = 0

    do {    
        quadrado = numero * numero
        console.log(`Quadrado de ${numero} é ${quadrado}`)
        numero++
    } while(numero <= 200)
}