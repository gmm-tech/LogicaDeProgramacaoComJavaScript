/*
    Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo. 
*/

export function L03D() {
    alert(`Enunciado: Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.`)

    let visualizacao = ""
    let numero = 0

    while(numero <= 20) {
        if(numero % 2 === 1) {
                visualizacao += ` ${numero}`
        }
        numero++
    }
    alert(visualizacao)
}