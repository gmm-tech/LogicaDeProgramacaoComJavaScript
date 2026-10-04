/* 
    Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana.
*/

export function L01K() {
    alert(`Enunciado: Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana.`)
    
    let real = Number(prompt("Digite o valor em reais:"))
    let cotacao = Number(prompt("Digite a cotação atual:"))

    let dolar = real / cotacao

    alert(`Real: ${real}\nDólar: ${dolar}`)
}