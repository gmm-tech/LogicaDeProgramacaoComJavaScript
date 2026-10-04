/*
    Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: Volume = π * Raio² * Altura
*/

export function L01C() {
    alert(`Enunciado: Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: Volume = π * Raio² * Altura`)

    let raio = parseFloat(prompt("Digite o raio da lata:"))
    let altura = parseFloat(prompt("Digite a altura da lata:"))

    let volume = Math.PI * raio ** 2 * altura

    alert(`O volume da lata de óleo é de ${volume.toFixed(2)} cm³.`);
}