/*
    Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
    dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
    das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
    novo com a mulher mais velha.
*/

export function F36() {
    alert(`Enunciado: Ler as idades de 2 homens e 2 mulheres. Calcular a soma da idade do homem mais velho com a mulher mais nova, e o produto da idade do homem mais novo com a mulher mais velha.`)

    let homem1 = Number(prompt("Digite a idade do primeiro homem:"))
    let homem2 = Number(prompt("Digite a idade do segundo homem:"))
    let mulher1 = Number(prompt("Digite a idade da primeira mulher:"))
    let mulher2 = Number(prompt("Digite a idade da segunda mulher:"))

    let homemMaisVelho = Math.max(homem1, homem2)
    let homemMaisNovo = Math.min(homem1, homem2)

    let mulherMaisVelha = Math.max(mulher1, mulher2)
    let mulherMaisNova = Math.min(mulher1, mulher2)

    let soma = homemMaisVelho + mulherMaisNova
    let produto = homemMaisNovo * mulherMaisVelha

    alert(`Soma do homem mais velho com a mulher mais nova: ${soma}\nProduto do homem mais novo com a mulher mais velha: ${produto}`)
}