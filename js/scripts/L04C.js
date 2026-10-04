/*
    Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para opróximo passo. A variável que controlará o contador deve ser iniciada com o valor 1.
*/

export function L04C() {
    alert(`Enunciado: Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para opróximo passo. A variável que controlará o contador deve ser iniciada com o valor 1.`)

    alert(`IMPORTANTE: Este exercicio usa console.log() para mostrar seu resultado devido a quantidade massiva de números.`)

    let numero = 1

    do {
        if(numero % 4 === 0){
            console.log(`${numero}`)
        }
        numero++
    }while(numero < 200)
}