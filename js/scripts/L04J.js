/*
    Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo
*/

export function L04J() {
    alert(`Enunciado: Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo`)

    let dividendo = Number(prompt("Digite o dividendo:"))
    let divisor = Number(prompt("Digite o divisor:"))

    let quociente = 0

    while (dividendo >= divisor) {
        dividendo -= divisor
        quociente++
    }

    alert(`Quociente: ${quociente}`)
}