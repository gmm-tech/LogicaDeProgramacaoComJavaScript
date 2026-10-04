/*
    Elaborar um programa que apresente como resultado o valor de uma potência de uma base
    qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
    do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
    portugol (^).
*/

export function L05H() {
    alert(`Enunciado: Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de B^E, em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portugol (^).`)

    let base = Number(prompt("Digite o valor da base:"))
    let expoente = Number(prompt("Digite o valor do expoente:"))
    let resultado = 1

    for (let contador = 0; contador < expoente; contador++) {
        resultado *= base
    }

    alert(`${base}^${expoente} = ${resultado}`)
}