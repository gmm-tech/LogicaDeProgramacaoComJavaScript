/*
    Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
    minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo
    é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.
*/

export function F21() {
    alert(`Enunciado: Ler a hora de início e a hora de fim de um jogo de Xadrez e calcular a duração do jogo em horas. O jogo pode iniciar em um dia e terminar no dia seguinte.`)

    let horaInicio = Number(prompt("Digite a hora de início:"))
    let horaFim = Number(prompt("Digite a hora de fim:"))

    let duracao

    if (horaFim > horaInicio) {
        duracao = horaFim - horaInicio
    } else {
        duracao = (24 - horaInicio) + horaFim
    }

    alert(`A duração do jogo foi de ${duracao} hora(s).`)
}