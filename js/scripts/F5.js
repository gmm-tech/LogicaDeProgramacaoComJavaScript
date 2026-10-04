// Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor.

export function F5() {
    alert(`Enunciado: Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor.`)

    let numero = parseInt(prompt("Digite um número:"))
    alert(`Número: ${numero} | Antecessor: ${numero - 1}`)
}