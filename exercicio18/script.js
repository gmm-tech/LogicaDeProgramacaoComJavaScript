alert("Você pode ou deve votar?")

nascimento = parseInt(prompt("Digite o ano de seu nascimento: "))
anoAtual = parseInt(prompt("Digite o ano atual: "))

idade = anoAtual - nascimento

if (idade < 16) {
    alert("Você não pode votar.")
} else if (idade < 18) {
    alert("Você tem direito ao voto facultativo (opicional).")
} else {
    alert("Você deve votar.")
}