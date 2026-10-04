/*
    Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados

*/

export function L01F() {
    alert(`Enunciado: Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTACAO = VALOR + (VALOR * TAXA/100) * TEMPO).`)

    let A = prompt("Digite o valor de A:")
    let B = prompt("Digite o valor de B:")

    let X = B
    
    B = A
    A = X

    alert(`Valor A: ${A}\nValor B: ${B}`)
}