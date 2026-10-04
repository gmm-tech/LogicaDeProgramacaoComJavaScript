/* 
    Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída.
*/

export function L01G() {
    alert("Enunciado: Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída.")

    let A = Number(prompt("Digite o valor de A:"))
    let B = Number(prompt("Digite o valor de B:"))
    let C = Number(prompt("Digite o valor de C:"))
    let D = Number(prompt("Digite o valor de D:"))

    alert(`
    A + B = ${A + B}
    A × B = ${A * B}

    A + C = ${A + C}
    A × C = ${A * C}

    A + D = ${A + D}
    A × D = ${A * D}

    B + C = ${B + C}
    B × C = ${B * C}

    B + D = ${B + D}
    B × D = ${B * D}

    C + D = ${C + D}
    C × D = ${C * D}
    `)
}