horasTrabalhadas = parseInt(prompt("Digite quantas horas foram trabalhadas no mês: "))
salarioHora = parseFloat(prompt("Digite o salário por hora: "))

if(horasTrabalhadas > 160){
    horaExtra = horasTrabalhadas - 160
    
    salarioTotal = (salarioHora * 160) + (horaExtra * salarioHora * 1.50)
}else{
    salarioTotal = horasTrabalhadas * 160
}

alert(`Salário: ${salarioTotal}`)