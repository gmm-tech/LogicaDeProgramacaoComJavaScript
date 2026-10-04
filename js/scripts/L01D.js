/*
    Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a distância percorrida com a fórmula DISTANCIA = TEMPO * VELOCIDADE. Possuindo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula LITROS_USADOS = DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a quantidade de litros (LITROS_USADOS) utilizada na viagem.
*/

export function L01D() {
    alert(`Enunciado: Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a distância percorrida com a fórmula DISTANCIA = TEMPO * VELOCIDADE. Possuindo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula LITROS_USADOS = DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a quantidade de litros (LITROS_USADOS) utilizada na viagem.`)

    let tempo = parseFloat(prompt("Digite o tempo da viagem:"))
    let velocidadeMedia = parseFloat(prompt("Digite a velocidade média mantida durante a viagem:"))

    let distancia = tempo * velocidadeMedia

    let litrosUsados = distancia / 12

    alert(
    `RESULTADO DA VIAGEM\n\n` +
    `Velocidade média: ${velocidadeMedia.toFixed(2)} km/h\n` +
    `Tempo gasto: ${tempo.toFixed(2)} h\n` +
    `Distância percorrida: ${distancia.toFixed(2)} km\n` +
    `Litros usados: ${litrosUsados.toFixed(2)} L`
    );
}