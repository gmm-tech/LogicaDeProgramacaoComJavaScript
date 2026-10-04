/*
    Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
    e mostre seu peso ideal, utilizando as seguintes fórmulas:

    - para sexo masculino: peso ideal = (72.7 * altura) - 58
    - para sexo feminino: peso ideal = (62.1 * altura) - 44.7
*/

export function F23() {
    alert(`Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule e mostre seu peso ideal. Para sexo masculino: peso ideal = (72.7 * altura) - 58. Para sexo feminino: peso ideal = (62.1 * altura) - 44.7.`)

    let nome = prompt("Digite o nome:")
    let altura = Number(prompt("Digite a altura em metros:"))
    let sexo = prompt("Digite o sexo (M ou F):").toUpperCase()

    let pesoIdeal

    if (sexo === "M") {
        pesoIdeal = (72.7 * altura) - 58
    } else {
        pesoIdeal = (62.1 * altura) - 44.7
    }

    alert(`${nome}, seu peso ideal é ${pesoIdeal.toFixed(2)} kg.`)
}