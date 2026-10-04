/* 
    Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).
*/

export function L03B() {
    alert(`Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).`)

    let numero = 1
    let soma = 0

    while(numero <= 100) {
        soma = soma + numero
        numero++
    }

    alert(soma)

}