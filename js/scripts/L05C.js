/*
    Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).
*/

export function L05C() {
    alert(`Enunciado: Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).`)

    let soma = 0
    for(let i = 1; i <= 100; i++) {
        soma += i
    }

    alert(`${soma}`)
}