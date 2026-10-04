/*
    Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
    escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for
    maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.
*/

export function F25() {
    alert(`Enunciado: Faça um algoritmo para ler o número da conta do cliente, saldo, débito e crédito. Calcular e escrever o saldo atual. Também testar se o saldo atual for maior ou igual a zero escrever 'Saldo Positivo', senão escrever 'Saldo Negativo'.`)

    let conta = prompt("Digite o número da conta:")
    let saldo = Number(prompt("Digite o saldo:"))
    let debito = Number(prompt("Digite o débito:"))
    let credito = Number(prompt("Digite o crédito:"))

    let saldoAtual = saldo - debito + credito

    if (saldoAtual >= 0) {
        alert(`Conta: ${conta}\nSaldo atual: R$ ${saldoAtual.toFixed(2)}\nSaldo Positivo`)
    } else {
        alert(`Conta: ${conta}\nSaldo atual: R$ ${saldoAtual.toFixed(2)}\nSaldo Negativo`)
    }
}