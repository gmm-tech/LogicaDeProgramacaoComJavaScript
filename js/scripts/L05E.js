/*
    Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.
*/

export function L05E() {
    alert(`Enunciado: Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.`)

    alert(`IMPORTANTE: Este exercicio usa console.log() para mostrar seu resultado devido a quantidade massiva de números.`)

    for(let i = 0; i <= 20; i++) {
        if(i % 2 !== 0) {
            console.log(i)
        }
    }
}