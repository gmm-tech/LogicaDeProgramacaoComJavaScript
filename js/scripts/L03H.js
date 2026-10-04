/*
    Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 °C e finalizando em 100 °C. O programa deve apresentar os valores das duas temperaturas.
    A fórmula de conversão é: F = (9 × C + 160) ÷ 5
    Sendo: F = temperatura em Fahrenheit C = temperatura em Celsius.
*/

export function L03H() {
    alert(`Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 °C e finalizando em 100 °C. O programa deve apresentar os valores das duas temperaturas.
    A fórmula de conversão é:F = (9 × C + 160) ÷ 5
    Sendo: F = temperatura em Fahrenheit C = temperatura em Celsius.`)

    let celsius = 10
    let fahrenheit = 0
    let visualizacao = ""

    while(celsius < 100) {
        celsius += 10
        fahrenheit = (9 * celsius + 160) / 5
        visualizacao += `Celsius: ${celsius} | Fahrenheit: ${fahrenheit}\n`
    }

    alert(visualizacao)
}