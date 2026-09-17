alert("Programa Calculo de dias vividos")
ano = parseInt(prompt("Digite a quantidade de anos vividos: "))
mes = parseInt(prompt("Digite a quantidade de meses passados desde o último aniversário: "))
ano = parseInt(prompt("Digite a quantidade de dias passados desde o último mesmesário: "))

quantidadeDeDiasVividos = anos * 365 + meses * 30 + dias

alert(`A quantidade de dias é vividos é: ${quantidadeDeDiasVividos}`)