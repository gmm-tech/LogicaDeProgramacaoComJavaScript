/* 
    Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo.
*/

export function L01I() {
    alert(`Enunciado: Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo.`)

    let A = parseInt(prompt("Digite o valor de A:"))
    let B = parseInt(prompt("Digite o valor de B:"))

    alert(`O quadrado da diferença de ${A} e ${B} é: ${(A - B) ** 2}`)
}