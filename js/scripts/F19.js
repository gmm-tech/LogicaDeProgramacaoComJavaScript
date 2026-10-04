/*
    Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.
*/

export function F19() {
    alert(`Enunciado: Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.`)

    let valor1 = Number(prompt("Digite o primeiro valor:"))
    let valor2 = Number(prompt("Digite o segundo valor:"))

    if (valor1 > valor2) {
        alert(`O maior valor é ${valor1}.`)
    } else {
        alert(`O maior valor é ${valor2}.`)
    }
}