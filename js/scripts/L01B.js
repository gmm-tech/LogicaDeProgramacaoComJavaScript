/*
Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de conversão é C = (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
*/


export function L01B() {
    alert(`Enunciado: Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de conversão é C = (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.`)

    let fahrenheit = parseFloat(prompt("Digite a temperatura em graus fahrenheit:"))

    let celsius = (fahrenheit - 32) * (5/9)

    alert(`${fahrenheit} convertido em celsius é ${celsius}`)
}