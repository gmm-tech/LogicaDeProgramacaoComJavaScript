/*
    A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
    de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
    Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
    o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
    (considere que o mês possua 4 semanas exatas).
*/

export function F22() {
    alert(`Enunciado: A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Considere que o mês possua 4 semanas exatas.`)

    let horasTrabalhadas = Number(prompt("Digite o número de horas trabalhadas no mês:"))
    let salarioPorHora = Number(prompt("Digite o salário por hora:"))

    let horasNormais = 40 * 4
    let salario

    if (horasTrabalhadas > horasNormais) {
        let horasExtras = horasTrabalhadas - horasNormais
        let valorHoraExtra = salarioPorHora * 1.5

        salario = (horasNormais * salarioPorHora) + (horasExtras * valorHoraExtra)
    } else {
        salario = horasTrabalhadas * salarioPorHora
    }

    alert(`O salário total do funcionário é R$ ${salario.toFixed(2)}.`)
}