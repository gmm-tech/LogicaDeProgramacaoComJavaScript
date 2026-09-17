alert("Calcular a média aritmética simples da primeira e segunda nota do aluno")

nota1 = parseFloat(prompt("Digite a primeira nota: "))
nota2 = parseFloat(prompt("Digite a segunda nota: "))

media = (nota1 + nota2) / 2

if(media >= 6){
    alert(`Aluno aprovado!\nMédia: ${media}`)
}else{
    alert(`Aluno reprovado!\nMédia: ${media}`)
}