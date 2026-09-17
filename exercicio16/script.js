alert("Quantidade de maçãs")

quantidadeMacas = parseInt(prompt("Digite a quantidade de maçãs: "))
if (quantidadeMacas >= 12) {
    precoUnidade = parseFloat(1.30)
} else {
    precoUnidade = parseFloat(1.00)
}

total = quantidadeMacas * precoUnidade

alert(`Valor total: ${total}\nPreço por unidade: ${precoUnidade}`)