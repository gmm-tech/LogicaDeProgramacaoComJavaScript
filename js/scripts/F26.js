/*
    Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e quantidade
    mínima em estoque de um produto. Calcular e escrever a quantidade média
    ((quantidade média = quantidade máxima + quantidade mínima) / 2). Se a quantidade em estoque for
    maior ou igual à quantidade média escrever a mensagem 'Não efetuar compra', senão escrever
    a mensagem 'Efetuar compra'.
*/

export function F26() {
    alert(`Enunciado: Faça um algoritmo para ler a quantidade atual, máxima e mínima em estoque de um produto. Calcular a quantidade média. Se a quantidade em estoque for maior ou igual à quantidade média escrever 'Não efetuar compra', senão escrever 'Efetuar compra'.`)

    let quantidadeAtual = Number(prompt("Digite a quantidade atual em estoque:"))
    let quantidadeMaxima = Number(prompt("Digite a quantidade máxima em estoque:"))
    let quantidadeMinima = Number(prompt("Digite a quantidade mínima em estoque:"))

    let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2

    if (quantidadeAtual >= quantidadeMedia) {
        alert(`Quantidade média: ${quantidadeMedia}\nNão efetuar compra.`)
    } else {
        alert(`Quantidade média: ${quantidadeMedia}\nEfetuar compra.`)
    }
}