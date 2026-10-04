/* 
    Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira
*/

export function L01J() {
    alert(`Enunciado: Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira`)
    
    let dolar = Number(prompt("Digite o valor em dólar:"))
    let cotacao = Number(prompt("Digite a contação atual:"))

    let real = dolar * cotacao

    alert(`Dólar: ${dolar}\nReal: ${real}`)

}