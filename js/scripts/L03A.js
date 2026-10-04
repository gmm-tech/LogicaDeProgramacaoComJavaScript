/*
    Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. 
*/

export function L03A() {
    alert(`Enunciado: Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.`)

    let multiplicador = 1
    let numero = parseInt(prompt("Digite um número:"))

    let resultado = ""

    while (multiplicador <= 10) {
        resultado += `${numero} x ${multiplicador} = ${numero * multiplicador}\n`
        multiplicador++
    }

    alert(resultado)
}