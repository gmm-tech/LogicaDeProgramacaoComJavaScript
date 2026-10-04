/*
    Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^)
*/

export function L05G() {
    alert(`Enunciado: Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).`)

    alert(`IMPORTANTE: Este exercicio usa console.log() para mostrar seu resultado devido a quantidade massiva de números.`)

    let resultado = 1

    for (let expoente = 0; expoente <= 15; expoente++) {
        console.log(`3^${expoente} = ${resultado}`)
        resultado *= 3
    }
}