/*
    Ler um valor e escrever se é positivo, negativo ou zero.
*/

export function F27() {
    alert(`Enunciado: Ler um valor e escrever se é positivo, negativo ou zero.`)

    let valor = Number(prompt("Digite um valor:"))

    if (valor > 0) {
        alert("O valor é positivo.")
    } else if (valor < 0) {
        alert("O valor é negativo.")
    } else {
        alert("O valor é zero.")
    }
}