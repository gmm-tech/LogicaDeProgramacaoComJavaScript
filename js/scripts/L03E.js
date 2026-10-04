/*
    Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).
*/

export function L03E() {
    alert(`Enunciado: Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).`)

    let expoente = 0
    let resultado = 1
    let visualizacao = ""

    while(expoente < 15) {
        resultado *= 3
        expoente++
        visualizacao += `${resultado}\n`
    }
    alert(visualizacao)
}