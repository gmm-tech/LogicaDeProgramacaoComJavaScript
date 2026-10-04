/*
    Seja o seguinte algoritmo:

    início
    ler x
    ler y
    z ← (x*y) + 5
    se z <= 0 então
        resposta ← 'A'
    senão
        se z <= 100 então
            resposta ← 'B'
        senão
            resposta ← 'C'
        fim_se
    fim_se
    escrever z, resposta
    fim

    Faça um teste de mesa para os valores apresentados no enunciado.
*/

export function F34() {
    alert(`Enunciado: Fazer o teste de mesa do algoritmo apresentado para os cinco conjuntos de valores fornecidos.`)

    alert(`IMPORTANTE: Este exercicio usa console.log() para mostrar seu resultado devido a quantidade massiva de números.`)

    let testes = [
        [3, 2],
        [150, 3],
        [7, -1],
        [-2, 5],
        [50, 3]
    ]

    for (let teste of testes) {
        let x = teste[0]
        let y = teste[1]
        let z = (x * y) + 5
        let resposta

        if (z <= 0) {
            resposta = "A"
        } else if (z <= 100) {
            resposta = "B"
        } else {
            resposta = "C"
        }

        console.log(`X: ${x} | Y: ${y} | Z: ${z} | Resposta: ${resposta}`)
    }
}