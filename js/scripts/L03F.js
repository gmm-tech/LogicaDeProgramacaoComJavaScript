/*
Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente.Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 
*/

export function L03F() {
    alert(`Enunciado: Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente.Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).`)

    let base = Number(prompt("Digite o valor da base:"))
    let expoente = Number(prompt("Digite o valor do expoente:"))
    let acumulador = 1
    let contador = 1

    while(contador <= expoente) {
        acumulador = acumulador * base
        contador++
    }
    
    alert(`O resultado de ${base} elavado a ${expoente} é: ${acumulador}`)
}