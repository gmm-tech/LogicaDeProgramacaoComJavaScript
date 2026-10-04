/*
Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da média.
*/

export function L04F() {
    alert(`Enunciado: Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da média.`)

    let numero = 0
    let soma = 0
    let valoresLidos = 0

    do {
        numero = Number(prompt("Digite um número (Digite um número negativo para parar.):"))
        if(numero >= 0) {
            soma += numero
            valoresLidos++
        }      
    }while(numero >= 0)

    let media = 0

    if(valoresLidos > 0) {
        media = soma / valoresLidos
    }

    alert(`Somatório: ${soma}\nMédia: ${media}\nValores lidos: ${valoresLidos}`)
}
