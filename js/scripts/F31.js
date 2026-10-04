/*
    Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
    ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
    dos outros 2 lados.
*/

export function F31() {
    alert(`Enunciado: Ler 3 valores representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. Para formar um triângulo, cada lado deve ser menor que a soma dos outros dois.`)

    let a = Number(prompt("Digite o lado A:"))
    let b = Number(prompt("Digite o lado B:"))
    let c = Number(prompt("Digite o lado C:"))

    if (a < b + c && b < a + c && c < a + b) {
        alert("Os valores formam um triângulo.")
    } else {
        alert("Os valores não formam um triângulo.")
    }
}