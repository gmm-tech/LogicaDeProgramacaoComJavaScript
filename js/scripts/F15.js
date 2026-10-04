/*
    Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).
*/

export function F15() {
    alert(`Enunciado: Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).`)

    let valor = Number(prompt("Digite um valor:"))

    if (valor >= 0) {
        alert("O valor é positivo.")
    } else {
        alert("O valor é negativo.")
    }
}