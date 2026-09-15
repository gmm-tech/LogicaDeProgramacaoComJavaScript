alert("Percentual de eletores")

let eleitoresTotais = parseInt(prompt("Digite o número total de eleitores: "))
let votosBrancos = parseInt(prompt("Digite o número total de votos brancos: "))
let votosNulos = parseInt(prompt("Digite o número total de votos nulos: "))
let votosValidos = parseInt(prompt("Digite o número total de votos válidso: "))

let percentualBrancos = (votosBrancos / eleitoresTotais) * 100
let percentualNulos = (votosNulos / eleitoresTotais) * 100
let percentualValidos = (votosValidos / eleitoresTotais) * 100

alert(`Brancos: ${percentualBrancos.toFixed(2)}%
Nulos: ${percentualNulos.toFixed(2)}%
Válidos: ${percentualValidos.toFixed(2)}%`)
