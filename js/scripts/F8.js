/*
    Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
    brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
    de eleitores.
*/

export function F8() {
    alert(`Enunciado: Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.`)

    let totalEleitores = Number(prompt("Digite o número total de eleitores:"))
    let votosBrancos = Number(prompt("Digite o número de votos brancos:"))
    let votosNulos = Number(prompt("Digite o número de votos nulos:"))
    let votosValidos = Number(prompt("Digite o número de votos válidos:"))

    let percentualBrancos = (votosBrancos / totalEleitores) * 100
    let percentualNulos = (votosNulos / totalEleitores) * 100
    let percentualValidos = (votosValidos / totalEleitores) * 100

    alert(`Votos brancos: ${percentualBrancos}%\nVotos nulos: ${percentualNulos}%\nVotos válidos: ${percentualValidos}%`)
}